import React, { Component } from "react";

class PurchaseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPurchased: false
    }
  }
    onClick = () => {
      const { optimizely } = this.props
      // after we’ve confirmed purchase completed
      console.log('====Purchase clicked===');
      optimizely.track('purchase');
      this.setState({
        isPurchased: !this.state.isPurchased
      })
    }
  
    render() {
      return (
        <div>
         {this.state.isPurchased && <p>You baught a product</p>}
         <button onClick={this.onClick}>
           Purchase
         </button>
        </div>
        
      )
    }
  }
  
  
  export default PurchaseButton;