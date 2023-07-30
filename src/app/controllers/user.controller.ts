import { Request, Response, NextFunction } from "express";
import MongoDBManager from "../dbs/mongodb";
import { ObjectId } from "mongodb";
import { UserI } from "../interfaces";

const mongoDBManager = new MongoDBManager();
export default class UserController {

  async getMe(
    request: Request,
    response: Response,
    next: NextFunction) {
      try {
        await mongoDBManager.initConnection(request['database'] || '');
        const usersCollection = mongoDBManager.getCollection('users');
        const user: UserI = await usersCollection.findOne({ _id: new ObjectId(request['userId']) });
        mongoDBManager.closeConnection();
        
        if (!user) {
          return response.status(404).json({ message: 'Usuario no encontrado' });
        }
        return response.status(200).json(user);
      } catch (error) {
        mongoDBManager.closeConnection();
        return response.status(500).json({ message: 'Error interno del servidor' });
      }
  }

}
