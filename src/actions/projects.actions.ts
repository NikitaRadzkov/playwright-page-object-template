import { BrowserContext, Page } from '@playwright/test';

import ProjectsPage from '../pages/projects.page';
import BaseActions from './base/base.actions';

class RegisterActions extends BaseActions {
  projectsPage: ProjectsPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.projectsPage = new ProjectsPage(page, context);
  }
}

export default RegisterActions;
