import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@mui/material/Button";
import styles from "@/styles/Home.module.css";
import {
  deleteUser,
  FacebookAuthProvider,
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "@firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Input, TextField } from "@mui/material";
import { async, FirebaseError } from "@firebase/util";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { getApp } from "firebase/app";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [otpCode, setOtp] = useState("");
  const router = useRouter();

  const loginFacebook = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth(getApp());

    signInWithPopup(auth, provider)
      .then((result) => {
        // const additionalInfo = getAdditionalUserInfo(result);
        // if (additionalInfo?.isNewUser) {
        //   router.push("/profile/update-info");
        // }
      })
      .catch((error: FirebaseError) => {
        console.log(error.code);
        if (error.code === "auth/account-exists-with-different-credential") {
          //show warning message
        }
        // ...
      });
  };

  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(getApp());

    signInWithPopup(auth, provider)
      .then((result) => {
        // const additionalInfo = getAdditionalUserInfo(result);
        // if (additionalInfo?.isNewUser) {
        //   router.push("/profile/update-info");
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginPhoneNumber = async () => {
    const appVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      getAuth(getApp())
    );
    window.app;

    const auth = getAuth(getApp());
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phone,
      appVerifier
    );
    (window as any).confirmationResult = confirmationResult;
  };
  const confirmOtp = async () => {
    (window as any).confirmationResult
      .confirm(otpCode)
      .then((result: UserCredential) => {
        // const additionalInfo = getAdditionalUserInfo(result);
        // if (additionalInfo?.isNewUser) {
        //   router.push("/profile/update-info");
        // }
        // ...
      })
      .catch(() => {
        // User couldn't sign in (bad verification code?)
        // ...
      }); // ...
  };

  return (
    <div>
      <MuiTelInput
        onlyCountries={["VN"]}
        value={phone}
        onChange={(value) => {
          setPhone(value);
        }}
        defaultCountry="VN"
      />

      <Button
        id="sign-in-button"
        variant="contained"
        onClick={loginPhoneNumber}
      >
        Login Phone
      </Button>
      <TextField
        value={otpCode}
        onChange={(event) => setOtp(event.target.value)}
        placeholder="OTP"
      />
      <Button variant="contained" onClick={confirmOtp}>
        COnfirm OTP{" "}
      </Button>
      <div>
        <Button variant="contained" onClick={loginFacebook}>
          Login Fb
        </Button>
      </div>
      <div>
        <Button variant="contained" onClick={loginGoogle}>
          Login Google
        </Button>
      </div>
    </div>
  );
}
