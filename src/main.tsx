// style
import "@/styles/index.scss";

// core
import { createApp } from "vue";

// plugin
import { router } from "@/router";

createApp(() => <router-view/>)
    .use(router)
    .mount('#app')
