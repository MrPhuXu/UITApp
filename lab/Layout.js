import { StyleSheet, Text, View } from 'react-native';

const layout = () => {
  return (
    <View style={styles.view}>
      <View style={styles.v1} />
      <View style={styles.v2}>
        <View style={styles.v21} />
        <View style={styles.v22}>
          <View style={styles.v221} />
          <View style={styles.v222} />
        </View>
      </View>
      <View style={styles.v3} />
      <View style={styles.v4} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'black',
    flex: 1,
  },
  v1: {
    flex: 1,
    backgroundColor: 'darkorange',
    borderWidth: 2,
    borderColor: 'white',
  },
  v2: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    flex: 2,
  },
  v21: {
    flex: 1,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'white',
  },
  v22: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
  },
  v221: {
    flex: 1,
    backgroundColor: 'magenta',
    borderWidth: 2,
    borderColor: 'white',
  },
  v222: {
    flex: 1,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'white',
  },
  v3: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    backgroundColor: 'red',
  },
  v4: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'white',
    flex: 0.6,
    backgroundColor: 'blue',
  },

});
export default layout;
