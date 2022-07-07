import { Link } from "react-router-dom";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <ul>
          <li>Carolina</li>
          <li>
            <Link to="/tarefas">Tarefas</Link>
          </li>
          <li>Dicas</li>
        </ul>
      </Content>
    </Container>
  );
}