// This file hosts the constants with the values used on native apps (User Defaults on iOS and Shared Preferences on Android).
import { isIOS, isAndroid } from '../utils/deviceInfo'; // TODO: remove it

export const IDENTIFIER = isIOS ? 'group.ios.chat.rocket' : 'chat.rocket.android';
export const SERVERS = isIOS ? 'kServers' : 'ACCOUNTS_KEY';
export const TOKEN = isIOS ? 'kAuthToken' : 'authToken';
export const USER_ID = isIOS ? 'kUserId' : 'userId';
export const SERVER_URL = isIOS ? 'kAuthServerURL' : 'serverUrl';
export const SERVER_NAME = isIOS ? 'kServerName' : 'serverName';
export const SERVER_ICON = isIOS ? 'kServerIconURL' : 'serverLogoUrl';