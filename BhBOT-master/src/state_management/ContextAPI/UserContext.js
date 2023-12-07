import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUserDetails = () => {
    return (
      <div>
        {userFirstName} {userLastName} User Details.
      </div>
    );
  };
  return (
    <UserContext.Provider
      value={{
        userFirstName,
        setUserFirstName,
        userLastName,
        setUserLastName,
        isLoggedIn,
        setIsLoggedIn,
        getUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};
export default useUserContext;
