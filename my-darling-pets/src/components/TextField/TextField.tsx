import { Container } from "./style";

interface TextFieldProps {
  placeholder: string;
  type?: string;
}

export function TextField({ placeholder }: TextFieldProps) {
  return (
    <Container>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}