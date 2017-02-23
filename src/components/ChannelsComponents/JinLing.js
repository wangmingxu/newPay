import React,{Component} from 'react';
import {DateFormat} from '../../common/common';

const JinLing = (props)=>{
  return (
    <div className="payTypeItem jinling" onClick={()=>props.checkChannel(props.channel)}>
        <label>
            <p className="name">金灵贷</p>
            <p className="payTypeInfo">
                <span className="item">可用余额：{props.channel.object.creditBalance.toFixed(2)}元</span>
                <span className="item">日利率：万分之五</span>
                <span className="item">逾期日：{DateFormat(new Date(props.channel.date),"yyyy-MM-dd")} </span>
                <span className="item">逾期利率：万分之十</span>
            </p>
            <p className="payAmount creditLess">您的金灵贷额度不足，无法支付，请先<a href="/myLanjinling/getLanJinLingAccountUrl" target="_blank">还款</a></p>
        </label>
    </div>
  )
}
export default JinLing
