/*
    @ Router
    Routes... Something... I think?
*/

class Router {
    constructor(params) {
        this.app = params.app ? params.app : undefined;
        this.mode = params.mode ? params.mode : 'history';
        this.baseUrl = params.baseUrl ? params.baseUrl : null;
        this.routes = params.routes ? params.routes : [];

        switch (this.mode) {
            case 'hash':
                this.initHashMode();
                break;
            case 'history':
                this.initHistoryMode();
                break;
            case 'dual':
                this.initDualMode();
                break;
            default:
                this.initHistoryMode();
                break;
        }
    }

    registerApp(app) {
        this.app = app;
    }

    /* Hash Mode */
    initHashMode() {
        this.hashChanged = this.hashChanged.bind(this);
        window.addEventListener('hashchange', this.hashChanged);
        if(this.mode != 'dual') window.addEventListener('DOMContentLoaded', this.hashChanged);
    }

    hashChanged() {
        this.UrlChanged(window.location.hash.replace(/^#\/?|\/$/g, ''));
    }
    /* Hash Mode END */


    /* History Mode */
    initHistoryMode() {
        this.historyChanged = this.historyChanged.bind(this);

        window.addEventListener('popstate', () => {
            this.historyChanged();
        });
        window.addEventListener('DOMContentLoaded', () => {
            this.historyChanged();
        });
    }

    historyChanged() {
        // Trimming base URL
        this.UrlChanged(window.location.pathname.replace(new RegExp(`^${this.baseUrl}`), ''));
    }
    /* History Mode End */


    /* Dual Mode */
    initDualMode() {
        this.initHashMode();
        this.initHistoryMode();
    }
    /* Dual Mode End */


    UrlChanged(path) {
        const route = this.routes.filter(route => { 
            return route.path.match(new RegExp(`^\/?${path}\/?$`));
        })[0];

        this.currentRoute = route;

        if (route) {
            this.app.showComponent(route.component);
        } else {
            this.app.showComponent();
        }
    }

}

export default Router;