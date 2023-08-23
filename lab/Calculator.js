import { StyleSheet, Text, TextInput, View } from 'react-native';

const calculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ketqua}>
        <TextInput style={styles.textketqua}>113</TextInput>
      </View>
      <View style={styles.view1}>
        <View style={styles.view11}>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={styles.view11}>
          <Text style={styles.text}>8</Text>
        </View>
        <View style={styles.view11}>
          <Text style={styles.text}>9</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>/</Text>
        </View>
      </View>

      <View style={styles.view1}>
        <View style={styles.view11}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view11}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.view11}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>X</Text>
        </View>
      </View>
      <View style={styles.view1}>
        <View style={styles.view11}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.view11}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view11}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>-</Text>
        </View>
      </View>
      <View style={styles.view1}>
        <View style={{
          flex: 3,
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>+</Text>
        </View>
      </View>
      <View style={styles.view1}>
        <View style={{
          flex: 0.35,
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={styles.text}>C</Text>
        </View>
        <View style={styles.viewOperator}>
          <Text style={styles.textOperator}>=</Text>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ketqua: {
    flex: 1.5,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textketqua: {
    color: 'white',
    fontSize: 45,
  },
  text: {
    color: 'black',
    fontSize: 40,
    flex: 1,
    textAlign: 'center', // Căn giữa ngang
    textAlignVertical: 'center', 

  },
  textOperator: {
    color: 'black',
    fontSize: 40,
    alignItems: 'center',
    flex: 1,
    textAlign: 'center', // Căn giữa ngang
    textAlignVertical: 'center', 
  },
  viewOperator: {
    flex: 1,
    backgroundColor: '#00FF00',
    borderColor: 'black',
    borderWidth: 1,
  },
  view1: {
    flexDirection: 'row',
    flex: 1,
  },
  view11: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default calculator;
