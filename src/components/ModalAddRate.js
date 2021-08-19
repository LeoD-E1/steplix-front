import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import FormRates from "./FormRates";
import "./styles/styles.css";

const ModalAddRate = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle} className="addRate">
        New Quotation
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <FormRates />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalAddRate;
