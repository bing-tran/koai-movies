import * as express from 'express';
import * as bodyParserMiddleware from './body-parser.middleware';
import * as swaggerUIMiddleware from './swagger.middleware';

export const middlewareRegister = (app: express.Application) => {
    // Register body parser middleware
    bodyParserMiddleware.middlewareRegister(app);

    // Register swagger UI
    swaggerUIMiddleware.middlewareRegister(app);

    // TODO: more middleware
};
