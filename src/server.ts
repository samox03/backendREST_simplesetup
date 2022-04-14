import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';

const router = express();

// Connect to Mongo
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        // console.log('Connected to Mongo');
        // more detailed log:
        Logging.info('Connected to Mongo');
        StartServer();
    })
    .catch((error) => {
        // console.log('Error connecting to Mongo ', error);
        Logging.error('Error connecting to Mongo');
        Logging.error(error);
    });

/* Only start the server if Mongo Connects */
const StartServer = () => {
    //Logging to the router
    router.use((req, res, next) => {
        // Log the request
        Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            // Log the Response
            Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.status}]`);
        });
        //call the next() to pass the request through this part of middleware and not let the request end with passing here .
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    //used to be seperated by bodyparser, now its implemented in express:
    router.use(express.json());

    // Rules of the API

    // Routes

    // Healthcheck
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    //Error handling
    router.use((req, res, next) => {
        const error = new Error('not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => Logging.info(`Server listening on port ${config.server.port}`));
};
