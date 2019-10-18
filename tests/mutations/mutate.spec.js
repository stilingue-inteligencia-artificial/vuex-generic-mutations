/**
 * Test single mutate
 */
import { mutate } from '../../src/mutations/mutate';

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
