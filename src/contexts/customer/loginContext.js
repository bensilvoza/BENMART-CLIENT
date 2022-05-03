import * as React from "react";

export const LoginContext = React.createContext();

function LoginContextProvider(props) {
  var [customer, setCustomer] = React.useState(undefined);
  var [isAuthenticated, setIsAuthenticated] = React.useState(false);

  function handleCustomer(details) {
    setCustomer(details);
  }
  // handle user mate
  var handleCustomerMate = handleCustomer;

  function handleAuthenticated() {
    if (isAuthenticated === false) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  return (
    <LoginContext.Provider
      value={{
        customer: customer,
        isAuthenticated: isAuthenticated,
        handleCustomerMate: handleCustomerMate,
        handleAuthenticated: handleAuthenticated,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
