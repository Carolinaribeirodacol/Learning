import { useState } from "react";
import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox";
import { Modal } from "../Modal";
import { Switch } from "../Switch";
import { TextArea } from "../TextArea";
import { TextField } from "../TextField/TextField";
import { Container } from "./style";
import Icon from "@mdi/react";
import { mdiPlus } from '@mdi/js';

interface TaskModalProps {
  title: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose, title }: TaskModalProps) {
  const [isChecked, setIsCheked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleStatusChecked() {
    setIsCheked(!isChecked);
  }

  function handleIsVisible() {
    setIsVisible(true);
  }

  function handleUndoButtonFooter() {
    setIsVisible(false);
  }

  function handleSaveButtonFooter() {
    setIsVisible(false);
  }

  return (
    <Modal 
      isOpen={isOpen} 
      title={title}
      onRequestClose={onRequestClose} 
      undoButtonFooter={handleUndoButtonFooter} 
      saveButtonFooter={handleSaveButtonFooter}
    >
      <Container>
        {isVisible === true ? (
          <>
            <span>Dias da semana</span>
            <CheckBox
              value={isChecked}
              handleChange={handleStatusChecked}
            />

            <span>Repetir</span>
            <Switch />

            <span>Horário da notificação</span>
            <TextField placeholder="18:00" />

            <span>Observação</span>
            <TextArea text="Levar escova" />
          </>
        ) : (
          <>
            <Button color="darkGreen" onClick={handleIsVisible} >
              <Icon
                path={mdiPlus}
                size={2}
              />
              Novo lembrete
            </Button>

            <h1>Lembretes</h1>
            <div className="saved-tasks">
              <span>13:10</span><br></br>
              <span className="text-repeat">Uma vez | <strong>30/07</strong></span>
            </div>

            <div className="saved-tasks">
              <span>10:00</span><br></br>
              <span className="text-repeat">
                S | T | Q | <br></br>
                Comentar do shampoo especial da Belinha
              </span>
            </div>
          </>
        )}
      </Container>
    </Modal>
  );
}