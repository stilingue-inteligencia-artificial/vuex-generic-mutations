import { mutate, mutateMultiple, mutateObjectKey } from '../src/mutations';

describe('Testing generic mutations', () => {
  /**
   * Test single mutate
   */
  describe('mutate', () => {
    let state;

    beforeEach(() => {
      state = {
        key: 'value',
      };
    });

    it('should mutate attributes', () => {
      mutate(state, {
        property: 'key',
        with: 'newValue',
      });
      expect(state.key).toBe('newValue');
    });
  });

  describe('mutate Failed mutations', () => {
    const state = {
      key: 'value',
    };

    it('should not mutate if missing property', () => {
      expect(() => {
        mutate(state, {
          with: 'newValue',
        });
      }).toThrow();
    });

    it('should not mutate if missing with', () => {
      expect(() => {
        mutate(state, {
          property: 'key',
        });
      }).toThrow();
    });
  });

  /**
   * Test mutating multiple attributes
   */
  describe('mutateMultiple', () => {
    let state;

    beforeEach(() => {
      state = {
        key1: 'value1',
        key2: 'value2',
      };
    });

    it('should mutate multiple attributes', () => {
      mutateMultiple(state, [
        {
          property: 'key1',
          with: 'newValue1',
        },
        {
          property: 'key2',
          with: 'newValue2',
        },
      ]);
      expect(state.key1).toBe('newValue1');
      expect(state.key2).toBe('newValue2');
    });
  });

  describe('mutateMultiple Failed mutations', () => {
    let state;

    beforeEach(() => {
      state = {
        key1: 'value1',
        key2: 'value2',
      };
    });

    it('should not mutate with payload is not an array', () => {
      expect(() => {
        mutateMultiple(state, {
          property: 'key1',
          with: 'newValue1',
        });
      }).toThrow();
      expect(state.key1).toBe('value1');
    });

    it('should not mutate with any payload is missing with', () => {
      expect(() => {
        mutateMultiple(state, [
          {
            property: 'key1',
          },
        ]);
      }).toThrow();
      expect(state.key1).toBe('value1');
    });

    it('should not mutate with any payload is missing property', () => {
      expect(() => {
        mutateMultiple(state, [
          {
            property: 'key1',
            with: 'newValue1',
          },
          {
            with: 'newValue2',
          },
        ]);
      }).toThrow();
      expect(state.key1).toBe('value1');
      expect(state.key2).toBe('value2');
    });

    it('should not mutate with any payload is missing with and property', () => {
      expect(() => {
        mutateMultiple(state, [
          {
            property: 'key1',
            with: 'newValue1',
          },
          {
            with: 'newValue2',
          },
          {
            property: 'key3',
            with: 'newValue3',
          },
          {
            property: 'key4',
          },
        ]);
      }).toThrow();
      expect(state.key1).toBe('value1');
      expect(state.key2).toBe('value2');
      expect('key3' in state).toBeFalsy();
    });
  });

  /**
   * Testing mutate a key inside a object
   */
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
});
