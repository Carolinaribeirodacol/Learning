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
  onRequestClose: () => void;
}

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    borderRadius: '1rem'
  }
}

export function Modal({ isOpen, title, children, onRequestClose }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
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
        <Button color="transparent">
          Deletar
        </Button>
        <Button color="darkGreen">
          Salvar
        </Button>
      </Footer>
    </ReactModal>
  );
}