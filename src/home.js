import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getImageList} from '../store/Action/getImageListAction';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = props => {
  const imageList = useSelector(state => state.imageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageList('carousel'));
    dispatch(getImageList('grid'));
  }, []);

  const renderCarousel = ({item, ind}) => {
    return <Image source={{uri: item}} style={styles.carouselImage} />;
  };

  const RenderGrid = ({item, ind}) => {
    return <Image source={{uri: item}} style={styles.gridImage} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.carouselContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={(width * 99) / 100}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          data={imageList.imageData}
          keyExtractor={(item, ind) => `item${ind}`}
          renderItem={renderCarousel}
        />
      </View>
      <ScrollView style={{paddingBottom: 20}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', margin: 5}}>
          {imageList.gridImageData.map((item, index) => {
            return <RenderGrid key={`item${index}`} item={item} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: (height * 30) / 100,
    width: width,
  },
  carouselImage: {
    height: (height * 28) / 100,
    width: (width * 95) / 100,
    margin: (width * 2) / 100,
    borderRadius: 10,
  },
  gridContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  content: {
    marginTop: 20,
  },
  gridImage: {
    width: (width * 45) / 100,
    height: 150,
    margin: 5,
    borderRadius: 5,
  },
});

export default Home;
