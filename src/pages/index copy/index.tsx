import { View,  WebView } from '@tarojs/components'
import { useEffect } from 'react';
import './index.less'

const WebPage = () => {

  useEffect(() => {
    console.log('web page init')
  }, [])

  return (
    <View className='index'>
      <WebView src='https://www.ciplawyer.cn' />
    </View>
  );
}

export default WebPage

