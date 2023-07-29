import { NextFunction, Request, Response } from "express";
import * as jwt from "jwt-simple";

interface DataJWT {
  user: string
  database: string
  clientId: string
  iat: number
  exp: number
}

async function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (request?.headers?.authorization) {
    const token = request.headers.authorization.replace(/['"]+/g, "");
    try {
      const dataJWT: DataJWT = jwt.decode(
        token,
        'P05R35T@'
      );

      const database: string = dataJWT?.database;
      const userId: string = dataJWT?.user;

      request['database'] = database;
      request['userId'] = userId

      // Asignar los valores al request
      //request.database = database;
      //request.userId = userId;
      
      console.log(database)
      console.log(userId)

      next()
    } catch (error) {
      response.status(500).send({ "error": error })
    }
  } else {
    response.status(500).send({ "error": "no se encontro token" })
  }
}

export default authMiddleware;
