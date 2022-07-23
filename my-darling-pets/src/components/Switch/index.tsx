import { Container } from "./style";

export function Switch() {
  return (
    <Container>
      <input type="checkbox" />
      <span className="slider round"></span>
    </Container>
  );
}