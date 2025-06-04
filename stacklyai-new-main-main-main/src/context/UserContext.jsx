// //UserContext.jsx
// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// export default function UserContextProvider(props) {
//   const [userInfo, setUserInfo] = useState({
//     userId: "",
//     email: "",
//     userName: "", // This can remain empty initially
//   });

//   return (
//     <UserContext.Provider value={{ userInfo, setUserInfo }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }

import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('userInfo');
    return saved ? JSON.parse(saved) : {
      userId: "",
      email: "",
      userName: "",
      token: "",
      isAuthenticated: false
    };
  });

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const login = (userData) => {
    setUserInfo({
      userId: userData.userId,
      email: userData.email,
      userName: userData.userName || "",
      token: userData.token,
      isAuthenticated: true
    });
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo({
      userId: "",
      email: "",
      userName: "",
      token: "",
      isAuthenticated: false
    });
  };

  const checkAuth = async () => {
    try {
      if (userInfo.token && userInfo.isAuthenticated) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  return (
    <UserContext.Provider 
      value={{ 
        userInfo, 
        setUserInfo,
        login,
        logout,
        checkAuth
      }}
    >
      {children}
    </UserContext.Provider>
  );
}