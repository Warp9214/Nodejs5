const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));



    res.render('team', { info: brigadeInfo });
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});



