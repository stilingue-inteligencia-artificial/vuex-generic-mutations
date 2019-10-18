/**
 * Add or update a object in the store
 * @param state: current state of the store
 * @param payload: object with "Property", "Key" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
import { MutationObjectPayload, State } from '../../types';
import { hasPropertyAndKeyAndWith } from '../utils';
import set from 'lodash.set';

export const mutateObjectKey = (state: State<any>, payload: MutationObjectPayload) => {
  if (typeof state[payload.property] !== 'object') {
    throw new Error(`${state[payload.property]} Must be an object`);
  }

  if (!hasPropertyAndKeyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property, key and with`);
  }

  set(state, `${payload.property}.${payload.key}`, payload.with);
  return true;
};
