import { useState } from "react";
import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox";
import { Modal } from "../Modal";
import { Footer } from "../Modal/style";
import { Switch } from "../Switch";
import { TextField } from "../TextField/TextField";
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
    <Modal isOpen={isOpen} title="Banho e tosa" onRequestClose={onRequestClose}>
      <Container>
        <span>Dias da semana</span>
        <CheckBox
          value={isChecked}
          handleChange={handleStatusChecked}
        />

        <span>Repetir</span>
        <Switch />

        <span>Horário da notificação</span>
        <TextField />
      </Container>
    </Modal>
  );
}