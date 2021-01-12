import 'react-native-gesture-handler';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from '../Components/Home';
import Options from '../Components/Options';
import Animal from '../Components/Animal';
import Reglage from '../Components/Reglage';
import Compte from '../Components/Compte';
import AddPet from '../Components/AddPet';
import Animal2 from '../Components/Animal2';
import Animal3 from '../Components/Animal3';
import Felix from '../Components/Felix';
import Planning from '../Components/Planning';
import Planning2 from '../Components/Planning2';
import FelixProg from '../Components/FelixProg.js';
import User from '../Components/User.js';
const StackNavigator = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      headerShown: null

    }

  },
  Options:{
    screen: Options,
    navigationOptions: {
      title: "Options"

    }
  },
    Animal:{
      screen: Animal,
      navigationOptions: {
        title: "Animal"

      }
  },
  Reglage:{
    screen: Reglage,
    navigationOptions: {
      title: "Reglage"

    }
},
Compte:{
  screen: Compte,
  navigationOptions: {
    headerShown: null

  }
},
AddPet:{
  screen: AddPet,
  navigationOptions: {
    headerShown: null

  }
},
  Animal2:{
    screen: Animal2,
    navigationOptions: {
      headerShown: null

    }

    },
    Animal3:{
      screen: Animal3,
      navigationOptions: {
        headerShown: null

      }
      },
    Felix: {
        screen: Felix,
        navigationOptions: {
          headerShown: null

        }
      },
      FelixProg: {
          screen: FelixProg,
          navigationOptions: {
            headerShown: null

          }
        },
      Planning: {
          screen: Planning,
          navigationOptions: {
            headerShown: null

          }
        },
        Planning2: {
            screen: Planning2,
            navigationOptions: {
              headerShown: null

            }
          },
        User: {
              screen: User,
              navigationOptions: {
                headerShown: null

              }
            }





})
export default createAppContainer(StackNavigator);
