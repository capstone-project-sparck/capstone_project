import sys
import os
import unittest 
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from config.db import engine, session
from models.consolidate import Consolidated, Connection
from sqlalchemy.orm.session import Session



class Test_Db(unittest.TestCase):
  def test_engine_conn(self):
    self.assertTrue(engine)
  
  def test_session_type(self):
    self.assertTrue(isinstance(session, Session))
  
  def test_consolidated_exists(self):
    self.assertTrue(session.query(Consolidated).all())

  def test_connections_exists(self):
    self.assertTrue(session.query(Connection).all())

if __name__ == '__main__':
    unittest.main()