import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@nc/dashboard",
  app: () => System.import("@nc/dashboard"),
  activeWhen: ["/dashboard"],
});
registerApplication({
  name: "@nc/register",
  app: () => System.import("@nc/register"),
  activeWhen: ["/register"],
});
registerApplication({
  name: "@nc/menu",
  app: () => System.import("@nc/menu"),
  activeWhen: ["/"],
});
start({
  urlRerouteOnly: true,
});
