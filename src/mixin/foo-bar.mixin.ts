import {
  AnyObject,
  DefaultCrudRepository,
  Entity,
  Filter,
} from '@loopback/repository';
import {AbstractConstructor} from '../types';

export function FooBarMixin<
  T extends Entity,
  ID,
  Relations extends object = {},
  SuperClass extends AbstractConstructor<
    DefaultCrudRepository<T, ID, Relations>
  > = AbstractConstructor<DefaultCrudRepository<T, ID, Relations>>,
>(superClass: SuperClass): SuperClass {
  abstract class Fun extends superClass {
    find(filter?: Filter<T>, options?: AnyObject): Promise<(T & Relations)[]> {
      console.log(`🛑 FooBarMixin Applied 🛑`);
      return super.find(filter, options);
    }
  }
  return Fun;
}
