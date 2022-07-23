import { useState } from "react";
import { Header } from "../../components/Sidebar";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Container } from "./style";
import { Card } from "../../components/Card";
import CatShower from '../../assets/cat-shower.png';
import Medicine from '../../assets/medicine.png';
import Tooth from '../../assets/tooth.png';


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
        {/* Caso não existam tasks: */}
        {/* <h1>Você não possui nenhuma tarefa</h1>
        <button type="button" onClick={handleOpenNewTaskModal}>Adicionar nova</button> */}

        {/* Caso existam tasks: */}
        <div className="cards">
          <Card icon={CatShower} title="Banho e tosa" />
          <Card icon={Medicine} title="Vacinas" />
          <Card icon={CatShower} title="Cortar unhas" />
          <Card icon={Tooth} title="Limpeza dentária" />
          <Card icon={CatShower} title="Consulta" />
          <Card icon={CatShower} title="Cirurgia" />
        </div>
      </main>
    </Container>
  );
}