import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import { color } from '../../styles/color';

const NewsItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Slide 1',
      content: 'Slide 1 content',
      img: require('../../assets/images/headerImg.png'),
    },
    {
      title: 'Slide 2',
      content: 'Slide 2 content',
      img: require('../../assets/images/logo.png'),
    },
    {
      title: 'Slide 3',
      content: 'Slide 3 content',
      img: require('../../assets/images/headerImg.png'),
    },
  ]; // Replace with your actual slide content

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000); // Adjust the interval duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
      }}>
      <Image
        style={{
          alignSelf: 'center',
          borderRadius: 10,
          zIndex: -1,
          width: '100%',
          height: '100%',
        }}
        source={slides[currentSlide].img}
        resizeMode="contain"
      />
      <Text
        style={{
          marginTop: -30,
          marginLeft: 15,
          color: color.white,
          fontWeight: 'bold',
        }}>
        {slides[currentSlide].content}
      </Text>
    </View>
  );
};

export default NewsItems;
