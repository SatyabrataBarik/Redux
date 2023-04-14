/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import main from './src/main';

AppRegistry.registerComponent(appName, () => main);
