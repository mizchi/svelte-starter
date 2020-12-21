import App from "./App.svelte";

new App({
  target: document.querySelector("#root"),
  props: {
    counter: 5,
  },
});
