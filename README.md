# qbit-magnet-uploader
Node express api to upload magnet urls to qbit torrent.

Create a `local.settings.js` file in the same directory with the following settings:

* `apiUrl` - the url location of your qbittorrent api
* `username` - your qbit username
* `password` - your qbit password
* `port` - the https port to run on
* `sslCertPath` - the cert path to your 'privkey.pem', 'cert.pem' and 'chain.pem'

Example:

```
const settings = {
  "apiUrl": "https://nameof.yourwebsite.com/qbittorrent",
  "username": "your_username",
  "password": "your_password",
  "port": 89,
  "sslCertPath": "/etc/letsencrypt/live/nameof.yourwebsite.com",
};

export default settings;
```
