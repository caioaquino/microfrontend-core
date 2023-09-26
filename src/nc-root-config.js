import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@nc/menu",
  app: () => System.import("@nc/menu"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
