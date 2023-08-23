import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  { MaHoa: '1', TenHoa: 'Đón xuân', GiaBan: '50000', HinhAnh: require('../assets/ImagesFlatListText/cuc_9.jpg'), ThanhPhan: 'Hoa cúc các màu: trắng, vàng, cam',},
  { MaHoa: '1', TenHoa: 'Hồn nhiên', GiaBan: '60000', HinhAnh: require('../assets/ImagesFlatListText/cuc_2.jpg'), ThanhPhan: 'Hoa cúc vàng, cam. lá măng', },
  { MaHoa: '1', TenHoa: 'Tím thuỷ chung', GiaBan: '450000', HinhAnh: require('../assets/ImagesFlatListText/cuc_3.jpg'), ThanhPhan: 'Hoa cúc tím',},
  { MaHoa: '1', TenHoa: 'Nét duyên tím hoa cà', GiaBan: '40000', HinhAnh: require('../assets/ImagesFlatListText/cuc_4.jpg'), ThanhPhan: 'Hoa cúc màu tím nhạt',},
  { MaHoa: '1', TenHoa: 'Cùng khoe sắc', GiaBan: '70000', HinhAnh: require('../assets/ImagesFlatListText/cuc_5.jpg'), ThanhPhan: 'Hoa cúc các màu: trắng, vàng, cam',},
  { MaHoa: '1', TenHoa: 'Trắng thơ ngây', GiaBan: '650000', HinhAnh: require('../assets/ImagesFlatListText/cuc_6.jpg'), ThanhPhan: 'Hoa cúc trắng',},
  { MaHoa: '2', TenHoa: 'Dây tơ hồng', GiaBan: '250000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_1.jpg'), ThanhPhan: 'Hoa hồng màu hồng đậm,hoa hồng xanh,các loại lá măng'},
  { MaHoa: '2', TenHoa: 'Cầu thuỷ tinh', GiaBan: '220000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_2.jpg'), ThanhPhan: 'Hoa hồng và hoa thuỷ tiên trắng' },
  { MaHoa: '2', TenHoa: 'Duyên thầm', GiaBan: '260000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_3.jpg'), ThanhPhan: 'Hoa cúc trắng,baby,lá măng' },
  { MaHoa: '2', TenHoa: 'Đâm chồi nảy lộc', GiaBan: '180000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_4.jpg'), ThanhPhan: 'Hoa hồng trắng và các loại lá măng' },
  { MaHoa: '2', TenHoa: 'Hoà quyện', GiaBan: '270000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_5.jpg'), ThanhPhan: 'Hoa hồng trắng,lá thuỷ tùng' },
  { MaHoa: '2', TenHoa: 'Nồng nàn', GiaBan: '210000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_6.jpg'), ThanhPhan: 'Hoa hồng đỏ,lá thuỷ tùng,lá măng' },
  { MaHoa: '3', TenHoa: 'Together', GiaBan: '120000', HinhAnh: require('../assets/ImagesFlatListText/hong_1.jpg'), ThanhPhan: 'Hồng xác pháo,cúc tím' },
  { MaHoa: '3', TenHoa: 'Long trip', GiaBan: '85000', HinhAnh: require('../assets/ImagesFlatListText/hong_2.jpg'), ThanhPhan: 'Hoa hồng đỏ,lá kim thuỷ tùng' },
  { MaHoa: '3', TenHoa: 'Beautiful life', GiaBan: '100000', HinhAnh: require('../assets/ImagesFlatListText/hong_3.jpg'), ThanhPhan: 'Hoa hồng đỏ,lá măng,lá đệm' },
  { MaHoa: '3', TenHoa: 'Morning Sun', GiaBan: '75000', HinhAnh: require('../assets/ImagesFlatListText/hong_4.jpg'), ThanhPhan: 'Hoa hồng vàng' },
  { MaHoa: '3', TenHoa: 'Pretty Bloom', GiaBan: '65000', HinhAnh: require('../assets/ImagesFlatListText/hong_5.jpg'), ThanhPhan: 'Hoa hồng trắng và lá thông' },
  { MaHoa: '3', TenHoa: 'Red Rose', GiaBan: '45000', HinhAnh: require('../assets/ImagesFlatListText/hong_7.jpg'), ThanhPhan: 'Hoa hồng đỏ,hồng đậm,cúc đỏ,các loại lá' }, 
  { MaHoa: '4', TenHoa: 'Vấn vương', GiaBan: '150000', HinhAnh: require('../assets/ImagesFlatListText/xuan_1.jpg'), ThanhPhan: 'Hoa hồng đỏ và lá măng' },
  { MaHoa: '4', TenHoa: 'Nắng nhẹ nhàng', GiaBan: '50000', HinhAnh: require('../assets/ImagesFlatListText/xuan_2.jpg'), ThanhPhan: 'Hoa cúc xanh,hoa lys vàng,lá đệm' },
  { MaHoa: '4', TenHoa: 'Thanh tao', GiaBan: '120000', HinhAnh: require('../assets/ImagesFlatListText/xuan_3.jpg'), ThanhPhan: 'Hoa thủy tiên,cúa trắng,cúc dại tím,các loại lá đệm' },
  { MaHoa: '4', TenHoa: 'Tinh khiết', GiaBan: '110000', HinhAnh: require('../assets/ImagesFlatListText/xuan_4.jpg'), ThanhPhan: 'Hồng trắng và salem' },
  { MaHoa: '4', TenHoa: 'Mùa xuân chín', GiaBan: '150000', HinhAnh: require('../assets/ImagesFlatListText/xuan_5.jpg'), ThanhPhan: 'Hồmg cam,cúc xanh,thuỷ tiên và các loại lá' },
  { MaHoa: '4', TenHoa: 'Rực rỡ nắng vàng', GiaBan: '75000', HinhAnh: require('../assets/ImagesFlatListText/xuan_6.jpg'), ThanhPhan: 'Hồng vàng và cúc vàng' },
  { MaHoa: '3', TenHoa: 'Love Candy', GiaBan: '95000', HinhAnh: require('../assets/ImagesFlatListText/hong_13.jpg'), ThanhPhan: 'Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt,điểm thêm baby trắng và lá măng' },
  { MaHoa: '2', TenHoa: 'Happy Wedding', GiaBan: '210000', HinhAnh: require('../assets/ImagesFlatListText/cuoi_9.jpg'), ThanhPhan: 'Hoa hồng môn và các loại lá' },
  { MaHoa: '1', TenHoa: 'Cúc nhiệt đới', GiaBan: '150000', HinhAnh: require('../assets/ImagesFlatListText/cuc_15.jpg'), ThanhPhan: 'Cúc vàng - hồng cam - lá măng' },

];

const FlatListText = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Image source={item.HinhAnh} />
            <Text style={styles.texttenHoa}>{item.TenHoa}</Text>
            <Text style={styles.textgiahoa}>Giá bán: {item.GiaBan}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
  },
  texttenHoa: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
    marginTop: 8,
  },
  textgiahoa: {
    fontSize: 15,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 15,
  }


});

export default FlatListText;