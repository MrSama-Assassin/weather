import React from 'react';
import { Header } from 'react-native-elements';
export default function Appbar() {
  return (
    <Header
      backgroundColor={'#3D6089'}
      centerComponent={{
        text: 'MY WEATHER APP',
        style: { color: '#001aff', fontSize: 20, shadowColor:'#001aff' },
      }}
    />
  );
}
