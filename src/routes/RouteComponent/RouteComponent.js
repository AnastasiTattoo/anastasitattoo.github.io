import Component from '/src/components/Component/Component';
import { ROUTES_PATH } from '/src/utils/constants';

export class RouteComponent extends Component {
  getStylePath() {
    return `${ROUTES_PATH}/${this.constructor.name}/style.css`;
  }
};

export default RouteComponent;
