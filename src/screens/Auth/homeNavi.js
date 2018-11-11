import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const bottomTab = ({ name, text, icon, testID, menuButtonIcon }) => ({
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
            }, 
            leftButtons: [
              {
                id: 'buttonOne',
                icon: menuButtonIcon,
                text: 'Menu',
              }
            ]
          }
        }
      }
    }],
  }
});

const sideMenuRoot = (component) => ({
  root: {
    sideMenu: {
      left: {
        component: {
          name: 'app.SideMenu',
          passProps: {
            text: 'This is a left side menu screen'
          }
        }
      },
      center: component,
    }
  }
});

export const goHome = () => Promise.all([
  Icon.getImageSource('md-map', 30),
  Icon.getImageSource('ios-share-alt', 30),
  Icon.getImageSource('ios-menu', 30),
]).then(([mdMap, iosShareAlt, iosMenu]) => {
  Navigation.setRoot(
    sideMenuRoot({
      bottomTabs: {
        children: [
          bottomTab({
            name: 'app.FindPlace',
            text: 'Find Place',
            icon: mdMap,
            testID: 'FIRST_TAB_BAR_BUTTON',
            menuButtonIcon: iosMenu,
          }),
          bottomTab({
            name: 'app.SharePlace',
            text: 'Share place',
            icon: iosShareAlt,
            testID: 'SECOND_TAB_BAR_BUTTON',
            menuButtonIcon: iosMenu,
          })
        ],
      },
    })
  );
});