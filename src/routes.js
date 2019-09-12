import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Main from './pages/Main'
import Contact from './pages/Contact'
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Contact,
    },
    {initialRouteName: 'Main'},
  ),
)
export default Routes
