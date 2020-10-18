/* eslint-disable radix */
import React from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../store/ducks/index';
import { IUnitsState } from '../store/ducks/units/types';

const UnitDetails: React.FC = () => {
  const stateToProps: IUnitsState = useSelector(
    ({ units }: IApplicationState) => ({
      loading: units.loading,
      errors: units.errors,
      data: units.data,
      filteredData: units.filteredData,
      selectedUnitID: units.selectedUnitID,
    }),
  );

  const { data, selectedUnitID } = stateToProps;
  if (data.length === 0) {
    return <Spinner animation="border" />;
  }
  const index = data.findIndex((unit) => unit.id === selectedUnitID);
  
  return (
    <Table striped hover size="sm">
      <tbody>
        <tr>
          <th>ID:</th>
          <td>{data[index].id}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{data[index].name}</td>
        </tr>
        <tr>
          <th>Description:</th>
          <td>{data[index].description}</td>
        </tr>
        <tr>
          <th>Min. Required Age:</th>
          <td>{data[index].age}</td>
        </tr>
        <tr>
          <th>Wood Cost:</th>
          <td>{data[index].cost.Wood}</td>
        </tr>
        <tr>
          <th>Food Cost:</th>
          <td>{data[index].cost.Food}</td>
        </tr>
        <tr>
          <th>Gold Cost:</th>
          <td>{data[index].cost.Gold}</td>
        </tr>
        <tr>
          <th>Build Time:</th>
          <td>{data[index].build_time}</td>
        </tr>
        <tr>
          <th>Reload Time:</th>
          <td>{data[index].reload_time}</td>
        </tr>
        <tr>
          <th>Hit Points:</th>
          <td>{data[index].hit_points}</td>
        </tr>
        <tr>
          <th>Attack:</th>
          <td>{data[index].attack}</td>
        </tr>
        <tr>
          <th>Accuracy:</th>
          <td>{data[index].accuracy}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UnitDetails;
