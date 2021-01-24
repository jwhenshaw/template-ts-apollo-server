import {
  DocumentType,
  prop,
  index,
  getModelForClass,
} from '@typegoose/typegoose';
import { Model, Types } from 'mongoose';
import { MongooseDataSource } from '../MongooseDatasource';
import { Context } from '../types/Context';
import { Config } from '../config';

@index({ created: -1 })
class TodoClass {
  @prop({ required: true })
  label: string;

  @prop({ default: false })
  done: boolean;

  @prop()
  listId: Types.ObjectId;

  @prop({ required: true, default: new Date() })
  created: Date;
}

export const TodoModel = getModelForClass(TodoClass);

export type TodoModelType = DocumentType<TodoClass>;

export class TodoDatasource<
  TContext extends Context
> extends MongooseDataSource<TodoModelType, TContext> {
  private config: Config;

  constructor({
    config,
    model = TodoModel,
  }: {
    config: Config;
    model?: Model<TodoModelType>;
  }) {
    super(model);
    this.config = config;
  }
}
