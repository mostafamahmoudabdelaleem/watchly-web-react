const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;
const appName = process.env.APPNAME || "Watchly";

app.use(express.static(path.join(__dirname, 'build')));

http.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
    res.removeHeader("Server");
    res.removeHeader("Via");
    res.removeHeader("x-powered-by");
});

server.listen(port, () => console.log(`[${appName} Server]: Server running on port <${port}>.`))
