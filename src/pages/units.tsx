import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../store/ducks/index';
import { fetchUnitsAction } from '../store/ducks/units/actions';
import { IUnitsState, UnitsActionTypes } from '../store/ducks/units/types';
import {
  changeCostFiltersAction,
  changeAgeFiltersAction,
} from '../store/ducks/filters/actions';
import { IFiltersState } from '../store/ducks/filters/types';
import { DataTable } from '../components/dataTable';
import { UnitsForm } from '../components/unitsForm';
import { ButtonGroup } from '../components/buttonGroup';

const Units: React.FC = () => {
  const dispatch = useDispatch();

  const stateToProps: IUnitsState & IFiltersState = useSelector(
    ({ units, filters }: IApplicationState) => ({
      selectedUnitID: units.selectedUnitID,
      loading: units.loading,
      errors: units.errors,
      data: units.data,
      filteredData: units.filteredData,
      costFilters: filters.costFilters,
      ageFilters: filters.ageFilters,
    }),
  );

  const dispatchToProps = {
    units: {
      fetchUnitsAction: useCallback(() => dispatch(fetchUnitsAction()), [
        dispatch,
      ]),
      changeSelectedUnitID: useCallback(
        (id: number) =>
          dispatch({
            type: UnitsActionTypes.CHANGE_SELECTED_UNIT_ID,
            payload: id,
          }),
        [dispatch],
      ),
    },
    costs: {
      changeCostFiltersAction: useCallback(
        (key: string, checked: boolean, rangeValue: string) =>
          dispatch(changeCostFiltersAction({ key, checked, rangeValue })),
        [dispatch],
      ),
    },
    age: {
      changeAgeFiltersAction: useCallback(
        (active: string) => dispatch(changeAgeFiltersAction({ active })),
        [dispatch],
      ),
    },
  };

  return (
    <>
      <div className="mt-2">
        <ButtonGroup
          ageFilters={stateToProps.ageFilters}
          changeAgeFiltersAction={dispatchToProps.age.changeAgeFiltersAction}
        />
      </div>
      <div className="mt-4">
        <UnitsForm
          costFilters={stateToProps.costFilters}
          changeCostFiltersAction={
            dispatchToProps.costs.changeCostFiltersAction
          }
        />
      </div>
      <div className="mt-4">
        <DataTable
          {...stateToProps}
          {...dispatchToProps.units}
          changeSelectedUnitID={dispatchToProps.units.changeSelectedUnitID}
        />
      </div>
    </>
  );
};

export default React.memo(Units);
