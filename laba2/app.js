const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/team', (req, res) => {
    const brigadeInfo = {
        number: 5,
        students: [
            { name: 'Ярошенко Сергій', role: 'Заточка' },
            { name: 'Плисюк Ростислав', role: 'Сокамерник' },
            { name: 'Ковальногов Олександр', role: 'Математик' },
            { name: 'Ковальов Михайло ', role: 'Ніж' },
            { name: 'Сивенюк Ольга', role: 'Тімлід' },
        ],
        repoLink: 'https://github.com/expressjs/express'
    };

    res.render('team', { info: brigadeInfo });
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});









