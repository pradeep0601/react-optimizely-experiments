import React, { Component } from "react";

class PurchaseButton extends Component {
    onClick = () => {
      const { optimizely } = this.props
      // after we’ve confirmed purchase completed
      console.log('====Purchase clicked===');
      optimizely.track('purchase')
    }
  
    render() {
      return (
        <button onClick={this.onClick}>
          Purchase
        </button>
      )
    }
  }
  
  
  export default PurchaseButton;