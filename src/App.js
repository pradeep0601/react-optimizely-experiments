import React from 'react';
import shortUuid from 'short-uuid'
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
  withOptimizely,
} from '@optimizely/react-sdk';

import logo from './logo.svg';
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
function App() {
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
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Test Optimizely Experiments</h2>
        <p>
          <OptimizelyFeature feature = 'discount'>
            {(enabled, variables) => (
              enabled ? `Got a discount of $${variables.amount}`: 'Regular price, no discount!'
            )}
          </OptimizelyFeature>
        </p>
        <p>
        <WrappedPurchaseButton></WrappedPurchaseButton>
        </p>
      </header>
    </div>
    </OptimizelyProvider>
  );
}

export default App;
