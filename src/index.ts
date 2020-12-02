import { app } from './app';
import { AddressInfo } from 'net';
import logger from './core/logger';
import secrets from './core/secrets';

const envPort = secrets.PORT;
const envHost = secrets.HOST;

const server = app.listen(envPort, envHost, () => {
    const { port, address } = server.address() as AddressInfo;
    logger.info(`Server listening at: http://${address}:${port}`);
});
