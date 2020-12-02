import { app } from './app';
import logger from './core/logger';
import secrets from './core/secrets';

async function main() {
    const port = secrets.PORT;
    const host = secrets.HOST;
    await app.listen(port, host, () => {
        logger.info(`Server listening at: http://${host}:${port}`);
    });
}

process.on('unhandledRejection', (err) => {
    if (err) {
        logger.error(err);
    }

    process.exit(1);
});

main();
