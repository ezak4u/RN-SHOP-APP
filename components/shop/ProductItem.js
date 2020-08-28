import React from 'react';
import 
    { View, 
      Image, 
      Text, 
      Button, 
      StyleSheet, 
      TouchableOpacity,  
      TouchableNativeFeedback,
      Platform    
    } from 'react-native';


import Colors from '../../constants/Corlors';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;
    if ( Platform.OS === 'android' && Platform.Version >= 21 ){
        TouchableCmp = TouchableNativeFeedback;
    }

return( 
    <View style={styles.product}>  
        <View style={styles.touchable}>
             <TouchableCmp onPress={props.onViewDetail}>
                 <View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri : props.image }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price}</Text>    
                    </View>
                
                    <View style={styles.actions}>
                        <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
                        <Button color={Colors.accent}  title="To Cart" onPress={props.onAddToCart}/>
                    </View>    
                </View>
            </TouchableCmp>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    product : {
        shadowColor : 'black',
        shadowOpacity : 0.26,
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 8,
        elevation : 5,
        borderRadius : 10,
        backgroundColor : 'white',
        height : 300,
        margin : 20,
       
    },
    touchable:{
        overflow : 'hidden',
        borderRadius : 10  
    },
    imageContainer:{
        width : '100%',
        height : '60%',
        overflow:'hidden',
        borderTopLeftRadius :10,
        borderTopRightRadius:10
    },
    image : {
        width : '100%',
        height : '100%'
    },
    details : {
        alignItems : 'center',
        height : '15%',
        padding : 10,
        fontFamily : 'open-sans'
    },
    title: {
        fontSize : 18,
        marginVertical : 2,
        fontFamily : 'open-sans-bold'
    },
    price:{
        fontSize : 14,
        color : '#888',
        fontFamily : 'open-sans'
    },
    actions:{
        flexDirection : 'row',
        justifyContent : 'space-around', 
        alignItems : 'center',
        height: '25%'
    }
});

export default ProductItem;