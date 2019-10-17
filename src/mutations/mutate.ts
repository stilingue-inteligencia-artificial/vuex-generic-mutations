/**
 * Override the property passed in the object
 * @param state: current state of the store
 * @param payload: array of object with "Property" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
import { MutationPayload, State } from '../../types';
import { hasPropertyAndWith } from '../utils';
import set from 'lodash.set';

export const mutate = (state: State<any>, payload: MutationPayload): boolean => {
  if (!hasPropertyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property and with`);
  }

  set(state, payload.property, payload.with);
  return true;
};
