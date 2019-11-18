def KA_Permission_population():
        
    # coding: utf-8

    # In[1]:


    scriptName = 'KA_ETL_Permission_population'
    print(scriptName)

    # coding: utf-8
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

    webapp = 'Knowledge Assessment'
    user_id = scriptName
    host = scriptName

    # permission
    table_permission = '[dbo].[KA_profile_permissions]'
    columns_permission = '[profile_id],[topic_id],[grant_method]'
    values_permission = '?,?,?'
    query_permission = 'SELECT '+columns_permission+' FROM '+table_permission


    # END CONFIG


    # In[3]:


    query_permission = ('''SELECT [profile_permission_id]
          ,[profile_id]
          ,[topic_id]
          ,[access]
          ,[fast_track]
          ,[soft_delete]
          ,[grant_method]
      FROM [dbo].[KA_profile_permissions]''')


    # In[4]:


    query_employee = ('''SELECT [wfm_id]
          ,[first_name]
          ,[last_name]
          ,[title]
          ,[team]
          ,[hire_date]
          ,[separation_date]
          ,[KA_employee].email
          ,[specialization]
          ,[specialization2]
          ,[specialization3]
              ,KA_default_permissions.topic_id
              ,profile_id
      FROM [dbo].[KA_employee]
      JOIN [dbo].[KA_default_permissions] on [dbo].[KA_employee].specialization = KA_default_permissions.key_term or KA_employee.specialization2 = KA_default_permissions.key_term or KA_employee.specialization3 = KA_default_permissions.key_term
      JOIN [dbo].[KA_profile] on [dbo].[KA_profile].email = [dbo].[KA_employee].email''')


    # In[5]:


    query_employee_dev = ('''SELECT [wfm_id]
          ,[first_name]
          ,[last_name]
          ,[title]
          ,[team]
          ,[hire_date]
          ,[separation_date]
          ,[KA_employee_dev].email
          ,[specialization]
          ,[specialization2]
          ,[specialization3]
              ,KA_default_permissions.topic_id
              ,profile_id
      FROM [dbo].[KA_employee_dev]
      JOIN [dbo].[KA_default_permissions] on [dbo].[KA_employee_dev].specialization = KA_default_permissions.key_term or KA_employee_dev.specialization2 = KA_default_permissions.key_term or KA_employee_dev.specialization3 = KA_default_permissions.key_term or KA_default_permissions.key_term = 'DEFAULT'
      JOIN [dbo].[KA_profile] on [dbo].[KA_profile].email = [dbo].[KA_employee_dev].email and KA_profile.soft_delete = 0''')


    # In[6]:


    def log(db,event,level='INFO'):
        '''
        Parameters
        ----------
        level : INFO DEBUG WARNING ERROR
        '''
        
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


    # In[7]:


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
            s = 'SELECT '+select
            q = select+table+where
            r = pd.read_sql(q,self.connect())
            return r
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


    # In[8]:


    ka_db = Database(credentials['ka_database'],credentials['ka_server'],credentials['ka_username'],credentials['ka_pass'])


    # In[9]:


    # def log(db,event,level='info'):
    log(ka_db,str("Starting script : "+scriptName ), "INFO")

    df_employee = pd.read_sql(query_employee, ka_db.connect())
    df_employee_dev = pd.read_sql(query_employee_dev, ka_db.connect())
    df_permission = pd.read_sql(query_permission, ka_db.connect())


    # In[10]:


    df_permission_merge = df_employee.merge(df_permission, on=['profile_id','topic_id'], how='outer')

    df_permission_Add    = df_permission_merge[df_permission_merge['grant_method'].isin([pd.np.NaN])]

    df_permission_Delete = df_permission_merge[df_permission_merge['email'].isin([pd.np.NaN])]
    df_permission_Delete = df_permission_Delete.loc[df_permission_Delete['grant_method'] == 'ETL']

    df_permission_Update = df_permission_merge[~df_permission_merge['email'].isin([pd.np.NaN])]
    df_permission_Update = df_permission_Update[~df_permission_Update['grant_method'].isin([pd.np.NaN])]
    df_permission_Update = df_permission_Update.loc[df_permission_Update['grant_method'] == 'ETL']


    # In[11]:


    #df_permission_Add


    # In[12]:


    #df_permission_Update


    # In[13]:


    #df_permission_Delete


    # In[14]:


    count = df_permission_Add['profile_id'].count()
    #print(count)
    if count == 0:
        log(ka_db,str("No adds to :"+table_permission), "INFO")
    else:
        cursor = ka_db.cursor()
        log(ka_db,str("Adding " + str(count) + " new profile_id to :" + table_permission), "INFO")

        ins_success = int(0)
        ins_fail = int(0)
        for index,row in df_permission_Add.iterrows():
            email = row['email']
            #print("INSERT INTO "+table_permission+"("+columns_permission+") VALUES ("+values_permission+") "+ str(row['profile_id'])+' , '+str(row['topic_id']) + " ETL")
            
            try:
                #print('try')
                # [profile_id],[topic_id],[grant_method]
                cursor.execute("INSERT INTO "+table_permission+"("+columns_permission+") VALUES ("+values_permission+")",
                            row['profile_id'],
                            row['topic_id'],
                            'ETL',
                            )
                cursor.commit()
                ins_success += 1
            except:
                ins_fail += 1
                #print('except')
                log(ka_db,"There was an error executing this service : Cannot commit a row. The Offending email is : "+str(email),'ERROR')
                
                
        #print(ins_success)
        #print(ins_fail)
        log(ka_db,str(ins_success)+" rows were successfully effected this run.")
        log(ka_db,str(ins_fail)+" rows had issues this run. Please review logs")
        
        #cursor.close()


    # In[15]:


    count = df_permission_Update['profile_id'].count()
    #print(count)
    if count == 0:
        log(ka_db,str("No updating to :"+table_permission), "INFO")
    else:
        cursor = ka_db.cursor()
        log(ka_db,str("Updating " + str(count) + " permissions from :" + table_permission), "INFO")

        ins_success = int(0)
        ins_fail = int(0)
        for index,row in df_permission_Update.iterrows():
            email = row['email']
            #print("UPDATE "+table_permission+" SET soft_delete = 0 "+"WHERE profile_id = "+str(row['profile_id'])+" and topic_id = "+str(row['topic_id']))
            
            try:
                #print('try')
                # [profile_id],[topic_id],[grant_method]
                cursor.execute("UPDATE "+table_permission+" SET soft_delete = 0 "+
                               "WHERE profile_id = "+str(row['profile_id'])+" and topic_id = "+str(row['topic_id'])
                              )
                cursor.commit()
                ins_success += 1
            except:
                ins_fail += 1
                #print('except')
                log(ka_db,"There was an error executing this service : Cannot commit a row. The Offending email is : "+str(email),'ERROR')
                
                
        #print(ins_success)
        #print(ins_fail)
        log(ka_db,str(ins_success)+" rows were successfully effected this run.")
        log(ka_db,str(ins_fail)+" rows had issues this run. Please review logs")
        
        #cursor.close()


    # In[16]:


    count = df_permission_Delete['profile_id'].count()
    #print(count)
    if count == 0:
        log(ka_db,str("No deletes to :"+table_permission), "INFO")
    else:
        cursor = ka_db.cursor()
        log(ka_db,str("Deleting " + str(count) + " permissions from :" + table_permission), "INFO")

        ins_success = int(0)
        ins_fail = int(0)
        for index,row in df_permission_Delete.iterrows():
            email = row['email']
            #print("UPDATE "+table_permission+" SET soft_delete = 1 "+"WHERE profile_id = "+str(row['profile_id'])+" and topic_id = "+str(row['topic_id']))
            
            try:
                #print('try')
                # [profile_id],[topic_id],[grant_method]
                cursor.execute("UPDATE "+table_permission+" SET soft_delete = 1 "+
                               "WHERE profile_id = "+str(row['profile_id'])+" and topic_id = "+str(row['topic_id'])
                              )
                cursor.commit()
                ins_success += 1
            except:
                ins_fail += 1
                #print('except')
                log(ka_db,"There was an error executing this service : Cannot commit a row. The Offending email is : "+str(email),'ERROR')
                
                
        #print(ins_success)
        #print(ins_fail)
        log(ka_db,str(ins_success)+" rows were successfully effected this run.")
        log(ka_db,str(ins_fail)+" rows had issues this run. Please review logs")
        
        #cursor.close()


    # In[17]:


    cursor.close()
    log(ka_db,str("Script "+scriptName+" complete. Going to sleep."), "INFO")
    ka_db.disconnect()

