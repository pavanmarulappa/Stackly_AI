//UserContext.jsx
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
  const [userInfo, setUserInfoState] = useState({
    userId: null,
    email: "",
    //userName: "",
    token: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      setUserInfoState(JSON.parse(savedUser));
      setLoading(false);
    } else {
      fetchCurrentUser();
    }
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/me", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const userData = {
          userId: data.id || null,
          email: data.email || "",
          //userName: "", // add if needed
          token: "",    // optional
        };
        setUserInfoState(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
        clearUserInfo();
      }
    } catch (err) {
      console.error("Fetch user error:", err);
      clearUserInfo();
    } finally {
      setLoading(false);
    }
  };

  const setUserInfo = (userData) => {
    setUserInfoState(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
  };


  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo,  loading }}
    >
      {children}
    </UserContext.Provider>
  );
}


