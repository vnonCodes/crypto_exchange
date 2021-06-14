import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm 
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm />
    }

    return (
      <div id="content"> 

        <div className="card mb-4" >

          <div className="card-body">
            
            {content}

          </div>

        </div>

      </div>
    );
  }
}

export default Main;
