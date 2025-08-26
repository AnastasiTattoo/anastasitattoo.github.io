import Component from '/src/components/Component/Component.js';
import { ROUTES_PATH } from '/src/utils/constants.js';

export class RouteComponent extends Component {
  getStylePath() {
    return `${ROUTES_PATH}/${this.constructor.name}/style.css`;
  }
};

export default RouteComponent;
