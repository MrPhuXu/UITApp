import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import { Alert } from 'react-native';
import React from 'react';

const Login = () => {
  const [tendn, onChangeTendn] = React.useState('');
  const [matkhau, onChangematkhau] = React.useState('');
  const DangNhap = () => {
    Alert.alert('Thong tin: \n Ten DN:' + tendn + 'mat khau' + matkhau);
  }
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Tên đăng nhập</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTendn}
        value={tendn}
      />
      <Text style={styles.text}>Mật khẩu</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangematkhau}
        value={matkhau}
        secureTextEntry
      />
      <Button title='ĐĂNG NHẬP' onPress={DangNhap} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  main: {
    flex: 1,
    margin: 20,
  },
  text: {
    color: 'red',
    fontSize: 20,
  }
});
export default Login;



