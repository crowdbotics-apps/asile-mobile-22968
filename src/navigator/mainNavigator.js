import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings178626Navigator from '../features/Settings178626/navigator';
import ArticleList178600Navigator from '../features/ArticleList178600/navigator';
import Maps178587Navigator from '../features/Maps178587/navigator';
import UserProfile178565Navigator from '../features/UserProfile178565/navigator';
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
Settings178626: { screen: Settings178626Navigator },
ArticleList178600: { screen: ArticleList178600Navigator },
Maps178587: { screen: Maps178587Navigator },
UserProfile178565: { screen: UserProfile178565Navigator },
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
