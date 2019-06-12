/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if(Platform.OS === 'android') { // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/en-US'); // load the required locale details
  require('intl/locale-data/jsonp/en-IE'); // load the required locale details
  require('intl/locale-data/jsonp/de-DE'); // load the required locale details
  require('intl/locale-data/jsonp/ja-JP'); // load the required locale details
}

AppRegistry.registerComponent(appName, () => App);
