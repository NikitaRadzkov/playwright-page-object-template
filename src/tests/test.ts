import { test as base } from "@playwright/test";

import App from "../actions";

interface IApp {
  app: App;
}

const test = base.extend<IApp>({
  app: async ({ page }, use) => {
    const app = new App(page);
    use(app);
  },
});

export default test;
