import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import ReactHeap from "reactjs-heap";
import ReduxToastr from "react-redux-toastr";
import {
  disableSidebarForRoute,
  disableNavigationForRoute,
} from "@topcoder/mfe-header";
import GetStarted from "./routes/GetStarted";
import ContactDetails from "./routes/ContactDetails";
import PaymentSetup from "./routes/PaymentSetup";
import PaymentProviders from "./routes/PaymentSetup/PaymentProviders";
import PaymentMethod from "./routes/PaymentSetup/PaymentMethod";
import PaymentComplete from "./routes/PaymentSetup/PaymentComplete";
import BuildMyProfile from "./routes/BuildMyProfile";
import TaxForm from "./routes/PaymentSetup/TaxForm";
import Form from "./routes/PaymentSetup/Form";
import TaxInfo from "./routes/PaymentSetup/TaxInfo";
import TaxConfirm from "./routes/PaymentSetup/TaxConfirm";
import TaxComplete from "./routes/PaymentSetup/TaxComplete";
import store from "./store";
import "./styles/main.vendor.scss";
import styles from "./styles/main.module.scss";
import { HEAP_ANALYTICS_KEY } from "../config";

if (HEAP_ANALYTICS_KEY) {
  ReactHeap.initialize(HEAP_ANALYTICS_KEY);
}

export default function Root() {
  useEffect(() => {
    disableNavigationForRoute("/onboard/*");

    disableSidebarForRoute("/onboard");
    disableSidebarForRoute("/onboard/contact-details");
    disableSidebarForRoute("/onboard/payment-setup");
    disableSidebarForRoute("/onboard/build-my-profile");
    disableSidebarForRoute("/onboard/payment-setup/payment-provider");
    disableSidebarForRoute("/onboard/payment-setup/payment-provider/paypal");
    disableSidebarForRoute("/onboard/payment-setup/payment-provider/payoneer");
    disableSidebarForRoute(
      "/onboard/payment-setup/payment-provider/western-union"
    );
    disableSidebarForRoute(
      "/onboard/payment-setup/payment-provider/paypal/complete"
    );
    disableSidebarForRoute(
      "/onboard/payment-setup/payment-provider/payoneer/complete"
    );
    disableSidebarForRoute(
      "/onboard/payment-setup/payment-provider/western-union/complete"
    );
    disableSidebarForRoute("/onboard/payment-setup/tax-form");
    disableSidebarForRoute("/onboard/payment-setup/tax-form/:formName");
    disableSidebarForRoute("/onboard/payment-setup/tax-form/:formName/info");
    disableSidebarForRoute("/onboard/payment-setup/tax-form/:formName/confirm");
    disableSidebarForRoute(
      "/onboard/payment-setup/tax-form/:formName/complete"
    );
  }, []);

  return (
    <div className={styles["topcoder-micro-frontends-onboarding-app"]}>
      <Provider store={store}>
        <Router>
          <GetStarted path="/onboard" />

          <ContactDetails path="/onboard/contact-details" />

          <PaymentSetup path="/onboard/payment-setup" />

          <PaymentProviders path="/onboard/payment-setup/payment-provider" />
          <PaymentMethod path="/onboard/payment-setup/payment-provider/:paymentMethod" />
          <PaymentComplete path="/onboard/payment-setup/payment-provider/:paymentMethod/complete" />

          <TaxForm path="/onboard/payment-setup/tax-form" />
          <Form path="/onboard/payment-setup/tax-form/:formName" />
          <TaxInfo path="/onboard/payment-setup/tax-form/:formName/info" />
          <TaxConfirm path="/onboard/payment-setup/tax-form/:formName/confirm" />
          <TaxComplete path="/onboard/payment-setup/tax-form/:formName/complete" />

          <BuildMyProfile path="/onboard/build-my-profile" />
        </Router>

        {/* Global config for Toastr popups */}
        <ReduxToastr
          timeOut={4000}
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </Provider>
    </div>
  );
}
