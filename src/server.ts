import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';

import { IndexRoute } from './routes/index';

import errorHandler = require('errorhandler');
import logger = require('morgan');
import methodOverride = require('method-override');

/**
 * The server
 *
 * @class Server
 */
export class Server {
  public app: express.Application;

  constructor() {
    // create expressjs application
    this.app = express();

    // configurate application
    this.config();

    // add routes
    this.routes();

    // add api
    this.api();
  }

  /**
   * Bootstrap the application
   *
   * @class Server
   * @method bootstrap
   * @static
   * return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  public config() {
    this.app.use(express.static(path.join(__dirname, '../dist/public')));

    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'pug');

    this.app.use(logger('dev'));

    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    this.app.use(cookieParser('SECRET_GOES_HERE'));

    this.app.use(methodOverride());

    this.app.use(
      function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
      }
    );

    this.app.use(errorHandler());
  }

  private routes() {
    let router: express.Router;
    router = express.Router();

    IndexRoute.create(router);

    this.app.use(router);
  }

  public api() {

  }
}

// export default Server;
