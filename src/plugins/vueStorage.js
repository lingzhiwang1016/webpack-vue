/* eslint no-param-reassign: 0, no-console: 0 */
export default {
    install(Vue, storage) {
        if (!storage) {
            console.error("You have to install storage");
            return;
        }

        Vue.storage = storage;

        Object.defineProperties(Vue.prototype, {

            storage: {
                get() {
                    return storage;
                }
            },

            $storage: {
                get() {
                    return storage;
                }
            }
        });
    }
};
