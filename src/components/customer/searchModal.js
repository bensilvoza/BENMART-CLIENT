import * as React from "react";

// Base Web
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "baseui/modal";

function SearchModal(props) {
  return (
    <React.Fragment>
      <Modal
        onClose={props.close}
        isOpen={props.isOpen}
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
        <ModalFooter>
          <ModalButton onClick={props.close}>Close</ModalButton>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default SearchModal;
