import { BrowserContext, Page } from '@playwright/test';

import HeaderPage from '../../pages/base/header.page';
import BaseActions from './base.actions';

export default class HeaderActions extends BaseActions {
  headerPage: HeaderPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.headerPage = new HeaderPage(page, context);
  }
}
