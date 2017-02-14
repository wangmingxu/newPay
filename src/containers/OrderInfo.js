import { connect } from 'react-redux';
import OrderInfo from '../components/OrderInfo';

const mapStateToProps = (
  state
) => {
  const orderInfo = state.orderInfo;
  return {
    orderInfo
  };
};

module.exports = connect(mapStateToProps,{})(OrderInfo);
