def KA_profile_population():
    # coding: utf-8

    # In[1]:


    scriptName = 'ETL_profile_population'
    print(scriptName)

    ## From SQL to DataFrame Pandas
    import pandas as pd
    import pyodbc
    import json
    print('imports done')


    # In[2]:


    # START CONFIG
    # SET ALL OF THE THINGS HERE!!!
    # Read in the credentials
    with open("ka_creds.json") as f:
        credentials = json.load(f)

    # what tables will we be reading from
    table_employee = '[dbo].[KA_employee]'
    table_employee_dev = '[dbo].[KA_employee_dev]'
    table_profile = '[dbo].[KA_profile]'

    #reference_table = 'KA_employee'
    #reference_table_dev = 'KA_employee_dev'

    columns_employee = '''
    [first_name],[last_name],[title],[team],[separation_date],[email],[specialization],[specialization2],[specialization3],[wfm_id]
    '''
    values_employee = '?,?,?,?,?,?,?,?,?,?'

    columns_profile = '''
    [profile_id],[email],[reference_table]
    '''
    columns_profile_write = '''
    [email],[reference_table]
    '''
    columns_profile_separated = '''
    [profile_id],[email],[reference_table],[separation_date]
    '''

    values_profile  = '?,?,?'
    values_profile_write  = '?,?'
    values_profile_separated  = '?,?,?,?'

    query_employee = 'SELECT '+columns_employee+' FROM '+table_employee + ' WHERE email IS NOT NULL'
    query_employee_dev = 'SELECT '+columns_employee+' FROM '+table_employee_dev + ' WHERE email IS NOT NULL'
    query_profile = 'SELECT '+columns_profile+' FROM '+table_profile

    mergeKey = ['email','reference_table']

    # END CONFIG


    # In[3]:


    def tableUpdate(table,columns,values,row):
        try:
            cursor.execute("INSERT INTO "+table+"("+columns+") VALUES ("+values+")",
                        row['profile_id'],
                        row['email'],
                        row['reference_table']
                        )
            cursor.commit()
            return 'success'
        except:
            log(ka_db,"There was an error executing this service : Cannot commit a row. The Offending email is : "+str(email),'ERROR')
            return 'error'


    # In[4]:


    def tableInsert(df, table, columns, values):
        ins_success = int(0)
        ins_fail = int(0)
        for index,row in df.iterrows():
            email = row['email']
            #print("INSERT INTO "+table+"("+columns+") VALUES ("+values+")",row['email'],reference_table)
            try:
                cursor.execute("INSERT INTO "+table+"("+columns+") VALUES ("+values+")",
                            row['email'],
                            row['reference_table']
                              )
                cursor.commit()
                ++ins_success
            except:
                log(ka_db,"There was an error executing this service : Cannot commit a row. The Offending email is : "+str(email),'ERROR')
                ++ins_fail
        return (ins_success, ins_fail)


    # In[5]:


    def log(db,event,level='INFO'):
        '''
        Parameters
        ----------
        level : INFO DEBUG WARNING ERROR
        '''
        webapp = 'Knowledge Assessment'
        user_id = scriptName
        host = scriptName
        
        ka_log = '[dbo].[KA_log]'
        log_columns = '''
        [log_level],[log_event],[webapp],[host],[user_id]
        '''
        log_cursor = db.cursor()

        log_cursor.execute("INSERT INTO "+ka_log+"("+log_columns+") VALUES (?,?,?,?,?)",
                        level,
                        event,
                        webapp,
                        host,
                        user_id)
        log_cursor.commit()
        log_cursor.close()


    # In[6]:


    class Database:
        def __init__(self,db,server,user,pw):
            self.db = db
            self.server = server
            self.user = user
            self.pw = pw
        def connect(self):
            #print('connecting to '+self.db)
            conn = pyodbc.connect('DRIVER={SQL Server}; SERVER='+self.server+'; DATABASE='+self.db+'; UID='+self.user+'; PWD='+self.pw)
            return conn
        def query(self,select,table,where):
            print("this does not work yet... please ignore the broken everything...it's just a outward reflection of my innerself...What?")
            #s = 'SELECT '+select
            query = select+table+where
            result = pd.read_sql(query,self.connect())
            return result
        def cursor(self):
            #print('Creating cursor for :'+self.db)
            conn = self.connect()
            return conn.cursor()
        def commit(self):
            #print('Running commit for :'+self.db)
            conn = self.connect()
            conn.commit()
        def disconnect(self):
            conn = self.connect()
            conn.close()


    # In[7]:


    ka_db = Database(credentials['ka_database'],credentials['ka_server'],credentials['ka_username'],credentials['ka_pass'])


    # In[8]:


    # def log(db,event,level='info'):
    log(ka_db,str("Starting script to update :"+table_profile), "INFO")

    # bp_df = pd.read_sql(bp_query, bp_db.connect())
    df_employee = pd.read_sql(query_employee, ka_db.connect())
    df_employee_dev = pd.read_sql(query_employee_dev, ka_db.connect())
    df_employee = pd.concat([df_employee,df_employee_dev])
    df_profile = pd.read_sql(query_profile, ka_db.connect())

    df_employee['reference_table'] = 'KA_employee'
    df_employee_dev['reference_table'] = 'KA_employee_dev'


    # In[9]:


    df_joined = df_employee.merge(df_profile, on=mergeKey, how='outer')
    df_newEmails = df_joined[df_joined['profile_id'].isnull()]

    df_employee_separated = df_joined[~df_joined['separation_date'].isnull()]


    # In[10]:


    count = df_newEmails['email'].count()
    if count == 0:
        log(ka_db,str("No new Emails to :"+table_profile), "INFO")
    else:
        cursor = ka_db.cursor()
        log(ka_db,str("Adding " + str(count) + " new Emails from " + table_employee + " to :" + table_profile), "INFO")

        result = tableInsert(df_newEmails, table_profile, columns_profile_write, values_profile_write)
        
        log(ka_db,str(result[0])+" rows were successfully effected this run.")
        log(ka_db,str(result[1])+" rows had issues this run. Please review logs")
        
        cursor.close()


    # In[11]:


    count = df_employee_separated['email'].count()
    #print(count)
    if count == 0:
        log(ka_db,str("No new separated employees to :" + table_profile), "INFO")
    else:
        cursor = ka_db.cursor()
        log(ka_db,str("Marking " + str(count) + " profile_id's as separated in :" + table_profile), "INFO")

        #result = tableInsert(df_newEmails, table_profile, columns_profile_write, values_profile_write)
        
        ins_success = int(0)
        ins_fail = int(0)
        for index,row in df_employee_separated.iterrows():
            email = row['email']
            #print(row['reference_table'])
            #print(str("UPDATE " + str(table_profile) + " SET soft_delete = 1 " + "WHERE [profile_id] = " + str(row['profile_id']) + " and [email] = " + str(row['email']) + " and [reference_table] = " + str(row['reference_table'])))
            try:
                #print('try')
                cursor.execute("UPDATE "+table_profile+" SET soft_delete = 1 "+
                               "WHERE profile_id = " + str(row['profile_id']) + " and email = '" + str(row['email']) + "' and reference_table = '" + str(row['reference_table']) +"'"
                              )
                cursor.commit()
                ins_success += 1
            except:
                #print('except')
                ins_fail += 1
                log(ka_db,"There was an error executing this service : Cannot commit a row. The Offending email is : "+str(email),'ERROR')
                
        #print(ins_success)
        #print(ins_fail)
        log(ka_db,str(ins_success)+" rows were successfully effected this run.")
        log(ka_db,str(ins_fail)+" rows had issues this run. Please review logs")
        
        #cursor.close()


    # In[12]:


    log(ka_db,str("Script 'ETL_Profile' complete. Going to sleep."), "INFO")
    ka_db.disconnect()

