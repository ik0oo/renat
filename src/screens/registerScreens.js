// libs
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// screens
import AuthScreen from './Auth';
import FindPlace from './FindPlace';
import SharePlace from './SharePlace';
import PlaceDetail from './PlaceDetail';
import SideMenu from './SideMenu';

// store
import configureStore from '../store/configureStore';

const store = configureStore();

export default function registerScreens() {
    Navigation.registerComponent(`app.AuthScreen`, () => AuthScreen);
    Navigation.registerComponent(`app.SideMenu`, () => SideMenu);
    Navigation.registerComponentWithRedux(`app.PlaceDetail`, () => PlaceDetail, Provider, store);
    Navigation.registerComponentWithRedux(`app.FindPlace`, () => FindPlace, Provider, store);
    Navigation.registerComponentWithRedux(`app.SharePlace`, () => SharePlace, Provider, store);
}
