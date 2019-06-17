"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const hmr_1 = require("@angularclass/hmr");
exports.hmrBootstrap = (module, bootstrap) => {
    let ngModule;
    module.hot.accept();
    bootstrap().then(mod => (ngModule = mod));
    module.hot.dispose(() => {
        const appRef = ngModule.injector.get(core_1.ApplicationRef);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = hmr_1.createNewHosts(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=hmr.js.map