import Config from './config';

export default {
    install(app, options) {
       app.config.globalProperties.$config=new Config(options.config || {})
    }
};
