import { Container } from "./style";

interface CheckBoxProps {
  value: boolean;
  handleChange: () => void;
}

export function CheckBox({ value, handleChange }: CheckBoxProps) {
  return (
    <>
      <Container>
        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">S</span>

        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">T</span>

        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">Q</span>

        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">Q</span>

        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">S</span>

        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">S</span>

        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <span className="checkmark">D</span>
      </Container>
    </>
  );
}