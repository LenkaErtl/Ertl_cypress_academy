import { customElement } from "../../helpers/custom_element";

export class AccountsPage {
  constructor() {
    this.titleHeader = customElement('[data-testid="title"]');
  }

  titleHaveText(titleText) {
    this.titleHeader.haveText(titleText);
    return this;
  }
}
