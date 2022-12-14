import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './common/common.routes.config';
import {UserRoutes} from './users/users.routes.config';
import debug from 'debug';
const app :express.Application= express()
const server: http.Server=http.createServer(app);
const port =3000;
const routes:Array<CommonRoutesConfig>=[]
const debugLog:debug.IDebugger=debug('app')

//adding  middleware to parse all incoming requests to json
app.use(express.json())
//middleware to allow cross-origin requests
// app.use(cors())
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}
routes.push(new UserRoutes(app))


server.listen(port,()=>{
    routes.forEach((route:CommonRoutesConfig)=>{
        debugLog(`Routes configured for ${route.getName()}`)
    })
    
})