// ? toto je bonusová třída pro řešení situací, kdy mám nejednoznačné chování i funkcionality

import { LoginPage } from "./login_page";
import { LostPasswordPage } from "./lost_password_page";

export class LostPasswordTransfer {
  onLoginPage() {
    return new LoginPage();
  }

  onLostPasswordPage() {
    return new LostPasswordPage();
  }
}
