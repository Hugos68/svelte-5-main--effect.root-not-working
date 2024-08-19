import App from "./App.svelte";
import { mount } from "svelte";

let props = $state({ count: 0 });

const app = mount(App, {
  target: document.getElementById("app"),
  props,
});

$effect.root(() => {
  $effect(() => {
    console.log(props.count);
  });
});

export default app;
