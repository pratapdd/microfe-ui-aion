import Vuejs from "./components/Vuejs.vue";
import { createApp } from "vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Vuejs);
  app.mount(el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_vuejs-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
