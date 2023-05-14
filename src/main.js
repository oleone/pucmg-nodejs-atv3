import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('success');
});

app.listen(3000, () => console.log(`Listening in port 3000`));