
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Pr from './src/components/Pr';
import WidthScreenTest from './src/components/WidthScreenTest';
import TodoAsycStorage from './src/components/TodoAsycStorage';
import Apiaxios from './src/components/Apiaxios';
import WeatherscreenA from './src/screens/WeatherscreenA';
import WeatherscreenB from './src/screens/WeatherscreenB';

AppRegistry.registerComponent(appName, () => WeatherscreenB);
