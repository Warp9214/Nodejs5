const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/team', (req, res) => {
    const brigadeInfo = {
        number: 5,
        students: [
            { name: 'Ярошенко Сергій', role: '' },
        ],
        repoLink: 'https://github.com/expressjs/express'
    };
    
    res.render('team', { info: brigadeInfo });
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});


