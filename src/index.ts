import { app } from './app';
import { AddressInfo } from 'net';

const server = app.listen(5009, '0.0.0.0', () => {
    const { port, address } = server.address() as AddressInfo;
    console.log('Server listening at: ', `http://${address}:${port}`);
});
