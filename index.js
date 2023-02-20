import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import path from "path";
import settings from "./local.settings.js";
import addMagnet from "./qbit.js";

const app = express();
app.use('*', cors());
app.options("*", cors());
app.use(express.json());

const privateKey = fs.readFileSync(path.join(settings.sslCertPath, 'privkey.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(settings.sslCertPath, 'cert.pem'), 'utf8');
const ca = fs.readFileSync(path.join(settings.sslCertPath, 'chain.pem'), 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};
const httpsServer = https.createServer(credentials, app);

app.post('/submitMagnet', async function (req, res) {
  try {
    if (!req.body.url) {
      throw new Error("no url prop specified in request body.");
    }

    await addMagnet(req.body.url);

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.toString());
  }
});

httpsServer.listen(settings.port, function () {
  console.log(`listening on *:${settings.port}`);
});