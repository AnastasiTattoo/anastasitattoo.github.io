import getParamsFromPath from "/src/utils/getParamsFromPath.js";

export class History {
  constructor() {
    this.path = location.search;
    this.state = getParamsFromPath(this.path);

    window.addEventListener('popstate', () => {
      this.path = location.search;
      this.state = history.state;
      this.rerender();
    });
  }

  pushState(path, params) {
    if (this.path === path && JSON.stringify(this.state) === JSON.stringify(params)) return;

    this.path = path;
    this.state = params;
    history.pushState(params, null, path);
    this.rerender();
  }

  replaceState(path, params) {
    this.path = path;
    this.state = params;
    history.replaceState(params, null, path);
    this.rerender();
  }

  back() {
    history.back();
    this.rerender();
  }

  forward() {
    history.forward();
    this.rerender();
  }

  rerender() {
    LESCH.ComponentRenderer.renderRoot();
  }
};

export default History;