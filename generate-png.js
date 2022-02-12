const fs = require('pn/fs');
const svg2png = require('svg2png');
const path = require('path');


fs.readdir('./src/assets/icons/', (err, files) => {
    if (!fs.existsSync('./src/assets/icons-png/')) {
        fs.mkdirSync('./src/assets/icons-png/');
    }

    files.forEach(file => {
        fs.readFile(path.join('./src/assets/icons/', file))
            .then(svg2png)
            .then(buffer => {
                fs.writeFile(path.join('./src/assets/icons-png/', `${path.parse(file).name}.png`,), buffer)
            })
            .catch(e => console.error(e));
    });
});