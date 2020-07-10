import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51GrgdmDgIag4HrU9DOZYJjufVaRk5E2WvO2aZb6TQaTQbhmAqnVV0qTpQXTNqUm2ZIrev4hIurkVbaNasIpCedqp00FnOkb04n');

function StripeButton() {

    const handleClick = async (event) => {

        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                // Replace with the ID of your price
                { price: 'price_1GzrDpDgIag4HrU9OPWw7CHH', quantity: 1 }
            ],
            mode: 'payment',
            successUrl: 'http://localhost:3000/download',
            cancelUrl: 'http://localhost:3000',
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
        if (error) {
            return alert(error.message);
        }
    };

    return (
        <button role="link" onClick={handleClick}>
            Comprar
        </button>
    );
}

export default StripeButton