/**
 * Testing mutate remove objects from inside a array by Attribute and Value
 */
import { mutateRemoveObjectsFromArrayByAttributeAndValue } from '../../src/mutations/mutateRemoveObjectsFromArrayByAttributeAndValue';

describe('mutateRemoveObjectsFromArrayByAttributeAndValue', () => {
  it('should remove the key if has only one', () => {
    const state = {
      key: [
        {
          keyOfKey: 'value',
        },
      ],
    };
    mutateRemoveObjectsFromArrayByAttributeAndValue(state, {
      property: 'key',
      key: 'keyOfKey',
      with: 'value',
    });
    expect(state).toEqual({ key: [] });
  });

  it('should remove the key if has multiple objects', () => {
    const state = {
      key: [
        {
          keyOfKey: 'value',
        },
        {
          keyOfKey2: 'value2',
        },
      ],
    };
    mutateRemoveObjectsFromArrayByAttributeAndValue(state, {
      property: 'key',
      key: 'keyOfKey',
      with: 'value',
    });
    expect(state).toEqual({ key: [{ keyOfKey2: 'value2' }] });
  });

  it('should remove the multiple keys if has same key and value', () => {
    const state = {
      key: [
        {
          keyOfKey: 'value',
        },
        {
          keyOfKey2: 'value2',
        },
        {
          keyOfKey: 'value',
        },
      ],
    };
    mutateRemoveObjectsFromArrayByAttributeAndValue(state, {
      property: 'key',
      key: 'keyOfKey',
      with: 'value',
    });
    expect(state).toEqual({ key: [{ keyOfKey2: 'value2' }] });
  });
});

describe('mutateRemoveObjectsFromArrayByAttributeAndValue Failed mutations', () => {
  let state;

  beforeEach(() => {
    state = {
      key: [{ keyOfKey: 'value' }],
    };
  });

  it('should not remove if key doesnt match', () => {
    expect(
      mutateRemoveObjectsFromArrayByAttributeAndValue(state, {
        property: 'key',
        key: 'keyOfKey2',
        with: 'value',
      }),
    ).toBeFalsy();
  });

  it('should not remove if with doesnt match', () => {
    expect(
      mutateRemoveObjectsFromArrayByAttributeAndValue(state, {
        property: 'key',
        key: 'keyOfKey',
        with: 'value2',
      }),
    ).toBeFalsy();
  });

  it('should not accept if property do not exist', () => {
    expect(() => {
      mutateRemoveObjectsFromArrayByAttributeAndValue(state, {
        property: 'key2',
        key: 'keyOfKey',
        with: 'value',
      });
    }).toThrow();
  });

  it('should not accept array as param', () => {
    expect(() => {
      mutateRemoveObjectsFromArrayByAttributeAndValue(state, [
        {
          property: 'key',
          key: 'keyOfKey',
        },
      ]);
    }).toThrow();
  });

  it('should not accept when missing property', () => {
    expect(() => {
      mutateRemoveObjectsFromArrayByAttributeAndValue(state, [
        {
          key: 'keyOfKey',
        },
      ]);
    }).toThrow();
    expect(state.key[0].keyOfKey).toBe('value');
  });

  it('should not accept when missing key', () => {
    expect(() => {
      mutateRemoveObjectsFromArrayByAttributeAndValue(state, [
        {
          property: 'key',
        },
      ]);
    }).toThrow();
    expect(state.key[0].keyOfKey).toBe('value');
  });
});
