import { GenericModule, GenericModuleTree, StoreWithPrivateApi, StoreType } from '../types';
import * as mutationTypes from './mutationTypes';
import { mutate, mutateMultiple, mutateObjectKey } from './mutations';

const { MUTATE, MUTATE_MULTIPLE, MUTATE_OBJECT_KEY } = mutationTypes;

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
  });
};
