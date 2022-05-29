import * as React from "react";

export const IsOpenSearchModalContext = React.createContext();

function IsOpenSearchModalContextProvider(props) {
  var [isOpen, setIsOpen] = React.useState(false);

  function handleIsOpen() {
    setIsOpen(true);
  }

  function handleOnClose() {
    setIsOpen(false);
  }

  return (
    <IsOpenSearchModalContext.Provider
      value={{
        isOpen: isOpen,
        handleIsOpen: handleIsOpen,
        handleOnClose: handleOnClose,
      }}
    >
      {props.children}
    </IsOpenSearchModalContext.Provider>
  );
}

export default IsOpenSearchModalContextProvider;
