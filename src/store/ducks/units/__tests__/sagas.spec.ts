import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import apiCaller from '../../../utils/apiCaller';
import { fetchUnitsAction, fetchUnitsSuccess } from '../actions';
import unitSaga from '../sagas';
import * as unitsData from './__mockData__/unitsData.json';

describe('unit saga', () => {
  it('should handle successfully fetching units', () => {
    return (
      expectSaga(unitSaga)
        .provide([[matchers.call.fn(apiCaller), unitsData]])
        // Assert that the 'put' will eventually happen
        // @ts-ignore
        .put(fetchUnitsSuccess(unitsData))
        // Dispatch any actions that the saga will 'take'
        .dispatch(fetchUnitsAction())
        // Start the test, return a Promise
        .run()
    );
  });
});
