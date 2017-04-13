"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log('[IndexRoute::create] Creating index route');
        router.get('/', (req, res, next) => {
            return new IndexRoute().index(req, res, next);
        });
    }
    constructor() {
        super();
    }
    index(req, res, next) {
        this.title = 'Ama Watches Shop';
        let options = {
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
exports.IndexRoute = IndexRoute;
