/**
 * Testing mutate remove a key inside a object
 */
import { mutateRemoveObjectKey } from '../../src/mutations/mutateRemoveObjectKey';

describe('mutateRemoveObjectKey', () => {
  it('should remove the key if has only one', () => {
    const state = {
      key: {
        keyOfKey: 'value',
      },
    };
    mutateRemoveObjectKey(state, {
      property: 'key',
      key: 'keyOfKey',
    });
    expect(state).toEqual({ key: {} });
  });

  it('should remove the key if has multiple keys', () => {
    const state = {
      key: {
        keyOfKey: 'value',
        keyOfKey2: 'value2',
      },
    };
    mutateRemoveObjectKey(state, {
      property: 'key',
      key: 'keyOfKey',
    });
    expect(state).toEqual({ key: { keyOfKey2: 'value2' } });
  });
});

describe('mutateRemoveObjectKey Failed mutations', () => {
  let state;

  beforeEach(() => {
    state = {
      key: {
        keyOfKey: 'value',
      },
    };
  });

  it('should not accept if property do not exist', () => {
    expect(() => {
      mutateRemoveObjectKey(state, {
        property: 'key2',
        key: 'keyOfKey',
      });
    }).toThrow();
  });

  it('should not accept if key do not exist', () => {
    expect(
      mutateRemoveObjectKey(state, {
        property: 'key',
        key: 'keyOfKey2',
      }),
    ).toBeFalsy();
  });

  it('should not accept array as param', () => {
    expect(() => {
      mutateRemoveObjectKey(state, [
        {
          property: 'key',
          key: 'keyOfKey',
        },
      ]);
    }).toThrow();
  });

  it('should not accept when missing property', () => {
    expect(() => {
      mutateRemoveObjectKey(state, [
        {
          key: 'keyOfKey',
        },
      ]);
    }).toThrow();
    expect(state.key.keyOfKey).toBe('value');
  });

  it('should not accept when missing key', () => {
    expect(() => {
      mutateRemoveObjectKey(state, [
        {
          property: 'key',
        },
      ]);
    }).toThrow();
    expect(state.key.keyOfKey).toBe('value');
  });
});
