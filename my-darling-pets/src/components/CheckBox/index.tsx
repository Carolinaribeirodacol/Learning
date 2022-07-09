interface CheckBoxProps {
  value: boolean;
  handleChange: () => void;
}

export function CheckBox({ value, handleChange }: CheckBoxProps) {
  return (
    <>
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />

      <h1>{String(value)}</h1>
    </>
  );
}