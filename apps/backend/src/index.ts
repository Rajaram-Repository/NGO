import express from 'express';
import cors from 'cors'; // Import CORS
import { syncDatabase } from './db/sync';
import router from "./routes/tabsRoutes";

const App = express();

// Enable CORS for all origins or specify the frontend URL
App.use(cors()); // Allow all origins (you can restrict this to 'http://localhost:3000' for security)

// Parse incoming JSON requests
App.use(express.json());

// Use the routes for tabs
App.use('/', router);

// Sync the database
syncDatabase({ alter: true })
    .then(() => {
        console.log('Database Connected and Synced');
    })
    .catch(console.error);

// Start the server on port 3002
App.listen(3002, () => console.log('Express server started on port 3002'));
