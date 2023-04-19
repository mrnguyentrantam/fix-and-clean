/* globals window */
import React, { useEffect, useState } from "react";

import { getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  PhoneAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import LoginForm from "./Login";

// Note that next-firebase-auth inits Firebase for us,
// so we don't need to.
const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: "image", // 'audio'
        size: "compact", // 'invisible' or 'compact'
        badge: "bottomright", //' bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: "VN", // Set default country to the United Kingdom (+44).
      // For prefilling the national number, set defaultNationNumber.
      // This will only be observed if only phone Auth provider is used since
      // for multiple providers, the NASCAR screen will always render first
      // with a 'sign in with phone number' button.
      defaultNationalNumber: "1234567890",
      // You can also pass the full phone number string instead of the
      // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
      // the first country ID that matches the country code will be used to
      // populate the country selector. So for countries that share the same
      // country code, the selected country may not be the expected one.
      // In that case, pass the 'defaultCountry' instead to ensure the exact
      // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
      // will always have higher priority than 'loginHint' which will be ignored
      // in their favor. In this case, the default country will be 'GB' even
      // though 'loginHint' specified the country code as '+1'.
      loginHint: "+11234567890",
      // You can provide a 'whitelistedCountries' or 'blacklistedCountries' for
      // countries to select. It takes an array of either ISO (alpha-2) or
      // E164 (prefix with '+') formatted country codes. If 'defaultCountry' is
      // not whitelisted or is blacklisted, the default country will be set to
      // the first country available (alphabetical order). Notice that
      // 'whitelistedCountries' and 'blacklistedCountries' cannot be specified
      // at the same time.
      whitelistedCountries: ["+84"],
    },
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callbacks: {
    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
    signInSuccessWithAuthResult: (result: any) => {
      console.log(result);
      return false;
    },

    // Don't automatically redirect. We handle redirects using
    // `next-firebase-auth`.
  },
};

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(getAuth());
      setRenderAuth(true);
    }
  }, []);

  return <div>{renderAuth ? <LoginForm /> : null}</div>;
};

export default FirebaseAuth;
