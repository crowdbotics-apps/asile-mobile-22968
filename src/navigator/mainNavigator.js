import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial178564Navigator from '../features/Tutorial178564/navigator';
import NotificationList178536Navigator from '../features/NotificationList178536/navigator';
import Settings178535Navigator from '../features/Settings178535/navigator';
import Settings178527Navigator from '../features/Settings178527/navigator';
import UserProfile178525Navigator from '../features/UserProfile178525/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial178564: { screen: Tutorial178564Navigator },
NotificationList178536: { screen: NotificationList178536Navigator },
Settings178535: { screen: Settings178535Navigator },
Settings178527: { screen: Settings178527Navigator },
UserProfile178525: { screen: UserProfile178525Navigator },

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
