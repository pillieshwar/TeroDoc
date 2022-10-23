import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "./body/Dashboard";
import { ReviewRequestPage } from "./body/ReviewRequestPage";
import { SopPage } from "./body/SopPage";

import { Cancel } from "./body/Cancel";
import { Consent } from "./body/Consent";
import { Sidebar } from "./sidebar/Sidebar";

export function Rout() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Sidebar {...props}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/sop" exact component={SopPage} />
              <Route path="/consent" exact component={Consent} />
              <Route
                path="/reviewrequest"
                exact
                component={ReviewRequestPage}
              />
            </Switch>
          </Sidebar>
        )}
      />
    </BrowserRouter>
  );
}
