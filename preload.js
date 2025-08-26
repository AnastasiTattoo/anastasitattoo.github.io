import EventController from './src/utils/EventController';
import ComponentRenderer from './src/utils/ComponentRenderer';
import History from './src/utils/History';
import DataBaseController from './src/utils/DataBaseController';

window.LESCH = {};
window.LESCH.EventController = new EventController();
window.LESCH.ComponentRenderer = new ComponentRenderer();
window.LESCH.History = new History();
window.LESCH.DataBaseController = new DataBaseController();
window.LESCH.isReady = true;
