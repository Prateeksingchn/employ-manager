import express from 'express';
import { registeredMiddleware } from './src/routes/routes';

export const startServer = () => {
    const app = express();

    const { PORT } = process.env
    
    registeredMiddleware(app)

    app.listen(
        PORT,
        () => console.log('SERVER STARTED ON PORT 3000')
    );
}
