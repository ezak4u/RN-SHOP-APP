import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetsilScreen';
import Colors from '../constants/Corlors';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrdersScreen';

const defaultNavigationOptions= {
    headerStyle :{
        backgroundColor : Platform.OS ==='android' ?  Colors.primary : 'white'
    },
    headerTitleStyle:{
        fontFamily : 'open-sans-bold'
    },
    headerBackTitleStyle : {
        fontFamily : 'open-sans'
    },
    headerTintColor:  Platform.OS ==='android' ? 'white' : Colors.primary
};

const drawerProductIconOptions = {
    drawerIcon: drawerConfig => (
      <Ionicons
        name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        size={23}
        color={drawerConfig.tintColor}
      />
    )
  };

  const drawerOrderIconOptions = {
    drawerIcon: drawerConfig => (
      <Ionicons
        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
        size={23}
        color={drawerConfig.tintColor}
      />
    )
  };


const ProductNavigator = createStackNavigator({
    ProductOverview : ProductOverviewScreen,
    ProductDetail : ProductDetailScreen,
    Cart : CartScreen
},{
    navigationOptions : drawerProductIconOptions,
    defaultNavigationOptions:defaultNavigationOptions
});

const OrderNavigator = createStackNavigator({
    Orders : OrderScreen
},{
    navigationOptions : drawerOrderIconOptions,
    defaultNavigationOptions:defaultNavigationOptions
})

const ShopNavigator = createDrawerNavigator({
    Product : ProductNavigator,
    Orders : OrderNavigator
},{
    contentOptions : {
        activeTintColor : Colors.primary
    }
})

export default createAppContainer(ShopNavigator);
