/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer.prompt({
    name: "url",
    message: "Please enter URL: "
}).then((ans) => {
    var url = ans.url;
    var qr_img = qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", ans.url, (err) => {
        if (err) throw err;
    });
});
