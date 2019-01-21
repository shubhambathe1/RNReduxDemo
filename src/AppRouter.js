import { createStackNavigator, createAppContainer } from "react-navigation";
import CounterApp from './CounterApp';
import CounterApp2 from './CounterApp2';

const AppNavigator = createStackNavigator({
    Home: {
        screen: CounterApp
    },
    Home2: {
        screen: CounterApp2
    },
},
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);