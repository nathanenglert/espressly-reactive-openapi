import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import OpenAPIBackend from 'openapi-backend';

import Core from './operations/core';
import Things from './operations/things';
import ThingsService from './services/thingsService';

// Create services
const thingsService = new ThingsService();

// Create API routing and connect to logic
const api = new OpenAPIBackend({ definition: './reference/openapi.v1.yaml' });

Core.init(api);

if (process.env.MOCK) {
  api.register({
    notImplemented: (c, req, res) => {
      const { status, mock } = c.api.mockResponseForOperation(
        c.operation.operationId
      );
      return res.status(status).json(mock);
    },
  });
} else {
  Things.init(api, thingsService);
}

// Setup application
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
//app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.sendStatus(200));
app.use((req, res) => api.handleRequest(req, req, res));

export default app;
