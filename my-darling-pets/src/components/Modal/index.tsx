import { ReactNode } from "react";
import { Button } from "../Button/Button";
import { Content, Footer } from "./style";
import ReactModal from "react-modal";
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

ReactModal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  undoButtonFooter?: () => void;
  saveButtonFooter?: () => void;
  onRequestClose: () => void;
}

const customStyle = {
  content: {
    margin: 'auto',
    verticalAlign: 'middle',
    padding: '2rem',
    borderRadius: '1rem',
    webkitOverflowScrolling: 'touch',
  },
}

export function Modal({ isOpen, title, children, onRequestClose, undoButtonFooter, saveButtonFooter }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyle}
    >
      <Content className="react-modal-content">
        <span className="close-modal" onClick={onRequestClose}>
          <Icon path={mdiClose}
            size={1.25}
            color="red"
          />
        </span>

        <h1 className="modal-title">{title}</h1>
        
        {children}
      </Content>

      <Footer>
        <Button color="transparent" onClick={undoButtonFooter} >
          Voltar
        </Button>
        <Button color="darkGreen" onClick={saveButtonFooter} >
          Salvar
        </Button>
      </Footer>
    </ReactModal>
  );
}