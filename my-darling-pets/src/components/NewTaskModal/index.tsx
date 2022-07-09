import { useState } from "react";
import Modal from "react-modal";
import { CheckBox } from "../CheckBox";
import { Container } from "./style";

interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
  const [isChecked, setIsCheked] = useState(false);

  function handleStatusChecked() {
    setIsCheked(!isChecked);
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
    >
      <h1 className="modal-title">Configurar tarefa <strong>Banho e tosa</strong></h1>
      <Container>
        <div>
          <span>Dias da semana</span>
          <CheckBox
            value={isChecked}
            handleChange={handleStatusChecked}
          />
        </div>
      </Container>
    </Modal>
  );
}