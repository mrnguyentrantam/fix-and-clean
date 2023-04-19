import React from "react";
import {
  withAuthUser,
  AuthAction,
  withAuthUserSSR,
  useAuthUser,
} from "next-firebase-auth";
import {
  getAuth,
  linkWithPhoneNumber,
  RecaptchaVerifier,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import { getApp } from "firebase/app";

const styles = {
  content: {
    padding: `8px 32px`,
  },
  textContainer: {
    margin: 16,
  },
};

const UpdateInfoProfile = () => {
  const user = useAuthUser();
  const submitData = async () => {
    const currentUser = getAuth(getApp()).currentUser;
    if (!currentUser) return;
    await updateProfile(currentUser, { displayName: currentUser.displayName });
    // const appVerifier = new RecaptchaVerifier(
    //   "hidden-captcha",
    //   {
    //     size: "invisible",
    //     callback: (response: any) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //       // onSignInSubmit();
    //     },
    //   },
    //   getAuth(getApp())
    // );
    // linkWithPhoneNumber(currentUser, "+84395705795", appVerifier);

    try {
      await fetch(`/api/user/${user.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={styles.content}>
      <div id="hidden-captcha"></div>
      <h3>Sign in</h3>
      <div style={styles.textContainer}>
        <p>Trang này để cập nhật thông tin cá nhân sau khi đăng nhập</p>
        <p>Tên:{user.displayName}</p>
        <p>Sđt{user.phoneNumber}</p>
        <p> Email{user.email}</p>
        <button
          onClick={() => {
            submitData();
          }}
        >
          Cập nhật
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = withAuthUserSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  return {
    props: {},
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(UpdateInfoProfile);
