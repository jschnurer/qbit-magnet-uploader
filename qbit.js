import { QBittorrent } from '@ctrl/qbittorrent';
import settings from "./local.settings.js";

const client = new QBittorrent({
  baseUrl: settings.apiUrl,
  username: settings.username,
  password: settings.password,
});

async function addMagnet(magnetUrl) {
  return await client.addMagnet(magnetUrl);
}

export default addMagnet;