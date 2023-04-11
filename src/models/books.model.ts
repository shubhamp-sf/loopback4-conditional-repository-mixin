import {Entity, model, property} from '@loopback/repository';

@model()
export class Books extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;


  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
