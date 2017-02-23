import { connect } from 'react-redux';
import CheckQPB from '../components/CheckQPB';
import { toggleIsBalance } from '../actions/index.js';
import * as channelTypes from '../constants/channelTypes.js';

const mapStateToProps = (
  state
) => {
  const isBalance = state.isBalance;
  const qpbDTO = state.channels.filter(function(item) {
      return item.channel === channelTypes.qpbChannel;
  })[0];
  const actualAmount = state.orderInfo.orderPriceProcessed.actualAmount;
  return {
    isBalance,
    qpbDTO,
    actualAmount
  };
};

const mapDispatchToProps = (
  dispatch
) => {
  return {
    toggleIsBalance: (isBalance) => {
      dispatch(toggleIsBalance(isBalance));
    }
  };
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(CheckQPB);
