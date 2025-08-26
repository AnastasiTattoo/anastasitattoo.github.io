import EventController from '/src/utils/EventController.js';
import ComponentRenderer from '/src/utils/ComponentRenderer.js';
import History from '/src/utils/History.js';
import DataBaseController from '/src/utils/DataBaseController.js';

window.LESCH = {};
window.LESCH.EventController = new EventController();
window.LESCH.ComponentRenderer = new ComponentRenderer();
window.LESCH.History = new History();
window.LESCH.DataBaseController = new DataBaseController();
window.LESCH.isReady = true;
