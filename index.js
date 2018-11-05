import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/AuthScreen';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

Navigation.registerComponent(`app.AuthScreen`, () => AuthScreen);
Navigation.registerComponent(`app.SignIn`, () => SignIn);
Navigation.registerComponent(`app.SignUp`, () => SignUp);

const rootComponent = {
  name: 'app.AuthScreen',
  options: {
    topBar: {
      title: {
        text: 'Welcome',
      }
    }
  }
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: rootComponent,
        }]
      }
    }
  });
});
