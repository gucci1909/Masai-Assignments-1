import React,{useState} from 'react';

export const AppContext=React.createContext()

function AppContextProvider({children}) {

   const [authState,setAuthState] = useState({isAuth:false,token:null})

   function loginUser(token){
    setAuthState({
        ...authState,
        isAuth: true,
        token: token
      });
   }

   function logoutUser(){
    setAuthState({
        ...authState,
        isAuth: false,
        token: null
      });
   }

   return (
    <AppContext.Provider value={{authState,loginUser,logoutUser}} >{children}</AppContext.Provider>
   )

}
export default AppContextProvider;