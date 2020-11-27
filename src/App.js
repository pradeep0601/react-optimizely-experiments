import React, {Component} from 'react';
import shortUuid from 'short-uuid'
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
  withOptimizely,
} from '@optimizely/react-sdk';

import './App.css';

import PurchaseButton from './PurchaseButton';

const optimizely = createInstance({
  sdkKey: '8HHXZSoTB6TznYceH6Scr'
});

const WrappedPurchaseButton = withOptimizely(PurchaseButton)

const userAgent = window.navigator.userAgent
console.log('=========userAgent: ', userAgent);
const userId = `testuser-${shortUuid.generate()}`;
console.log('========userId: ', userId);
class App extends Component {
  render() {
  return (
    <OptimizelyProvider
    optimizely = {optimizely}
    user={{
      id: userId,
      attributes: {
        browser: {userAgent}
      }
    }}
    >
    <div className="App">
      <header className="App-header">
        <h2>Optimizely Feature Test</h2>
        <p>
          <OptimizelyFeature feature = 'discount'>
            {(enabled, variables) => (
              enabled ? `Discount: $${variables.amount}`: 'Discount: No discount, Regular price.'
            )}
          </OptimizelyFeature>
        </p>
        <p>
        <WrappedPurchaseButton></WrappedPurchaseButton>
        </p>
      </header>
    </div>
    </OptimizelyProvider>
  )
  };
}

export default App;
