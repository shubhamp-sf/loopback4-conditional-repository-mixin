import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocalDataSource} from '../datasources';
import {fooBarWrapper} from '../mixin/foo-bar-wrapper.mixin';
import {Books, BooksRelations} from '../models';

export class BooksRepository extends fooBarWrapper(
  DefaultCrudRepository<Books, typeof Books.prototype.id, BooksRelations>,
) {
  constructor(@inject('datasources.local') dataSource: LocalDataSource) {
    super(Books, dataSource);
  }
}
