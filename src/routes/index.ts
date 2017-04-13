import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './route';

export class IndexRoute extends BaseRoute {

  public static create(router: Router) {
    console.log('[IndexRoute::create] Creating index route');

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      return new IndexRoute().index(req, res, next);
    });
  }

  constructor() {
    super();
  }

  public index(req: Request, res: Response, next: NextFunction) {
    this.title = 'Ama Watches Shop';

    let options: Object = {
      'underHeader': 'Delivery across Russia',
      'underSlider': 'Order from us and get discount!',
      'madeBy': 'Made by Switzerland and Belgium',
      'contacts': {
        'name': 'Misha',
        'phone': '+7(999)167-23-22',
        'email': 'AbramSeller@outlow.com'
      }
    };

    this.render(req, res, 'index', options);
  }
}