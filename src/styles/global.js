import { StyleSheet, Dimensions, Platform } from 'react-native';
import { color } from './color';

export const WIDTH = Dimensions.get('screen').width;
export const HEIHGT = Dimensions.get('screen').height;
export const HEIHGT_PLATFORM = Platform.OS === 'ios' ? 700 : 850;

export const stylesForMultipleDevice = {
  marginTop: HEIHGT > HEIHGT_PLATFORM ? 15 : 10,
  heightHeaderImg: HEIHGT > HEIHGT_PLATFORM ? '30%' : '28%',
  sizeLogo: HEIHGT > HEIHGT_PLATFORM ? 140 : 100,
  fontSize: HEIHGT > HEIHGT_PLATFORM ? 15 : 13,
  heightButton: HEIHGT > HEIHGT_PLATFORM ? 44 : 40,
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
  },
  containerCenter: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  imgHeader: {
    width: '100%',
    height: stylesForMultipleDevice.heightHeaderImg,
    alignSelf: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    resizeMode: 'cover',
  },
  imgLogo: {
    width: stylesForMultipleDevice.sizeLogo,
    height: stylesForMultipleDevice.sizeLogo,
    alignSelf: 'center',
    marginTop: stylesForMultipleDevice.marginTop,
  },
  paddingGlobal: {
    padding: 15,
  },
  fullScreenCamera: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 100,
  },
  safeArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  ////
  corner: {
    width: 40, // Adjust the width of the corner dashes
    height: 40, // Adjust the height of the corner dashes
    borderWidth: 2, // Adjust the thickness of the corner dashes
    borderColor: color.topaz,
    position: 'absolute',
    borderRadius: 2,
  },
  topLeft: {
    top: -1,
    left: -1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: -1,
    right: -1,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: -1,
    left: -1,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: -2,
    right: -1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  border: {
    width: 100,
    height: 100,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: color.topaz,
    position: 'relative',
  },
});
