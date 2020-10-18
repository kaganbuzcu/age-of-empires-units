/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import { Table, Spinner } from 'react-bootstrap';
import {
  IDispatchToProps,
  IUnitsRaw,
  IUnitsState,
} from '../../store/ducks/units/types';
import { IFiltersState } from '../../store/ducks/filters/types';
import './dataTable.scss';

interface IDataTableItems {
  changeSelectedUnitID: Function;
}

type AllProps = IUnitsState &
IFiltersState &
IDispatchToProps &
IDataTableItems;

const DataTable: React.FC<AllProps> = ({
  data,
  filteredData,
  loading,
  errors,
  fetchUnitsAction,
  changeSelectedUnitID,
  ageFilters,
}: AllProps) => {
  useEffect(() => {
    if (data.length === 0) {
      fetchUnitsAction();
    }
  }, [fetchUnitsAction]);

  const objectToArray = useCallback((object: object) => {
    if (object && typeof object === 'object') {
      return Object.entries(object).map((cost, index) => [
        `${cost[0]}: ${cost[1]}${
          // eslint-disable-next-line no-nested-ternary
          Object.keys(object).length < 2 ? '' : index !== 0 ? '' : ', '
        }`,
      ]);
    }
    return [];
  }, []);

  const onChangeSelectedUnitID = useCallback((id: number) => {
    changeSelectedUnitID(id);
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (errors.length !== 0) {
    console.log(errors);
    return <span>Something went wrong!</span>;
  }

  return (
    <div className="table-wrapper">
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {_.filter(filteredData, (unitWithAgeFilter: IUnitsRaw) => {
            return (
              ageFilters.active === 'All' ||
              ageFilters.active === unitWithAgeFilter.age
            );
          }).map((unit: IUnitsRaw, index: number) => (
            <tr key={unit.id}>
              <td>{unit.id}</td>
              <td>
                <Link
                  to="/unit-details"
                  onClick={() => {
                    onChangeSelectedUnitID(unit.id);
                  }}
                >
                  {unit.name}
                </Link>
              </td>
              <td>{unit.age}</td>
              <td>{objectToArray(unit.cost)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
