import dotenv from 'dotenv';
import * as express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = (host: string, port: string) => {
    return {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Koai Movies APIs v1',
                version: '0.1.0',
                description:
                    'This is a simple CRUD API application made with Express and documented with Swagger',
                license: {
                    name: 'MIT',
                    url: 'https://spdx.org/licenses/MIT.html',
                },
                contact: {
                    name: 'Koai',
                    url: 'https://koai.com',
                    email: 'koai@gemail.com',
                },
            },
            servers: [
                {
                    url: `http://${host}:${port}`,
                },
            ],
        },
        apis: ['./src/routes/Movie.api.ts'],
    };
};

export const middlewareRegister = (app: express.Application) => {
    dotenv.config();

    const specs = swaggerJsDoc(
        swaggerOptions(process.env.HOST, process.env.SERVER_PORT)
    );

    // Configure Express to serve incoming JSON data
    app.use(
        '/swagger',
        swaggerUI.serve,
        swaggerUI.setup(specs, { explorer: true })
    );
};
