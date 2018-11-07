// libs
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

// store
import configureStore from './src/store/configureStore';

// screens
import AuthScreen from './src/screens/Auth';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import FindPlace from './src/screens/FindPlace';
import SharePlace from './src/screens/SharePlace';

const store = configureStore();

// Navigation.registerComponent(`app.AuthScreen`, () => AuthScreen, store, Provider);
// Navigation.registerComponent(`app.SignIn`, () => SignIn, store, Provider);
// Navigation.registerComponent(`app.SignUp`, () => SignUp, store, Provider);
Navigation.registerComponentWithRedux(`app.FindPlace`, () => FindPlace, Provider, store);
Navigation.registerComponentWithRedux(`app.SharePlace`, () => SharePlace, Provider, store);

const bottomTab = ({name, text, icon, testID}) => ({
  component: {
    name,
    options: {
      bottomTab: { text, icon, testID }
    }
  }
});

Promise.all([
  Icon.getImageSource('md-map', 30),
  Icon.getImageSource('ios-share-alt', 30),
]).then(([mdMap, iosShareAlt]) => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            bottomTab({
              name: 'app.FindPlace',
              text: 'Find Place',
              icon: mdMap,
              testID: 'FIRST_TAB_BAR_BUTTON',
            }),
            bottomTab({
              name: 'app.SharePlace',
              text: 'Share place',
              icon: iosShareAlt,
              testID: 'SECOND_TAB_BAR_BUTTON',
            })
          ],
        },
      },
    });
  });
});
