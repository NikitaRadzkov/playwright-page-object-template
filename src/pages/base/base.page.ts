import { BrowserContext, Page } from '@playwright/test';

const map = new Map();

export default class BasePage {
  readonly page: Page;
  readonly context: BrowserContext;
  Map: Map<unknown, Page | unknown>;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.Map = map;
  }

  protected locatorWrapper(isNewPage = false) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const page: Page = isNewPage ? this.Map.get('newPage') : this.page;
    return page;
  }
}
