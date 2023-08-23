import { StyleSheet, Image, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import React from 'react';

const TinhNamAmLich = () => {
  const [namdl, doinamdl] = React.useState('');
  const [namal, doinamal] = React.useState('');
  const [hinh, doihinh] = React.useState('');
  const [vthinh, doivthinh] = React.useState('');
  var hinhanh = [require('../assets/images/than.jpg'),
  require('../assets/images/dau.jpg'), require('../assets/images/tuat.jpg'),
  require('../assets/images/hoi.jpg'), require('../assets/images/ty.jpg'),
  require('../assets/images/suu.jpg'), require('../assets/images/dan.jpg'),
  require('../assets/images/meo.jpg'), require('../assets/images/thin.jpg'),
  require('../assets/images/ti.jpg'), require('../assets/images/ngo.jpg'),
  require('../assets/images/mui.jpg'),];
  var can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
  var chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi'];
  const DoiNam = () => {
    var kq = can[namdl % 10] + ' ' + chi[namdl % 12];
    doinamal(kq);
    doihinh(hinhanh[namdl % 12]);
  }
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.tieude}>Tính năm âm lịch</Text>
      <View style={styles.v1}>
        <Text style={styles.v2}>Năm dương lịch</Text>
        <Text style={styles.v2}>Năm âm lịch</Text>
      </View>
      <View style={styles.v1}>
        <TextInput style={styles.input}
          value={namdl} onChangeText={doinamdl} />
        <TouchableOpacity onPress={DoiNam}
          activeOpacity={0.5}>
          <View style={styles.nut}>
            <Text>=></Text>
          </View>
        </TouchableOpacity>
        <TextInput style={styles.input}
          value={namal}
          onChangeText={doinamal} />
      </View>
      <View style= {styles.imagev}>
        <Image
          style={styles.imageStyle}
          source={hinh} />
      </View>

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0.5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  main: {
    flex: 1,
    margin: 20,
    backgroundColor: 'cyan'
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  v1: {
    flexDirection: 'row',
  },
  tieude: {
    fontSize: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    textAlign: 'center'
  },
  v2: {
    flex: 0.5,
    fontSize: 16,
    padding: 10,
  },
  nut: {
    margin: 12,
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'white'
  },

  imageStyle: {
    width: 250,       // Đặt chiều rộng
    height: 250,      // Đặt chiều cao
  },
  imagev:{
    alignItems: 'center',
 
  }

});
export default TinhNamAmLich;







