import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
const chitiet = (props) => {
    return(
        <View>
            <Text>{props.item.tenhoa}</Text>
            <Image source={props.item.hinh}/>
            <Text>{props.item.mota}</Text>
        </View>
    )
}
export default chitiet;
const style = StyleSheet.create({
    centerdView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    }
})