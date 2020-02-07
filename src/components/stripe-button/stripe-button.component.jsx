import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe uses price in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_vOxPQWDlixoOLKZWVyEhgFdB00Ty2x4KqG';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;