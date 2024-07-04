import { Image, Pressable, TextInput } from 'react-native';
import React from 'react';
import { styles, stylesForMultipleDevice } from '../../styles/global';
import { color } from '../../styles/color';

const TextInputCustom = ({
  content,
  paddingHorizontal = 15,
  borderRadius = 6,
  borderWidth = 1,
  borderColor = color.lightGrey,
  height = 44,
  width = '100%',
  textColor = color.black,
  textSize = stylesForMultipleDevice.fontSize,
  iconLeftSize = 15,
  iconRightSize = 15,
  iconLeft,
  iconRight,
  marginTop = 10,
  onPressRightIcon = () => {},
  resizeMode = 'cover',
  tintColorIconLeft = color.lightGrey,
  tintColorIconRight = color.lightGrey,
  value = '',
  secureTextEntry = false,
  maxLength = 255,
  keyboardType = 'default',
  editable = true,
  onPress = () => {},
  disabled = false,
  onChangeText = () => {},
}) => {
  return (
    <Pressable
      style={{
        width: width,
        height: height,
        paddingHorizontal: paddingHorizontal,
        flexDirection: 'row',
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        borderColor: borderColor,
        marginTop: marginTop,
      }}
      onPress={onPress}
      disabled={disabled}>
      {iconLeft && (
        <Image
          style={{
            width: iconLeftSize,
            height: iconLeftSize,
            alignSelf: 'center',
            tintColor: tintColorIconLeft,
          }}
          source={iconLeft}
          resizeMode={resizeMode}
        />
      )}
      <TextInput
        style={{
          width: iconRight ? '90%' : '100%',
          height: height,
          paddingHorizontal: paddingHorizontal,
          color: textColor,
          fontSize: textSize,
          borderRadius: borderRadius,
          ...styles.textInput,
        }}
        placeholder={content}
        placeholderTextColor={color.lightGrey}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType={keyboardType}
        editable={editable}
        onChangeText={text => onChangeText(text)}
      />
      {iconRight && (
        <Pressable
          onPress={onPressRightIcon}
          style={{
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: iconRightSize,
              height: iconRightSize,
              alignSelf: 'center',
              tintColor: tintColorIconRight,
            }}
            source={iconRight}
            resizeMode={resizeMode}
          />
        </Pressable>
      )}
    </Pressable>
  );
};

export default TextInputCustom;
