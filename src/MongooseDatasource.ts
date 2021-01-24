import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { Model, Document } from 'mongoose';

class MongooseDataSource<
  TModel extends Document,
  TContext = unknown
> extends DataSource {
  context: TContext;
  model: Model<TModel>;

  constructor(model: Model<TModel>) {
    super();
    this.model = model;
  }

  initialize(config: DataSourceConfig<TContext>): void {
    this.context = config.context;
  }
}

export { MongooseDataSource };
