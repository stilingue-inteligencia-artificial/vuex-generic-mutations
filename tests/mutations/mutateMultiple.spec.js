/**
 * Test mutating multiple attributes
 */
import { mutateMultiple } from '../../src/mutations/mutateMultiple';

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
