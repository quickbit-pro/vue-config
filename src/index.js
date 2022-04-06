import Config from './config';

export default {
    install(app, options) {
        app.provide('$config', new Config(options.config || {}));
    }
};
