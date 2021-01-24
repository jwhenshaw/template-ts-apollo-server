import { connect, Mongoose } from 'mongoose';
import config from './config';

type DbOptions = {
  uri?: string;
  db?: string;
};

export default ({
  uri = config.get('db.uri'),
  db = config.get('db.example'),
}: DbOptions = {}): Promise<Mongoose> =>
  connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: db,
    useFindAndModify: false,
  });
