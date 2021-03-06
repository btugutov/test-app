
# coding: utf-8

# In[167]:


## From SQL to DataFrame Pandas
import pandas as pd
import pyodbc
import json


# In[168]:


# START CONFIG
# SET ALL OF THE THINGS HERE!!!
# Read in the credentials
with open("ka_creds.json") as f:
    credentials = json.load(f)

# what tables will we be reading from
ka_table = '[dbo].[KA_employee]'
bp_table = '[dbo].[tblEmployee]'

bp_columns = '''
[FirstName],
[LastName],
[Title],
[Team],
[SeparationDate],
[Email],
[Specialization],
[WFMID],
[Specialization2],
[Specialization3]
'''
ka_columns = '''
[first_name],
[last_name],
[title],
[team],
[separation_date],
[email],
[specialization],
[wfm_id],
[specialization2],
[specialization3]
'''
values = '?,?,?,?,?,?,?,?,?,?'

#bp_query = 'SELECT ' + bp_columns + ' FROM ' + bp_table + ' WHERE Email IS NOT NULL'
bp_query = 'SELECT ' + bp_columns + ' FROM ' + bp_table
ka_query = 'SELECT ' + ka_columns + ' FROM ' + ka_table

# END CONFIG


# In[169]:


def log(db,event,level='INFO'):
    '''
    Parameters
    ----------
    level : INFO DEBUG WARNING ERROR
    '''
    webapp = 'KA_ETL_Service'
    ka_log = '[dbo].[KA_log]'
    log_columns = '''
    [log_level],[log_event],[webapp]
    '''
    log_cursor = db.cursor()
    
    log_cursor.execute("INSERT INTO "+ka_log+"("+log_columns+") VALUES (?,?,?)",
                       level,
                       event,
                       webapp)
    log_cursor.commit()
    log_cursor.close()


# In[170]:


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


# In[171]:


bp_db = Database(credentials['bp_database'],credentials['bp_server'],credentials['bp_username'],credentials['bp_pass'])
ka_db = Database(credentials['ka_database'],credentials['ka_server'],credentials['ka_username'],credentials['ka_pass'])


# In[172]:


# def log(db,event,level='info'):
log(ka_db,str("Starting script to update :"+ka_table), "INFO")

bp_df = pd.read_sql(bp_query, bp_db.connect())
ka_df = pd.read_sql(ka_query, ka_db.connect())


# In[173]:


# make the BP version of things fit the Knowledge assessment version of things
bp_df = bp_df.rename(index=str, columns={"FirstName":"first_name","LastName":"last_name","SeparationDate":"separation_date","WFMID":"wfm_id"})
bp_df = bp_df.rename(str.lower, axis='columns')


# In[174]:


# for test existing table has 5 items and new table has 15
# 5 should be update # 10 should be insert
#bp_df = bp_df.head(5) # testing. comment out for real

ka_df_insert = bp_df.merge(ka_df, on=['wfm_id'], how='left', suffixes=('', '_ka')) # join left on ka table
ka_df_insert = ka_df_insert[ka_df_insert['email_ka'].isin([pd.np.NaN])]  # clear out rows that exist in KA table

ka_df_update = bp_df.merge(ka_df, on=['wfm_id'], how='right', suffixes=('', '_ka')) # Join right on wfm table
ka_df_update = ka_df_update[~ka_df_update['email'].isin([pd.np.NaN])]  # clear out rows that exist in KA table


# In[175]:


#ka_df_insert
ka_df_update


# In[176]:


ka_df_insert


# In[177]:


cursor = ka_db.cursor()

# log(ka_db,str("Clearing data from :"+ka_table), "INFO")

# delete table first
# cursor.execute("DELETE FROM "+ka_table)
# cursor.commit()

log(ka_db,str("Starting update of :"+ka_table), 'INFO')
a = int(0)
wfmid = 'OKAY...something really bad happened... i did not even enter the try...'
try:
    for index,row in ka_df_insert.iterrows():
        wfmid = row['wfm_id']
        if row['email'] == None:
            log(ka_db,"The wfm_id : " + str(wfmid) + ' has no Email!','WARNING')
        else:
            cursor.execute("INSERT INTO "+ka_table+"("+ka_columns+") VALUES ("+values+")",
                           row['first_name'],
                           row['last_name'],
                           row['title'],
                           row['team'],
                           row['separation_date'],
                           row['email'],
                           row['specialization'],
                           row['wfm_id'],
                           row['specialization2'],
                           row['specialization3']
                          )

            a = int(index)
            cursor.commit()

except:
    log(ka_db,"There was an error executing this service : Cannot commit a row",'ERROR')
    log(ka_db,"The Offending wfm_id is : "+str(wfmid),'ERROR')
    print(wfmid)
    print(row)
else:
    log(ka_db,str(a)+" rows were effected this run.")  
print('***************** DONE *****************')


# In[193]:


cursor = ka_db.cursor()

log(ka_db,str("Starting update of :"+ka_table), 'INFO')
a = int(0)
wfmid = 'OKAY...something really bad happened... i did not even enter the try...'
try:
    for index,row in ka_df_update.iterrows():
        counter = int(0)
        queryStatement = "UPDATE " + ka_table + " SET "
        whereStatement = ''
        
        for col, value in row.iteritems():
            #print('1')
            try:
                if '_ka' not in col:
                    # check for wfm_id and do different things with it
                    if 'wfm_id' in col:
                        whereStatement = " WHERE wfm_id = '"
                        whereStatement += value
                        whereStatement += "'"
                        break
                    
                    #print('2')
                    if counter > 0 :
                        #print('3')
                        queryStatement += ", "
                    #print('4')
                    if value is None :
                        #print('5')
                        queryStatement += col
                        queryStatement += " = Null"
                    else:
                        #print('6')
                        queryStatement += col
                        #print('6a')
                        queryStatement += " = '"
                        #print('6b')
                        value = value.replace("'", "''")
                        # print(value)
                        queryStatement += value
                        queryStatement += "'"
                        #print('6c')
                    #print('7')
                    counter += 1
                    #print('8')
            except:
                print('catch error')
                print(col)
                print(value)
        queryStatement += " "
        queryStatement += whereStatement
        # print(queryStatement)

        wfmid = row['wfm_id']
        if row['email'] == None:
            log(ka_db,"The wfm_id : " + str(wfmid) + ' has no Email!','WARNING')
            print('***************** printing out a row *****************')
            print(row['wfmid'])
        else:
            try:
                cursor.execute(queryStatement)
                cursor.commit()
            except:
                print('***************** EXCEPT *****************')
                print(queryStatement)
                log(ka_db,"The Offending query is : "+str(wfmid),'ERROR')
                #print(row[])
except:
    log(ka_db,"There was an error executing this service : Cannot commit a row",'ERROR')
    log(ka_db,"The Offending wfm_id is : "+str(wfmid),'ERROR')
    print('***************** EXCEPT *****************')
    print(queryStatement)
    #print(row)
else:
    log(ka_db,str(a)+" rows were effected this run.")  
    
# print('***************** DID THIS HAPPEN? *****************')


# In[194]:


log(ka_db,str("Script complete. Going to sleep."), "INFO")

cursor.execute(
    'EXEC sp_stored_proc_controller'
)
cursor.commit()

cursor.close()
ka_db.disconnect()
