import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import { getTabsByOrgId, createTab, editTab, deleteTab } from '../controllers/tabsController';

const router = express.Router();

// Example Express.js route (in backend)
router.get("/data", (req: Request, res: Response) => {
    const data = {
      message: "This is the data from the backend",
      timestamp: new Date().toISOString(),
    };
    res.json(data);
  });
  
// Home route for localhost
router.get('/', (req: Request, res: Response) => {
    console.log('11111111111111111111111111111111111111');
    res.send('Welcome to the Home Page');
});

// Get all tabs for a specific organization by orgId
router.get('/tabs/:orgId', function (req: Request, res: Response) {
    getTabsByOrgId(req, res);
});

// Create a new Tab
router.post('/tabs', function (req: Request, res: Response) {
    createTab(req, res);
});

// Edit an existing Tab by tabId
router.put('/tabs/:tabId', function (req: Request, res: Response) {
    editTab(req, res);
});

// Delete a Tab by tabId
router.delete('/tabs/:tabId', function (req: Request, res: Response) {
    deleteTab(req, res);
});

export default router;
