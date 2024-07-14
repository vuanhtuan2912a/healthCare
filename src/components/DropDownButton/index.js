import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { stylesDropDownButton } from '../../styles/DropDown';
import { color } from '../../styles/color';
import ItemsDropDown from './ItemsDropDown';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { saveSpecialtyAppointment } from '../../store/actions/appointment';

const DropDownButton = ({
  uriIcon = require('../../assets/icons/arrow-right.png'),
  content = '',
  dropDownSelected = true,
  onPress = () => {},
  data = [],
}) => {
  const [selectedItem, setSelectedItem] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={[stylesDropDownButton.container, { paddingVertical: 3 }]}>
      <Pressable
        style={stylesDropDownButton.buttonShowItemSelected}
        onPress={onPress}>
        <Text style={stylesDropDownButton.content}>
          {selectedItem ? selectedItem : content}
        </Text>
        <Image
          source={uriIcon}
          style={[
            stylesDropDownButton.icon,
            { transform: [{ rotate: dropDownSelected ? '-90deg' : '90deg' }] },
          ]}
          tintColor={color.carbonGrey}
          resizeMode="contain"
        />
      </Pressable>
      {dropDownSelected && (
        <View style={stylesDropDownButton.containerDropDown}>
          <ScrollView
            style={{
              width: '100%',
            }}>
            {data &&
              data?.map((item, index) => (
                <ItemsDropDown
                  key={index}
                  content={item?.content}
                  onPress={() => {
                    setSelectedItem(item?.content);
                    onPress();
                    dispatch(saveSpecialtyAppointment(item?.content));
                  }}
                  data={data}
                  index={index}
                />
              ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DropDownButton;
