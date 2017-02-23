import { connect } from 'react-redux';
import ChannelList from '../components/ChannelList';
import { checkChannel } from '../actions/index.js';
import * as channelTypes from '../constants/channelTypes.js';

const mapStateToProps = (
  state
) => {
  const {isBalance,channels,channeling} = state;
  const actualAmount = state.orderInfo.orderPriceProcessed.actualAmount;
  const qpbDTO = state.channels.filter(function(item) {
      return item.channel === channelTypes.qpbChannel;
  })[0];
  const payAmount = isBalance?(actualAmount-qpbDTO.balance):actualAmount;
  return {
    isBalance,
    channels,
    payAmount,
    channeling
  };
};

const mapDispatchToProps = (
  dispatch
) => {
  return {
    checkChannel: (channel) => {
      dispatch(checkChannel(channel));
    }
  };
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(ChannelList);
