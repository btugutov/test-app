
# coding: utf-8

# In[1]:


scriptName = 'KA_ETL_Grading'
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

KA_choice_response = '[dbo].[KA_choice_response]'
KA_input_response = '[dbo].[KA_input_response]'

mergeKey = ['email','reference_table']

# END CONFIG


# In[20]:


vw_completed_quizzes = '''
SELECT [submit_id]
      ,[topic]
      ,[quiz_id]
      ,[quiz_start_time]
      ,[quiz_stop_time]
      ,[profile_id]
      ,[soft_delete]
      ,[graded]
      ,[graded_casted]
      ,[graded_converted]
      ,[graded_by]
      ,[question_id]
      ,[answer_id]
      ,[answer_time_start]
      ,[answer_time_stop]
      ,[input_value]
      ,[grade]
      ,[training_module]
      ,[grade_input]
      ,[prompt]
      ,[training_url]
      ,[point_value]
      ,[question_type_id]
      ,[grade_value]
  FROM [dbo].[vw_completed_quizzes]
  where answer_id is not null
  '''


# In[21]:


KA_answers_query = '''
SELECT [answer_id]
      ,[question_id]
      ,[correct]
      ,[soft_delete]
  FROM [dbo].[KA_answers]
  '''


# In[22]:


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


# In[23]:


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


# In[24]:


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


# In[25]:


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


# In[26]:


ka_db = Database(credentials['ka_database'],credentials['ka_server'],credentials['ka_username'],credentials['ka_pass'])


# In[27]:


df = pd.read_sql(vw_completed_quizzes, ka_db.connect())
df_answers = pd.read_sql(KA_answers_query, ka_db.connect())


# In[28]:


#df['percent'] = float
#df['percent_value'] = float
cursor = ka_db.cursor()
for index, row in df.iterrows():
    percent = 0
    if row['answer_id'] == '0':
        grade = (row['grade'])
        point_value = (row['point_value'])
        percent = grade / point_value
    else:
        answers = (row['answer_id']).split(',')
        ans_total = 0
        ans_correct = 0
        for item in answers:
            ans_total += 1
            thisRow = df_answers.loc[df_answers['answer_id'] == int(item)]
            if thisRow['correct'].bool() == 1:
                ans_correct += 1
            
            percent = ans_correct / ans_total
            
    if float(percent) >= 0:
        percent = percent
    else:
        percent = float(0.0)
    
    percent_value = percent * int(row['point_value'])
    
    #df.set_value(index, 'percent', float(percent))
    #df.set_value(index, 'grade_value', float(percent_value))
    
    #for index, row in df.iterrows():
    if row['question_type_id'] == 1:
        #print('1')
        updateTable = KA_choice_response
    elif row['question_type_id'] == 2:
        #print('2')
        updateTable = KA_input_response
    else:
        print('Hey! Listen!!')
        
    try:
        #print('try')
        #print('UPDATE')
        #print(updateTable)
        #print('UPDATE ' + str(updateTable))
        #print(' SET grade_value = '+ str(percent_value))
        #print(' WHERE submit_id = '+ str(row['submit_id']) + ' AND question_id = ' + str(row['question_id']))
        #setStatement = 'UPDATE ' + updateTable + ' SET grade_value = ' + str(percent_value)
        #whereStatement = ' WHERE submit_id = '+ str(row['submit_id']) + ' AND question_id = ' + str(row['question_id'])
        #print(setStatement + whereStatement)
        #print(whereStatement)
        
        cursor.execute("UPDATE "+ updateTable + " SET grade_value = "+ str(percent_value) + 
                       " WHERE submit_id = " + str(row['submit_id']) + " AND question_id = " + str(row['question_id']) +";"
                      )
        cursor.commit()
    except:
        print('except')
        log(ka_db,"There was an error executing this service : Grade issue has occured : ",'ERROR')

cursor.close()
print('complete')


# In[29]:


log(ka_db,str("Script 'ETL_Profile' complete. Going to sleep."), "INFO")
ka_db.disconnect()

