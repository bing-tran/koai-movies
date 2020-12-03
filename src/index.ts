import dotenv from 'dotenv';
import { app } from './app';
import logger from './core/logger';

async function main() {
    // Initialize configuration
    dotenv.config();

    const portNumber = parseInt(process.env.SERVER_PORT, 10);
    const host = process.env.HOST;

    await app.listen(portNumber, host, () => {
        logger.info(`Server listening at: http://${host}:${portNumber}`);
    });
}

process.on('unhandledRejection', (err) => {
    if (err) {
        logger.error(err);
    }

    process.exit(1);
});

main();
