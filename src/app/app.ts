import { Application, json } from 'express';

import Routes from './routes';

export default class App {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(json());
    // const accessLogStream: WriteStream = fs.createWriteStream(
    //   path.join(__dirname, './logs/access.log'),
    //   { flags: 'a' }
    // );
    //app.use(morgan('combined', { stream: accessLogStream }));
    //app.use(urlencoded({ extended: true }));
    //app.use(json());
    //app.use(helmet());
    //app.use(rateLimiter()); //  apply to all requests
    ///app.use(unCoughtErrorHandler);
  }
}
