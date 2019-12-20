import { FormGroupInput } from "../components/index";

const GlobalComponents = {
  install(Vue) {
    Vue.component("fg-input", FormGroupInput); 
 
  }
};

export default GlobalComponents;
