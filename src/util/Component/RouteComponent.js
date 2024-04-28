import Component from "./Component.js";

import { ROUTES_PATH } from "../Common/constants.js";

export class RouteComponent extends Component {
    getStylesPath() {
        return `${ ROUTES_PATH }${ this.name }/${ this.name }.css`;
    }
};

export default RouteComponent;
