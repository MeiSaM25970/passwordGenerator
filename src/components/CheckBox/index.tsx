import { FC } from "react";
import { CheckboxWrapper } from "./style";
import { IPasswordFields } from "../PasswordGenerator/models";

interface IProps {
  id: string;
  label: string;
  checked: boolean;
  name: keyof IPasswordFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<IProps> = ({ id, label, checked, name, onChange }) => {
  return (
    <CheckboxWrapper>
      <input
        className="check"
        type="checkbox"
        id={id}
        checked={checked}
        name={name as string}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxWrapper>
  );
};
export default Checkbox;
