import * as mongoose from 'mongoose';
// import * as process from 'process';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://admin:admin@office.9dnkbti.mongodb.net/?retryWrites=true&w=majority`,
      ),
  },
];