import plugin from '../src/plugin';
import * as mutationTypes from '../src/mutationTypes';
import { mutate } from '../src/mutations/mutate';
import { mutateMultiple } from '../src/mutations/mutateMultiple';
import { mutateObjectKey } from '../src/mutations/mutateObjectKey';

const { MUTATE, MUTATE_MULTIPLE, MUTATE_OBJECT_KEY } = mutationTypes;

const store = {
  _modulesNamespaceMap: {
    moduleA: {
      _rawModule: {
        mutations: {},
      },
    },
    moduleB: {
      _rawModule: {
        mutations: {},
      },
    },
    moduleC: {
      _rawModule: {
        mutations: {},
      },
    },
  },
};

const noMutation = {
  _modulesNamespaceMap: {
    module: {
      _rawModule: {},
    },
  },
};

describe('plugin', () => {
  it('tests if plugin adds mutations to all modules', () => {
    plugin(store);
    Object.values(store._modulesNamespaceMap).forEach(module => {
      expect(module._rawModule.mutations).toEqual(
        expect.objectContaining({
          [MUTATE]: mutate,
          [MUTATE_MULTIPLE]: mutateMultiple,
          [MUTATE_OBJECT_KEY]: mutateObjectKey,
        }),
      );
    });
  });

  it('does not add mutations to the module if it has no mutation object', () => {
    plugin(noMutation);
    expect(noMutation._modulesNamespaceMap.module._rawModule.mutations).toBeUndefined();
  });
});
