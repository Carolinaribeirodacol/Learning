import { Link } from "react-router-dom";
import { Container, Content } from "./style";

export function Sidebar() {
  return (
    <Container>
      <Content>
        <main>
          <ul>
            <li>
              <Link to="/">Tarefas</Link>
            </li>
            <li>
              <Link to="/tarefas">Tarefas</Link>
            </li>
            <li>
              <Link to="/pets">Meus pets</Link>
            </li>
          </ul>
        </main>
      </Content>
    </Container>
  );
}