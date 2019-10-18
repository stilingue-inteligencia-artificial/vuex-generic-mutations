/**
 * Remove objects in array by a attribute
 * @param state: current state of the store
 * @param payload: object with "Property", "Key" and "With"
 * @returns {boolean|Error}:  true if removed the object, false otherwise
 */
import { MutationObjectPayload, State } from '../../types';
import { hasPropertyAndKeyAndWith, isNotObject } from '../utils';

export function mutateRemoveObjectsFromArrayByAttributeAndValue(
  state: State<any>,
  payload: MutationObjectPayload,
) {
  if (isNotObject(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an object`);
  }

  if (!hasPropertyAndKeyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property and key`);
  }

  if (!Array.isArray(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an array`);
  }

  const originalSizeOfProperty = state[payload.property].length;

  state[payload.property] = state[payload.property].filter(el => {
    const hasAttribute = payload.key in el;
    const isSameValue = el[payload.key] === payload.with;
    return !(hasAttribute && isSameValue);
  });

  const afterSizeOfProperty = state[payload.property].length;

  // If is different it means that removed the at least one object
  return originalSizeOfProperty !== afterSizeOfProperty;
}
