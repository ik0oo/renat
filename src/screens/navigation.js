import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const bottomTab = ({name, text, icon, testID}) => ({
  component: {
    name,
    options: {
      bottomTab: { text, icon, testID }
    }
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