/*
@ App
Responsible for DOM updates
*/

/* Default components */
import default_index from './components/default_index.js';
import default_error_404 from './components/default_error_404.js';

class App {
    constructor(params) {
        this.appElement = document.querySelector(params.el);
        this.template = params.template ? params.template : default_index ;
        this.currentComponent = {};
        params.router ? this.registerRouter(params.router) : undefined;
    }
    
    registerRouter(router) {
        this.router = router;
        router.registerApp(this);
    }
    
    showComponent(component) {
        component ? this.currentComponent = component : this.currentComponent = default_error_404;
        this.updateView();
    }
    
    updateView() {
        this.currentComponent.render(this).then((componentView) => {
            this.template.render(this).then((base) => {
                this.appElement.innerHTML = base.replace('<router-view></router-view>', componentView);
                
            });
        });
    }
    
}

export default App;