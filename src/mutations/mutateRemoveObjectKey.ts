/**
 * Remove a key in object
 * @param state: current state of the store
 * @param payload: object with "Property", "Key"
 * @returns {boolean|Error}:  true if removed the object, false otherwise
 */
import { MutationObjectPayload, State } from '../../types';
import { hasPropertyAndKey, isNotObject } from '../utils';
import has from 'lodash.has';
import omit from 'lodash.omit';

export function mutateRemoveObjectKey(state: State<any>, payload: MutationObjectPayload) {
  if (isNotObject(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an object`);
  }

  if (!hasPropertyAndKey(payload)) {
    throw new Error(`${payload} Must have attributes property and key`);
  }

  if (!has(state, `${payload.property}.${payload.key}`)) {
    return false;
  }

  state[payload.property] = omit(state[payload.property], `${payload.key}`);
  return true;
}
