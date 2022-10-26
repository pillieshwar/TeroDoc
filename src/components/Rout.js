import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Consent } from "./body/Consent";
import { Dashboard } from "./body/Dashboard";
import { ReviewRequestPage } from "./body/ReviewRequestPage";
import { SopPage } from "./body/SopPage";
import { Sidebar } from "./sidebar/Sidebar";
// import { Testpay } from "./stripepayment/Testpay";
import { Cancel } from "./body/Cancel";
import { Pricing } from "./body/Pricing";
import { Success } from "./body/Success";
import { PdfViewer } from "./body/PdfViewer";

export function Rout() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Sidebar {...props}>
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/sop" exact component={SopPage} />
              <Route path="/" exact component={Consent} />
              <Route
                path="/reviewrequest"
                exact
                component={ReviewRequestPage}
              />
              <Route path="/paymentsuccess" exact component={Success} />
              <Route path="/paymentcancel" exact component={Cancel} />
              <Route path="/pricing" exact component={Pricing} />
              <Route path="/pdfviewer" exact component={PdfViewer} />
            </Switch>
          </Sidebar>
        )}
      />
    </BrowserRouter>
  );
}
