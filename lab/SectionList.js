import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Chitiet from '../src/Chitiet';
var DATA = [{
  loaihoa: "Hoa Quà tặng",
  data: [{
    "mahoa": 1,
    "tenhoa": "Đón xuân",
    "dongia": 15000,
    "hinh": require('../assets/ImagesFlatListText/cuc_9.jpg'),
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  }, {
    "mahoa": 2,
    "tenhoa": "Hồn nhiên",
    "dongia": 60000,
    "hinh": require('../assets/ImagesFlatListText/cuc_2.jpg'),
    "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
  }, {
    "mahoa": 3,
    "tenhoa": "Tím thuỷ chung",
    "dongia": 45000,
    "hinh": require('../assets/ImagesFlatListText/cuc_3.jpg'),
    "mota": "Hoa cúc tím"
  }, {
    "mahoa": 4,
    "tenhoa": "Nét duyên tím hoa cà",
    "dongia": 40000,
    "hinh": require('../assets/ImagesFlatListText/cuc_4.jpg'),
    "mota": "Hoa cúc màu tím nhạt"
  }, {
    "mahoa": 5,
    "tenhoa": "Cùng khoe sắc",
    "dongia": 70000,
    "hinh": require('../assets/ImagesFlatListText/cuc_5.jpg'),
    "mota": "Hoa cúc các màu: trắng, vàng, cam"
  }, {
    "mahoa": 6,
    "tenhoa": "Trắng thơ ngây",
    "dongia": 65000,
    "hinh": require('../assets/ImagesFlatListText/cuc_6.jpg'),
    "mota": "Hoa cúc trắng"
  }]
}, {
  loaihoa: "Hoa Hồng",
  data: [{
    "mahoa": 7,
    "tenhoa": "Dây tơ hồng",
    "dongia": 250000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_1.jpg'),
    "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
  }, {
    "mahoa": 8,
    "tenhoa": "Cầu thuỷ tinh",
    "dongia": 220000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_2.jpg'),
    "mota": "Hoa hồng và hoa thuỷ tiên trắng"
  }, {
    "mahoa": 9,
    "tenhoa": "Duyên thầm",
    "dongia": 260000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_3.jpg'),
    "mota": "Hoa cúc trắng, baby, lá măng"
  }, {
    "mahoa": 10,
    "tenhoa": "Ðâm chồi nảy lộc",
    "dongia": 180000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_4.jpg'),
    "mota": "Hoa hồng trắng và các loại lá măng"
  }, {
    "mahoa": 11,
    "tenhoa": "Hoà quyện",
    "dongia": 270000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_5.jpg'),
    "mota": "Hoa hồng trắng, lá thuỷ tùng"
  }, {
    "mahoa": 12,
    "tenhoa": "Nồng nàn",
    "dongia": 210000,
    "hinh": require('../assets/ImagesFlatListText/cuoi_6.jpg'),
    "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
  }]
}, {
  loaihoa: "Hoa Tình Yêu",
  data: [{
    "mahoa": 13,
    "tenhoa": "Together",
    "dongia": 120000,
    "hinh": require('../assets/ImagesFlatListText/hong_1.jpg'),
    "mota": "Hồng xác pháo, cúc tím"
  }, {
    "mahoa": 14,
    "tenhoa": "Long trip",
    "dongia": 85000,
    "hinh": require('../assets/ImagesFlatListText/hong_2.jpg'),
    "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
  }, {
    "mahoa": 15,
    "tenhoa": "Beautiful life",
    "dongia": 100000,
    "hinh": require('../assets/ImagesFlatListText/hong_3.jpg'),
    "mota": "Hoa hồng đỏ, lá măng, lá đệm"
  }, {
    "mahoa": 16,
    "tenhoa": "Morning Sun",
    "dongia": 75000,
    "hinh": require('../assets/ImagesFlatListText/hong_4.jpg'),
    "mota": "Hoa hồng vàng"
  }, {
    "mahoa": 17,
    "tenhoa": "Pretty Bloom",
    "dongia": 65000,
    "hinh": require('../assets/ImagesFlatListText/hong_5.jpg'),
    "mota": "Hoa hồng trắng và lá thông"
  }, {
    "mahoa": 18,

    "tenhoa": "Red Rose",
    "dongia": 45000,
    "hinh": require('../assets/ImagesFlatListText/hong_7.jpg'),
    "mota": "Hoa hồng đỏ và lá măng"
  }]
}, {
  loaihoa: "Hoa Cưới",
  data: [{
    "mahoa": 19,
    "tenhoa": "Vấn vuơng",
    "dongia": 150000,
    "hinh": require('../assets/ImagesFlatListText/xuan_1.jpg'),
    "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
  }, {
    "mahoa": 20,
    "tenhoa": "Nắng nhẹ nhàng",
    "dongia": 50000,
    "hinh": require('../assets/ImagesFlatListText/xuan_2.jpg'),
    "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
  }, {
    "mahoa": 21,
    "tenhoa": "Thanh tao",
    "dongia": 120000,
    "hinh": require('../assets/ImagesFlatListText/xuan_3.jpg'),
    "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
  }, {
    "mahoa": 22,
    "tenhoa": "Tinh khiết",
    "dongia": 110000,
    "hinh": require('../assets/ImagesFlatListText/xuan_4.jpg'),
    "mota": "Hồng trắng và salem"
  }, {
    "mahoa": 23,

    "tenhoa": "Mùa xuân chín",
    "dongia": 150000,
    "hinh": require('../assets/ImagesFlatListText/xuan_5.jpg'),
    "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
  }, {
    "mahoa": 24,
    "tenhoa": "Rực rở nắng vàng",
    "dongia": 75000,
    "hinh": require('../assets/ImagesFlatListText/xuan_6.jpg'),
    "mota": "Hồng vàng và cúc vàng"
  }, {
    "mahoa": 25,
    "tenhoa": "Love Candy",
    "dongia": 95000,
    "hinh": require('../assets/ImagesFlatListText/hong_13.jpg'),
    "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
  }]
}];
const App = () => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [itemchon, doichon] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {
        itemchon != null ?
          <Chitiet item={itemchon} />
          :
          <Text>Chọn hoa</Text>
      }
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={
              () => {
                doichon(item);
                // setModalVisible(true);
              }}>
              <Image source={item.hinh} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.texttenHoa}>{item.tenhoa}</Text>
            <Text style={styles.textgiahoa}>Giá bán:  {item.dongia}</Text>
            <Text>{item.mota}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { loaihoa } }) => (
          <Text style={styles.header}>{loaihoa}</Text>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  texttenHoa: {
    fontSize: 15,
    color: 'red',
    marginTop: 8,
  },
  textgiahoa: {
    fontSize: 15,
    color: 'blue',
    marginBottom: 5,
  },
  textthanhphan: {
    fontSize: 15,
    color: 'red',
    textAlign: 'left',
  },
  textdong: {
    fontSize: 25,
    color: 'red',
    textAlign: 'left',
    margin: 10,
  },
});

export default App;