import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    if (new Date().getDay() == 0 || new Date().getDay() == 6) {
        res.render(__dirname + "/views/index.ejs", 
        {
            text: "Hey! It's the weekend, it's time to have fun!"
        });
    }
    else {
        res.render(__dirname + "/views/index.ejs", 
        {
            text: "Hey! It's a weekday, it's time to work hard!"
        });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
