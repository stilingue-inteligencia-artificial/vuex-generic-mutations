import set from 'lodash.set';

import { State, MutationPayload, MutationObjectPayload } from '../types';

function hasOwnProperty(object: MutationPayload, property: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function hasPropertyAndWith(payload: MutationPayload): boolean {
  return hasOwnProperty(payload, 'property') && hasOwnProperty(payload, 'with');
}

function hasPropertyAndKeyAndWith(payload: MutationObjectPayload): boolean {
  return (
    hasOwnProperty(payload, 'property') &&
    hasOwnProperty(payload, 'key') &&
    hasOwnProperty(payload, 'with')
  );
}

/**
 * Override the property passed in the object
 * @param state: current state of the store
 * @param payload: array of object with "Property" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
export const mutate = (state: State<any>, payload: MutationPayload): boolean => {
  if (!hasPropertyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property and with`);
  }

  set(state, payload.property, payload.with);
  return true;
};

/**
 * Override all the properties passed in the array of objects
 * @param state: current state of the store
 * @param payloads: array of object with "Property" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
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

/**
 * Add or update a object in the store
 * @param state: current state of the store
 * @param payload: object with "Property", "Key" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
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
