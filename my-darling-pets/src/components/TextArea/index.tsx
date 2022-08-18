import { Form } from "./style";

interface TextAreaProps {
  text: String;
}

export function TextArea({ text }: TextAreaProps) {
  return (
    <Form>
      <textarea placeholder="Digite aqui...">{text}</textarea>
    </Form>
  );
}