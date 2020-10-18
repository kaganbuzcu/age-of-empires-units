import React, { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { ICostFiltersRaw } from '../../store/ducks/filters/types';
import { RangeSlider } from '../rangeSlider';
import { CheckBox } from '../checkBox';
import './unitsForm.scss';

interface ICostFilters {
  costFilters: ICostFiltersRaw[];
  changeCostFiltersAction: Function;
}

const UnitsForm: React.FC<ICostFilters> = ({
  costFilters,
  changeCostFiltersAction,
}: ICostFilters) => {
  const handleOnChangeChecked = useCallback(
    (index, checked = costFilters[index].checked) =>
      changeCostFiltersAction(
        costFilters[index].key,
        checked,
        costFilters[index].rangeValue,
      ),
    [changeCostFiltersAction, costFilters],
  );

  const handleOnChangeRangeValue = useCallback(
    (index, value = costFilters[index].rangeValue) =>
      changeCostFiltersAction(
        costFilters[index].key,
        costFilters[index].checked,
        value,
      ),
    [changeCostFiltersAction, costFilters],
  );

  return (
    <>
      <Form>
        {costFilters.map((costFilter: ICostFiltersRaw, index: number) => (
          <div
            key={costFilter.key}
            className="d-flex justify-content-lg-between align-items-center"
          >
            <div className="input-check">
              <CheckBox
                onChangeChecked={handleOnChangeChecked}
                label={costFilter.key}
                checked={costFilter.checked}
                index={index}
              />
            </div>
            <div className="flex-fill pl-2">
              <RangeSlider
                onChangeValue={handleOnChangeRangeValue}
                index={index}
                value={costFilter.rangeValue}
                disabled={!costFilter.checked}
              />
            </div>
          </div>
        ))}
      </Form>
    </>
  );
};

export default UnitsForm;
