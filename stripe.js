const express = require('express');
const app = express();
const stripe = require('./stripe');
const stripe = require('./subdirectory/stripe');

const stripe = require('stripe')('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'); // Replace with your Stripe secret key

app.use(express.json());
s
app.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
