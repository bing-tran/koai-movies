import * as express from 'express';
import { Movie } from '../db/models/movie.model';

export const apiRegister = (app: express.Application) => {
    /**
     * @swagger
     *  components:
     *     schemas:
     *       Movie:
     *         type: object
     *         required:
     *           - title
     *           - plot_summary
     *           - duration
     *         properties:
     *           id:
     *             type: integer
     *             description: The auto-generated id of the movie.
     *           title:
     *             type: string
     *             description: The title of your movie.
     *           plot_summary:
     *             type: string
     *             description: The plot summary of your movie
     *           duration:
     *             type: number
     *             description: The duration of your movie
     *         example:
     *            title: The Lord of The Ring
     *            plot_summary: Landscape Ireland
     *            duration: 3.5
     */

    /**
     * @swagger
     * tags:
     *  name: Movies
     *  description: API to manage movies
     */

    /**
     * @swagger
     * paths:
     *  /api/movies:
     *   get:
     *     summary: Retrieve collection of movies
     *     description: Retrieve collection of movies
     *     tags: [Movies]
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: A JSON array of movies
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/components/schemas/Movie'
     */
    app.get('/api/movies', async (req, res) => {
        const movies = await Movie.find();
        res.send(movies);
    });

    /**
     * @swagger
     * paths:
     *  /api/movies/{id}:
     *   get:
     *     summary: Retrieve detail info of a movie
     *     description: Return the movie details information
     *     tags: [Movies]
     *     produces:
     *      - application/json
     *     parameters:
     *      - name: id
     *        in: path
     *        required: true
     *        description: The id of the existing movie
     *        schema:
     *          type: integer
     *     responses:
     *       200:
     *         description: A JSON object of a movie
     *         schema:
     *           type: object
     *           items:
     *             $ref: '#/components/schemas/Movie'
     *       404:
     *          description: Movie not found
     */
    app.get('/api/movies/:id', async (req, res) => {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (movie) {
            res.json(movie);
        } else {
            res.status(404).send({
                message: `Movie [${req.params.id}] is not found`,
            });
        }
    });

    /**
     * @swagger
     * paths:
     *  /api/movies:
     *   post:
     *     summary: Add a new movie
     *     description: Post to add a new movie
     *     tags: [Movies]
     *     produces:
     *       - application/json
     *     requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Movie'
     *     responses:
     *       200:
     *         description: JSON object of new added movie
     *         schema:
     *           $ref: '#/components/schemas/Movie'
     *       404:
     *          description: Movie not found
     */
    app.post('/api/movies', async (req, res) => {
        const movie = new Movie();
        movie.title = req.body.title;
        movie.plot_summary = req.body.plot_summary;
        movie.duration = req.body.duration;
        console.log(movie);
        await movie.save();
        res.send(movie);
    });

    /**
     * @swagger
     * paths:
     *  /api/movies/{id}:
     *   put:
     *     summary: Update a movie
     *     description: PUT to update a movie
     *     tags: [Movies]
     *     produces:
     *      - application/json
     *     parameters:
     *      - name: id
     *        in: path
     *        required: true
     *        description: The movie id
     *        schema:
     *          type: integer
     *     requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Movie'
     *     responses:
     *       200:
     *         description: JSON object of updated movie
     *         schema:
     *           $ref: '#/components/schemas/Movie'
     *       404:
     *          description: Movie not found
     */
    app.put('/api/movies/:id', async (req, res) => {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (movie) {
            if (req.body.title) {
                movie.title = req.body.title;
            }
            if (req.body.plot_summary) {
                movie.plot_summary = req.body.plot_summary;
            }
            if (req.body.duration) {
                movie.duration = req.body.duration;
            }

            await movie.save();
            res.send(movie);
        } else {
            res.status(404).send({
                message: `Movie [${req.params.id}] is not found`,
            });
        }
    });

    /**
     * @swagger
     * paths:
     *  /api/movies/{id}:
     *   delete:
     *     summary: Remove a movie
     *     description: DELETE a movie by id
     *     tags: [Movies]
     *     produces:
     *      - application/json
     *     parameters:
     *      - name: id
     *        in: path
     *        required: true
     *        description: The movie id
     *        schema:
     *          type: integer
     *     responses:
     *       200:
     *         description: Successful message
     *         schema:
     *           $ref: '#/components/schemas/Movie'
     *       404:
     *          description: Movie not found
     */
    app.delete('/api/movies/:id', async (req, res) => {
        const movie = await Movie.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (movie) {
            await movie.remove();
            res.json({ message: `Movie [${req.params.id}] is deleted` });
        } else {
            res.status(404).send({
                message: `Movie [${req.params.id}] is not found`,
            });
        }
    });
};
