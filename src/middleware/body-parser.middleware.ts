import * as express from 'express';
import * as bodyParser from 'body-parser';

export const middlewareRegister = (app: express.Application) => {
    // Configure Express to serve incoming JSON data
    app.use(
        bodyParser.json({
            limit: '50mb',
            verify(req: any, res, buf, encoding) {
                req.rawBody = buf;
            },
        })
    );
};
