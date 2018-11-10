import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const bottomTab = ({ name, text, icon, testID }) => ({
  stack: {
    children: [{
      component: {
        name,
        options: {
          bottomTab: {
            text,
            icon,
            testID,
            iconColor: '#999',
            textColor: '#999',
            selectedIconColor: '#000',
            selectedTextColor: '#000',
          },
          topBar: {
            title: {
              text,
            } 
          }
        }
      }
    }],
  }
});

export const goHome = () => Promise.all([
  Icon.getImageSource('md-map', 30),
  Icon.getImageSource('ios-share-alt', 30),
]).then(([mdMap, iosShareAlt]) => {
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

export const showPlaceDetails = (id, passProps) => Navigation.push(id, {
  component: {
    name: 'app.PlaceDetail',
    passProps,
    options: {
      topBar: {
        title: {
          text: passProps.name
        },
      },
    },
  }
})

export const pop = (id) => Navigation.pop(id);