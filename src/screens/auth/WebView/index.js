import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from '../../../components/Header';

const WebViewCustom = ({ route, uri }) => {
  console.log('route', route);
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <Header content={route?.params?.headerName} />
      <WebView
        source={{ uri: uri ? uri : route?.params?.uri }}
        style={{ marginTop: 5, width: '100%', height: '100%' }}
      />
    </View>
  );
};

export default WebViewCustom;
