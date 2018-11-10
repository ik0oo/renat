// libs
import { Navigation } from 'react-native-navigation';

// screens
import registerScreens from './src/screens/registerScreens';

registerScreens();

const rootComponennt = {
  name: 'app.AuthScreen',
  options: {
    topBar: {
      title: {
        text: 'Welcome',
      }
    }
  },
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: rootComponennt,
        }]
      }
    },
  });
});
