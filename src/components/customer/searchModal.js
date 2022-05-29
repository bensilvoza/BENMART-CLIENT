import * as React from "react";

// Base Web
import { Modal, ModalHeader, ModalBody } from "baseui/modal";

// context
import { IsOpenSearchModalContext } from "../../contexts/customer/isOpenSearchModalContext";

function SearchModal(props) {
  // context
  var { isOpen, handleOnClose } = React.useContext(IsOpenSearchModalContext);

  var [isOpenMate, setIsOpenMate] = React.useState(true);

  function close() {
    setIsOpenMate(false);
  }

  // Note: continue the bug fixing here

  return (
    <React.Fragment>
      <Modal
        onClose={close}
        isOpen={isOpenMate ? isOpen : isOpenMate}
        overrides={{
          Dialog: {
            style: {
              width: "80vw",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
            },
          },
        }}
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody style={{ flex: "1 1 0" }}>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default SearchModal;
