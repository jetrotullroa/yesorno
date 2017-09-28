import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="eMaily"
          description="$5 for 5 survey credits."
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          >
          <button className="btn grey">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);
