declare namespace Express {
    interface Request {
      database?: string;
      userId?: string;
    }
  }