import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Main from './pages/Main'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portifolio'
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Contact,
      About,
      Portfolio,
    },
    {initialRouteName: 'Main'},
  ),
)
export default Routes
