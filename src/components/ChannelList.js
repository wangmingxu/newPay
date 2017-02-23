import React,{Component} from 'react';
import * as channelTypes from '../constants/channelTypes.js';
import JinLing from '../components/ChannelsComponents/JinLing';
import Yibao from '../components/ChannelsComponents/Yibao';

const ChannelList = (props)=>{
  const {channels,isBalance,...other} = props;
  const channelsMap = channels.map(function(item){
    switch (item.channel) {
      case channelTypes.JinlingChannel:
        return <JinLing key={item.channel} channel={item} {...other}/>;
      case channelTypes.YibaoChannel:
        return <Yibao key={item.channel} channel={item} {...other}/>;
      case channelTypes.UnionB2BChannel:
        return '银联B2B';
      case channelTypes.ALiPayChannel:
        return '支付宝支付';
      case channelTypes.OfflineChannel:
        return '线下支付';
      default:
        return;
    }
  });
  return (
    <div className={`payTypeList ${isBalance&&'hide'}`}>
          {channelsMap}
    </div>
  )
}
export default ChannelList
