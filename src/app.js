import Angular from 'angular';
import 'angular-ui-router';
import 'angular-local-storage';

import Routes from './routes';
import Config from './config';



//Components
import Navigation from './components/navigation';
import List from './components/list';
import Store from './components/store';

//Filters
import showDoneFilter from './filters/showDoneFilter';

//Services
import ListStorage from './services/ListStorage';
import StoreStorage from './services/StoreStorage';

//Controllers
import ListController from './controllers/ListController';
import StoreController from './controllers/StoreController';
import ShoppingController from './controllers/ShoppingController';



Angular.module('Boodschap', ['ui.router', 'LocalStorageModule'])
    .controller('ListController', ListController)
    .controller('StoreController', StoreController)
    .controller('ShoppingController', ShoppingController)
    .factory('listStorage', ListStorage)
    .factory('storeStorage', StoreStorage)
    .filter('showDone', showDoneFilter)
    // .factory('push', PushFactory)
    // .component('home', HomeView)
    // .component('login', LoginView)
    .component('navigation', Navigation)
    .component('list', List)
    .component('store', Store)
    .config(Routes)
    .config(Config);

import 'bootstrap';