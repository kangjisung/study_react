import {MongoClient, Db} from 'mongodb'

export type MongoDB = Db
export type ConnectCallbacl = (db: MongoDB) => void

export const connectAndUseDB = async (
  callback: ConnectCallbacl,
  dbName: string,
  mongoUrl: string = 'mongodb://localhost:27017'
) => {
  let connection
  try {
    connection = await MongoClient.connect(mongoUrl)
    const db: Db = connection.db(dbName)
    callback(db)
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
}
