/**
 * Override all the properties passed in the array of objects
 * @param state: current state of the store
 * @param payloads: array of object with "Property" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
import { MutationPayload, State } from '../../types';
import { hasPropertyAndWith } from '../utils';
import set from 'lodash.set';

export const mutateMultiple = (state: State<any>, payloads: MutationPayload[]): boolean => {
  if (!Array.isArray(payloads)) {
    throw new Error(`${payloads} Must be an array`);
  }

  payloads.forEach(payload => {
    if (!hasPropertyAndWith(payload)) {
      throw new Error(`${payload} Must have attributes property and with`);
    }
  });

  payloads.forEach(payload => {
    set(state, payload.property, payload.with);
  });

  return true;
};
