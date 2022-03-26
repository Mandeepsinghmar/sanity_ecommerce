/* eslint-disable indent */
import Stripe from 'stripe';

const stripe = new Stripe(String(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY));

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    {
                        shipping_rate: 'shr_1Kfg5pSIiYD0ysKdzsoq6SgO',
                    },
                    {
                        shipping_rate: 'shr_1Kffy4SIiYD0ysKdhiPa3zWq',
                    },
                ],

                line_items: req.body.cartItems.map((item) => {
                    // eslint-disable-next-line no-underscore-dangle
                    const img = item.image[0].asset._ref;
                    const newImg = img.replace('image-', 'https://cdn.sanity.io/images/s4nqfjth/production/').replace('-webp', '.webp');

                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.name,
                                images: [newImg],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity,
                    };
                }),
                success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: 'http://localhost:3000/cancel',
            };
            const checkoutSession = await stripe.checkout.sessions.create(params);

            res.status(200).json(checkoutSession);
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
