import Modal from "react-modal";
import { useState } from "react";
import { Header } from "../../components/Header";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Container } from "./style";

Modal.setAppElement('#root');

export function Task() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <Container>
      <NewTaskModal isOpen={isNewTaskModalOpen} onRequestClose={handleCloseNewTaskModal} />
      <Header />
      <main>
        <h1>Você não possui nenhuma tarefa</h1>
        <button type="button" onClick={handleOpenNewTaskModal}>Adicionar nova</button>
        <h1>{String(isNewTaskModalOpen)}</h1>
      </main>
    </Container>
  );
}