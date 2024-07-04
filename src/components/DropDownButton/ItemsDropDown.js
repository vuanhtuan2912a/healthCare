import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { color } from '../../styles/color';
import { stylesForMultipleDevice } from '../../styles/global';

const ItemsDropDown = ({
  content = '',
  onPress = () => {},
  data = [],
  index,
}) => {
  return (
    <Pressable
      style={{
        width: '100%',
        borderBottomWidth: index !== data?.length - 1 ? 1 : 0,
        borderBottomColor: color.lightGrey,
        padding: 15,
      }}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginLeft: 15,
            justifyContent: 'space-between',
          }}>
          {content && (
            <Text
              style={{
                color: color.carbonGrey,
                fontSize: stylesForMultipleDevice.fontSize,
                marginTop: 3,
              }}>
              {content}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default ItemsDropDown;
