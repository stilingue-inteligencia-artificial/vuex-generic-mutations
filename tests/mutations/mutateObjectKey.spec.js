/**
 * Testing mutate a key inside a object
 */
import { mutateObjectKey } from '../../src/mutations/mutateObjectKey';

describe('mutateObjectKey', () => {
  let state;

  beforeEach(() => {
    state = {
      key: {
        keyOfKey: 'value',
      },
    };
  });

  it('should update a existing key in state if exists', () => {
    mutateObjectKey(state, {
      property: 'key',
      key: 'keyOfKey',
      with: 'newValue',
    });
    expect(state.key.keyOfKey).toBe('newValue');
  });

  it('should create key in attribute', () => {
    mutateObjectKey(state, {
      property: 'key',
      key: 'keyOfKey2',
      with: 'newValue2',
    });
    expect('keyOfKey2' in state.key).toBeTruthy();
    expect(state.key.keyOfKey2).toBe('newValue2');
  });
});

describe('mutateObjectKey Failed mutations', () => {
  let state;

  beforeEach(() => {
    state = {
      key: {
        keyOfKey: 'value',
      },
    };
  });

  it('should not accept array as param', () => {
    expect(() => {
      mutateObjectKey(state, [
        {
          property: 'key',
          key: 'keyOfKey',
          with: 'newValue',
        },
      ]);
    }).toThrow();
  });

  it('should not accept when missing property', () => {
    expect(() => {
      mutateObjectKey(state, {
        key: 'keyOfKey',
        with: 'newValue',
      });
    }).toThrow();
    expect(state.key.keyOfKey).toBe('value');
  });

  it('should not accept when missing key', () => {
    expect(() => {
      mutateObjectKey(state, {
        property: 'key',
        with: 'newValue',
      });
    }).toThrow();
    expect(state.key.keyOfKey).toBe('value');
  });

  it('should not accept when missing with', () => {
    expect(() => {
      mutateObjectKey(state, {
        property: 'key',
        key: 'keyOfKey',
      });
    }).toThrow();
    expect(state.key.keyOfKey).toBe('value');
  });
});
