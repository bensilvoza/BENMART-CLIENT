import * as React from "react";

// Base Web
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "baseui/modal";
import { Input, SIZE } from "baseui/input";

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
        <ModalHeader>Shop now at BENMART!</ModalHeader>
        <ModalBody style={{ flex: "1 1 0" }}>
          <Input
            value={props.query}
            onChange={props.onChangeQuery}
            size={SIZE.large}
            placeholder="search our store..."
          />
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={props.close}>Close</ModalButton>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default SearchModal;
