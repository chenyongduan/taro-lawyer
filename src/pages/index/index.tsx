import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useEffect } from 'react';
import './index.less'

const Index = () => {

  useEffect(() => {
    console.log('index page init')
    Taro.reLaunch({
      url:'/pages/web-page/index'
    });
  }, [])

  return (
    <View />
  );
}

export default Index

