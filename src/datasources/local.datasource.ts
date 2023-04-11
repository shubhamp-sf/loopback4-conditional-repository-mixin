import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as path from 'node:path';
const config = {
  name: 'local',
  connector: 'memory',
  localStorage: '',
  file: path.resolve(__dirname, 'db.json'),
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LocalDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'local';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.local', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
