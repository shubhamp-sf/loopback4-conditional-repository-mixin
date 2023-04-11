import {DefaultCrudRepository, Entity} from '@loopback/repository';
import {AbstractConstructor} from '../types';
import {FooBarMixin} from './foo-bar.mixin';

export function fooBarWrapper<
  T extends Entity,
  ID,
  Relations extends object,
  S extends AbstractConstructor<DefaultCrudRepository<T, ID, Relations>>,
>(
  constructor: S & AbstractConstructor<DefaultCrudRepository<T, ID, Relations>>,
) {
  const ConditionalRepo =
    process.env.ADD_MIXIN === 'true'
      ? FooBarMixin<T, ID, Relations>(constructor)
      : constructor;
  Object.defineProperty(ConditionalRepo, 'name', {value: constructor.name});
  return ConditionalRepo;
}
