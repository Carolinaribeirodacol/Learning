import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps {
  children: ReactNode;
  color: 'red' | 'darkGreen' | 'transparent';
  onClick?: () => void;
}

export function Button ({ color, children, onClick }: ButtonProps) {
  return (
    <Container color={color} onClick={onClick} >
      {children}
    </Container>
  );
}