// Configuracion basica del servidor
import express, { json } from 'express';
import config from './config';
const cors = require('cors');

//RUTAS
import loginRouter from './routers/login.routers';
import departmentRouter from './routers/department.routers';
import locationRouter from './routers/location.router';
import userRouter from './routers/user.routers';
import requestRouter from './routers/request.router';

const app = express();

// settings
app.set('port', config.port);

//middlewares
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin:'http://localhost:4200'
}));

app.use(loginRouter);
app.use(departmentRouter);
app.use(locationRouter);
app.use(userRouter);
app.use(requestRouter);

export default app;