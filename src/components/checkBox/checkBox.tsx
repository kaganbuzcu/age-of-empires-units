import React from 'react';
import { Form } from 'react-bootstrap';
import './checkBox.scss';

interface ICheckBoxItems {
  label: string;
  checked: boolean;
  index: number;
  onChangeChecked: Function;
}

const CheckBox: React.FC<ICheckBoxItems> = ({
  label,
  checked,
  index,
  onChangeChecked,
}: ICheckBoxItems) => {
  return (
    <>
      <Form.Check
        className="input-check"
        type="checkbox"
        label={label}
        checked={checked}
        onChange={() => onChangeChecked(index, !checked)}
      />
    </>
  );
};

export default CheckBox;
