import { GenericModule, GenericModuleTree, StoreWithPrivateApi, StoreType } from '../types';
import * as mutationTypes from './mutationTypes';
import { mutate } from './mutations/mutate';
import { mutateMultiple } from './mutations/mutateMultiple';
import { mutateObjectKey } from './mutations/mutateObjectKey';
import { mutateRemoveObjectKey } from './mutations/mutateRemoveObjectKey';
import { mutateRemoveObjectsFromArrayByAttributeAndValue } from './mutations/mutateRemoveObjectsFromArrayByAttributeAndValue';

const {
  MUTATE,
  MUTATE_MULTIPLE,
  MUTATE_OBJECT_KEY,
  MUTATE_REMOVE_OBJECT_KEY,
  MUTATE_REMOVE_OBJECTS_FROM_ARRAY_BY_ATTRIBUTE_AND_VALUE,
} = mutationTypes;

export default (store: StoreType) => {
  const modulesNamespaces: GenericModuleTree[] = Object.values(
    ((store as any) as StoreWithPrivateApi)._modulesNamespaceMap,
  );
  const modules: GenericModule[] = modulesNamespaces.map(m => m._rawModule);

  modules.forEach((storeModule: GenericModule) => {
    if (!storeModule.mutations) {
      return;
    }
    storeModule.mutations[MUTATE] = mutate;
    storeModule.mutations[MUTATE_MULTIPLE] = mutateMultiple;
    storeModule.mutations[MUTATE_OBJECT_KEY] = mutateObjectKey;
    storeModule.mutations[MUTATE_REMOVE_OBJECT_KEY] = mutateRemoveObjectKey;
    storeModule.mutations[
      MUTATE_REMOVE_OBJECTS_FROM_ARRAY_BY_ATTRIBUTE_AND_VALUE
    ] = mutateRemoveObjectsFromArrayByAttributeAndValue;
  });
};
