import { Page } from "@playwright/test";

import ProjectsPage from "../pages/projects.page";
import BaseActions from "./base/base.actions";

class RegisterActions extends BaseActions {
  projectsPage: ProjectsPage;

  constructor(page: Page) {
    super(page);
    this.projectsPage = new ProjectsPage(page);
  }
}

export default RegisterActions;
