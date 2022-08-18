import Icon from "@mdi/react";
import { mdiPencil } from '@mdi/js';
import { Container } from "./style";
import { useState } from "react";
import { NewTaskModal } from "../TaskModal";

interface CardProps {
  img: string | undefined;
  title: string;
}

export function Card({ img, title }: CardProps) {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <Container className="card">
      <NewTaskModal isOpen={isNewTaskModalOpen} onRequestClose={handleCloseTaskModal} title={title} />
      <span className="edit" onClick={handleOpenTaskModal}>
        <Icon
          path={mdiPencil}
          size={1}
        />
      </span>
      <img src={img} alt="img" />
      <h1>{title}</h1>
    </Container>
  );
}