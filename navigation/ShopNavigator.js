import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Corlors';


const ProductNavigator = createStackNavigator({
    ProductOverview : ProductOverviewScreen

},{
    defaultNavigationOptions:{
        headerStyle :{
            backgroundColor : Platform.OS ==='android' ?  Colors.primary : 'white'
        },
        headerTintColor:  Platform.OS ==='android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductNavigator);
