import { connect } from 'react-redux';
import OrderInfo from '../components/OrderInfo';

const mapStateToProps = (
  state
) => {
  return {
    OrderInfo:state.OrderInfo
  };
};

module.exports = connect(mapStateToProps,{})(OrderInfo);
