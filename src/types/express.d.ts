declare namespace Express {
  interface Request {
    database?: string;
    userId?: string;
  }

  interface Response {
    message?: string;
    data?: any;
  }
}
