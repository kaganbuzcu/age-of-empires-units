import React, { useCallback } from 'react';
import { ButtonGroup as BootstrapButtonGroup, Button } from 'react-bootstrap';
import { IAgeFiltersRaw } from '../../store/ducks/filters/types';
import './buttonGroup.scss';

const buttons: string[] = ['All', 'Dark', 'Feudal', 'Castle', 'Imperial'];

interface IButtonGroupItems {
  ageFilters: IAgeFiltersRaw;
  changeAgeFiltersAction: Function;
}

const ButtonGroup: React.FC<IButtonGroupItems> = ({
  ageFilters,
  changeAgeFiltersAction,
}: IButtonGroupItems) => {
  const handleOnChangeActive = useCallback(
    (active) => changeAgeFiltersAction(active),
    [changeAgeFiltersAction],
  );

  return (
    <BootstrapButtonGroup aria-label="Button Group">
      {buttons.map((button: string) => (
        <Button
          key={button}
          onClick={() => {
            handleOnChangeActive(button);
          }}
          active={ageFilters.active === button}
          variant="secondary"
        >
          {button}
        </Button>
      ))}
    </BootstrapButtonGroup>
  );
};

export default ButtonGroup;
