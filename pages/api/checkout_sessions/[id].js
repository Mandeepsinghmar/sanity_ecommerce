import Stripe from 'stripe';

const stripe = new Stripe(String(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY));


export default async function handler(req, res) {
    const id = req.query.id;
    console.log(id)
    if (req.method === "GET") {
        try {
            if (id.startsWith('cs_')) {
                const session = await stripe.checkout.sessions.retrieve(id);
                const customer = await stripe.customers.retrieve(session.customer);

                // stripe.paymentIntents.create({
                //     amount: customer.balance,
                //     currency: customer.currency,
                //     payment_method_types: ['card'],
                //     receipt_email: customer.email,
                // });
                res.status(200).json(customer);

            }
            throw Error('Incorrect Checkout Session ID.');

        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    }

}