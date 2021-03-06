import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile92520Navigator from '../features/UserProfile92520/navigator';
import Tutorial92519Navigator from '../features/Tutorial92519/navigator';
import NotificationList92491Navigator from '../features/NotificationList92491/navigator';
import Settings92490Navigator from '../features/Settings92490/navigator';
import Settings92482Navigator from '../features/Settings92482/navigator';
import UserProfile92480Navigator from '../features/UserProfile92480/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile92520: { screen: UserProfile92520Navigator },
Tutorial92519: { screen: Tutorial92519Navigator },
NotificationList92491: { screen: NotificationList92491Navigator },
Settings92490: { screen: Settings92490Navigator },
Settings92482: { screen: Settings92482Navigator },
UserProfile92480: { screen: UserProfile92480Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
