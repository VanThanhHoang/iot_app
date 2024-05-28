import React, { useEffect, useState } from "react";
const AppContext = React.createContext();

import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
const AppProvier = ({ children }) => {
  const [data, setData] = useState(null);
  const db = getDatabase();
  useEffect(() => {
    const dataRef = ref(db, "/"); // Update the path to your data
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState({});
  const auth = getAuth();
  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, user, setUser, data }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvier;
export { AppContext };