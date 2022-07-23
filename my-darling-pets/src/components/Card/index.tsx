import Icon from "@mdi/react";
import { mdiPencil } from '@mdi/js';
import { Container } from "./style";

interface CardProps {
  icon: string;
  title: string;
}

export function Card({ icon, title }: CardProps) {
  return (
    <Container className="card">
      <span className="edit">
        <Icon
          path={mdiPencil}
          size={1.25}
        />
      </span>
      <img src={icon} alt="cat-shower" />
      <h1>{title}</h1>
    </Container>
  );
}