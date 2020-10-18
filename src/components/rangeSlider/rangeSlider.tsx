import React from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './rangeSlider.scss';

interface IRangeItems {
  value: string;
  disabled: boolean;
  index: number;
  onChangeValue: Function;
}

const RangeSlider: React.FC<IRangeItems> = ({
  value,
  disabled,
  index,
  onChangeValue,
}: IRangeItems) => {
  return (
    <div className="d-flex">
      <OverlayTrigger
        key={index}
        overlay={<Tooltip id={`tooltip-${index}`}>Min: 0, Max: 200</Tooltip>}
      >
        <Form.Control
          key={index}
          className="input-range"
          type="range"
          min="0"
          max="200"
          disabled={disabled}
          value={value}
          onChange={(e) => {
            onChangeValue(index, e.target.value);
          }}
        />
      </OverlayTrigger>
      <Form.Label className="label-range">{value}</Form.Label>
    </div>
  );
};

export default RangeSlider;
