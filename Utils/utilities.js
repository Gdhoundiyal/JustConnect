
 

//  import vue from "vue"

//  export default{(vue){

//  } vue.prototype.$globals = globals}
const globals = {
    colors: {
        background1: "#2E2E2E",
    background2: "#262626",
    text: "#878A92",


    },
    fontSizes: {
        small: '12px',
        medium: '16px',
        large: '20px'
    }
};

export default {
    install(Vue) {
        Vue.prototype.$globals = globals;
    }
};