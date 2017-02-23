import React, {Component} from 'react';

class Yibao extends Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            bankCode: props.channel.unionPay[0].bankCode
        };

    }

    checkBank(bankCode) {
        this.setState({bankCode: bankCode},()=>{
          this.props.checkChannel({
            channel : this.props.channel.channel,
            bankCode : this.state.bankCode
          });
        });
    }

    render() {
      const {channel, payAmount,checkChannel} = this.props;
      const bankList = channel.unionPay.map((bank) => {
          return <div className="bankItem" key={bank.id} onClick={()=>{this.checkBank(bank.bankCode)}}>
              <div className={`bankImg bank-${bank.bankCode}`}></div>
          </div>;
      })
      return (
          <div>
              <div className="payTypeItem wangyin">
                  <label ng-class="(channel.channel==selectChannel)&&(yiBaoType==2)?'checked':''" onClick={()=>{this.checkBank(this.state.bankCode)}}>
                      <p className="name">网银支付</p>
                      <p className="payTypeInfo">
                          支持{channel.unionPay.length}家银行的网银支付功能
                      </p>
                      <p className="payAmount">支付<span className="num">{payAmount.toFixed(2)}</span>元</p>
                  </label>
                  <div className="bankList">
                      {bankList}
                  </div>
                  <p>{this.state.checkedBank}</p>
              </div>
          </div>
      )
    }
}
export default Yibao
