# qbit-magnet-uploader
Node express api to upload magnet urls to qbit torrent. Just post a message to `https://url/submitMagnet`

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

# Magnetize bookmarklet
You can use the js inside the magnetBookmark.js file as a bookmark toolbar button in your browser. It will find any `<a>` tag on the current page whose `href` contains `magnet:` and set an onClick event that will send the request to this express api. You just need to change `https://192.168.1.128:89/submitMagnet` to your own hosted URL.
