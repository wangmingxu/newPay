import React,{Component} from 'react';

const OrderInfo = ({
  orderInfo
})=>{
  return (
    <div className="orderInfo">
        <div className="payInfo">
            <div className="left">
                <p className="paySs">订单提交成功，请尽快付款！<span className="orderNo">订单号：{orderInfo.orderNo}</span></p>
                        <p className="payTime">请在<span>2</span>小时<span>59</span>分<span>59</span>秒内完成支付，超时订单将自动取消。</p>
                    </div>
                    <div className="right">
                        应付金额<span className="num">{orderInfo.orderPriceProcessed.actualAmount.toFixed(2)}</span>元
                    </div>
                </div>
                <div className="contactInfo">
                    <p className="line">配送至：{orderInfo.receiveAddressDTO.address}</p>
                    <p className="line">收货人：{orderInfo.receiveAddressDTO.name}  {orderInfo.receiveAddressDTO.mobile}</p>
                    <p className="line">实付金额：325.00元</p>
                    <p className="line">购买时间：2016年08月03日 14:17:00</p>
                </div>
            </div>
  )
}
export default OrderInfo
