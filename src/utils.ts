import { MutationObjectPayload, MutationPayload } from '../types';

export function hasOwnProperty(object: MutationPayload, property: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, property);
}

export function hasPropertyAndKey(payload) {
  return payload.hasOwnProperty('property') && payload.hasOwnProperty('key');
}

export function hasPropertyAndWith(payload: MutationPayload): boolean {
  return hasOwnProperty(payload, 'property') && hasOwnProperty(payload, 'with');
}

export function hasPropertyAndKeyAndWith(payload: MutationObjectPayload): boolean {
  return (
    hasOwnProperty(payload, 'property') &&
    hasOwnProperty(payload, 'key') &&
    hasOwnProperty(payload, 'with')
  );
}

export function isNotObject(objectTarget) {
  return typeof objectTarget !== 'object';
}
