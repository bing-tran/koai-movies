import { createConnection } from 'typeorm';

export const connect = async () => {
    const connection = await createConnection({
        type: 'sqlite',
        database: 'database.db',
        name: 'default',
        synchronize: false,
        logging: true,
        migrationsTableName: 'custom_migration_table',
        entities: [__dirname + '/models/*.js', __dirname + '/models/*.ts'],
        migrations: [
            __dirname + '/migrations/*.js',
            __dirname + '/migrations/*.ts',
        ],
        cli: {
            entitiesDir: __dirname + '/models/',
            migrationsDir: __dirname + '/migrations/',
        },
    });

    // console.log('db connection: ', connection);
};
