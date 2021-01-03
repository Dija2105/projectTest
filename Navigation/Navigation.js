import {createStackNavigator,createAppContainer} from 'react-navigation'
import Search from '../Components/Search'
import Reglage from '../Components/Reglage'
const LoginStackNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      title: "Home"

    }
  }
/*  Reglage:{
    screen: Reglage,
    navigationOptions:{
      title: "Reglage"
    }
  }*/
})
export default createAppContainer(LoginStackNavigator);
