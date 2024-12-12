import express = require('express');
import * as mongoose from 'mongoose';
import cors = require('cors');
import * as bodyParser from 'body-parser';
import PantryItem, { IPantryItem } from './models/PantryItem';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/pantry');

app.get('/api/pantry', async (req, res) => {
    const items = await PantryItem.find();
    res.json(items);
});

app.post('/api/pantry', async (req, res) => {
    console.log(req.body);
    const newItem: IPantryItem = new PantryItem({ name: req.body.name });
    await newItem.save();
    res.json(newItem);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});