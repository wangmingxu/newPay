import React,{Component} from 'react';

const CheckQPB = ({
  isBalance,
  qpbDTO,
  actualAmount,
  toggleIsBalance
})=>{
  const noqpb = <label className="no_qpb">无可用汽配宝</label>;
  const text = <label htmlFor="use_qpb" className="use_qpb">使用汽配宝支付¥{qpbDTO.balance>actualAmount?actualAmount:qpbDTO.balance}</label>;
  return (
    <div className="QPB">
        <input type="checkbox" name="" id="use_qpb" onChange={() => toggleIsBalance(isBalance)} />
        {qpbDTO.balance>0?text:noqpb}
    </div>
  )
}
export default CheckQPB
