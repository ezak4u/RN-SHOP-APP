import React from 'react';
import { FlatList, Text, View, StyleSheet, Platform} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const OrderScreen = props => {
    const orders = useSelector(state => state.order.orders);
    return <FlatList data={orders}  keyExtractor = {item => item.id} renderItem ={itemData => <Text>{itemData.item.totalAmount}</Text>}
    />;
};

const styles = StyleSheet.create({

});

OrderScreen.navigationOptions = navData => {
    return {
    headerTitle : 'Your Orders',
    headerLeft : <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName={ Platform.OS==='android' ? 'md-menu' : 'ios-menu'} 
            onPress={
            ()=>{
                navData.navigation.toggleDrawer()
            }
            }/>
    </HeaderButtons>
    }
}

export default OrderScreen;