import { auth, googleProvider } from "../../config/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

export const handleSigningIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const userInfo = {
      uId: result.user.uid,
      dispalyName: result.user.displayName,
      photo: result.user.photoURL,
      email: result.user.email,
      emailVerified: result.user.emailVerified,
      isAnonymous: result.user.isAnonymous,
      isLoggedIn: true,
    };
    return userInfo;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return false;
  }
};

export const handleSigningOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out with Google:", error);
  }
};
