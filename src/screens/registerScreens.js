// libs
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// screens
import AuthScreen from './Auth';
import FindPlace from './FindPlace';
import SharePlace from './SharePlace';

// store
import configureStore from '../store/configureStore';

const store = configureStore();

export default function registerScreens() {
    Navigation.registerComponent(`app.AuthScreen`, () => AuthScreen, store, Provider);
    Navigation.registerComponentWithRedux(`app.FindPlace`, () => FindPlace, Provider, store);
    Navigation.registerComponentWithRedux(`app.SharePlace`, () => SharePlace, Provider, store)
}
