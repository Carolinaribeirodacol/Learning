import { Header } from "../../components/Header";
import { Container } from "./style";

export function Task() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Você não possui nenhuma tarefa</h1>
        <button>Adicionar nova</button>
      </main>
    </Container>
  );
}