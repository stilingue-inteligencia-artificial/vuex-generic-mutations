import { Store, ModuleTree, Module } from 'vuex';

export type GenericModule = Module<State<any>, any>;

export type GenericModuleTree = ModuleTree<any>;

export type StoreType = typeof Store;

export interface State<T> {
  [key: string]: T;
}

export interface MutationPayload {
  property: string;
  with: string;
}

export interface MutationObjectPayload extends MutationPayload {
  key: string;
}

export interface StoreWithPrivateApi extends StoreType {
  _modulesNamespaceMap: GenericModuleTree[];
}
