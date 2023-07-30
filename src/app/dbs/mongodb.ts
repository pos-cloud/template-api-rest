import { MongoClient, Db, Collection } from 'mongodb';

class MongoDBManager {
  private client: MongoClient | null = null;
  private database: Db | null = null;
  private collection: Collection<any> | null = null;

  // uri = "mongodb+srv://pos:pos@cluster0.fscmrqu.mongodb.net/?retryWrites=true&w=majority";

  async initConnection(databaseName: string) {
    try {
      const mongoUri = `mongodb://localhost:27017/${databaseName}`; // Reemplaza con tu URL de conexión de MongoDB
      this.client = await MongoClient.connect(mongoUri);
      this.database = this.client.db(databaseName);
      console.log('Conexión con MongoDB establecida');
    } catch (error) {
      console.error('Error al conectar con MongoDB:', error);
      throw error;
    }
  }

  getCollection(collectionName: string): Collection<any> {
    if (!this.database) {
      throw new Error('La conexión con la base de datos no ha sido establecida');
    }
    this.collection = this.database.collection(collectionName);
    return this.collection;
  }

  async closeConnection() {
    if (this.client) {
      await this.client.close();
      console.log('Conexión con MongoDB cerrada');
    }
  }
}

export default MongoDBManager;
