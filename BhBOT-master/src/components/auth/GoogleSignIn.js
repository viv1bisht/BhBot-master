import React, { useState } from "react";
import {
  handleSigningIn,
  handleSigningOut,
} from "../../services/firebase/auth";
import useUserContext from "../../state_management/ContextAPI/UserContext";
import Popup from "reactjs-popup";

const GoogleSignIn = () => {
  const { setIsLoggedIn } = useUserContext();
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({
    uId: null,
    dispalyName: null,
    photo: null,
    email: null,
    emailVerified: null,
    isAnonymous: null,
    isLoggedIn: false,
  });

  const handleGoogleSignIn = async () => {
    if (!userInfo.isLoggedIn) {
      const user = await handleSigningIn();
      user?.isLoggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setUserInfo(user);
    } else {
      setShowUserInfo(true);
    }
  };

  const handleSignOut = async () => {
    await handleSigningOut();
    setUserInfo({
      uId: null,
      dispalyName: null,
      photo: null,
      email: null,
      emailVerified: null,
      isAnonymous: null,
      isLoggedIn: false,
    });
    setIsLoggedIn(false);
    setShowUserInfo(false);
  };

  const handlePopupClose = () => {
    setShowUserInfo(false);
  };

  return (
    <div className="auth-buttons">
      <button onClick={handleGoogleSignIn}>
        {
          <div>
            {userInfo.isLoggedIn ? (
              <img
                width={"60px"}
                src={userInfo.photo}
                alt={userInfo.dispalyName}
                title={userInfo.dispalyName}
              />
            ) : (
              "Sign Up/In with Google"
            )}
          </div>
        }
      </button>
      <div>
        <Popup
          open={showUserInfo}
          onClose={handlePopupClose}
          closeOnDocumentClick
        >
          {showUserInfo ? (
            <div>
              <p>Welcome, {userInfo.dispalyName}!</p>
              <p>Email: {userInfo.email}</p>
              <p>Email Verified: {userInfo.emailVerified ? "Yes" : "No"}</p>
              <p>Anonymous: {userInfo.isAnonymous ? "Yes" : "No"}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : null}
        </Popup>
      </div>
    </div>
  );
};

export default GoogleSignIn;
