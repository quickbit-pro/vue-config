import Config from './config';

export default {
    install(Vue, options) {
        const app = Vue.createApp(App);
        app.provide('$config', new Config(options.config || {}));
    }
};
