import { ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps {
  children: ReactNode;
  color: 'red' | 'darkGreen' | 'transparent';
  // onClick: () => void;
}

export function Button ({ color, children }: ButtonProps) {
  return (
    <Container color={color} >
      {children}
    </Container>
  );
}