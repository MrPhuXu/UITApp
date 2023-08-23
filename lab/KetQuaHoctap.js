import {Keyboard, StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import React from 'react';

const Login = () => {
  const [diemHK1, onChangediemHK1] = React.useState('');
  const [diemHK2, onChangediemHK2] = React.useState('');
  const [diemTB, onChangediemTB] = React.useState('');
  const [ketqua, onChangeketqua] = React.useState('');
  const [xeploai, onChangexeploai] = React.useState('');
  
  const XemKetQua = () => {

    const diemTrungBinh = (parseFloat(diemHK1) + parseFloat(diemHK2)) / 2;
    const kq = diemTrungBinh >= 5 ? 'Đạt' : 'Không đạt';
    const xl = diemTrungBinh >= 9 ? 'Xuất sắc' : 
              diemTrungBinh >= 8 ? 'Giỏi' :
              diemTrungBinh >= 6.5 ? 'Khá' :
              diemTrungBinh >= 5 ? 'Trung bình' : 'Yếu';
    
    onChangediemTB(diemTrungBinh.toString());
    onChangeketqua(kq);
    onChangexeploai(xl);
    Keyboard.dismiss(); 
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.tieude}>
        <Text style={styles.texttieude}>KẾT QUẢ HỌC TẬP</Text>
      </View>
      <View style={styles.manHinh}>
        <View>
          <Text style={styles.text}>Điểm HK1</Text>
          <Text style={styles.text}>Điểm HK2</Text>
          <Text style={styles.text}>Điểm trung bình:</Text>
          <Text style={styles.text}>Kết quả: </Text>
          <Text style={styles.text}>Xếp loại học lực:  </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangediemHK1}
            value={diemHK1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangediemHK2}
            value={diemHK2}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={diemTB}
            editable={false} // Không cho phép người dùng chỉnh sửa
          />
          <TextInput
            style={styles.input}
            value={ketqua}
            editable={false}
          />
          <TextInput
            style={styles.input}
            value={xeploai}
            editable={false}
          />
        </View>
      </View>
      <Button title='XEM KẾT QUẢ' onPress={XemKetQua} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  tieude: {
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  manHinh: {
    flexDirection: "row",
    padding: 10,
  },
  texttieude: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: '150%',
    
  },
  main: {

    margin: 10,
  },
  text: {
    color: 'red',
    fontSize: 20,
    height: 40,
    margin: 12,
    padding: 5,
  }
});

export default Login;
