import { Request, Response, NextFunction } from "express";
import MongoDBManager from "../dbs/mongodb";
import { ObjectId } from "mongodb";

const mongoDBManager = new MongoDBManager();

export default class UserController {

  async getMe(
    request: Request,
    response: Response,
    next: NextFunction) {

      await mongoDBManager.initConnection(request['database']);

      try {
        const usersCollection = mongoDBManager.getCollection('users');
        const user = await usersCollection.findOne({ _id: new ObjectId(request['userId']) });
  
        if (!user) {
          return response.status(404).json({ message: 'Usuario no encontrado' });
        }
  
        return response.json(user);
      } catch (error) {
        return response.status(500).json({ message: 'Error interno del servidor' });
      }

  }

}
