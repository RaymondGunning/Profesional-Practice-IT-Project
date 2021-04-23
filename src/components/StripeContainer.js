import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51IinU0FtWjoQXoZ11xrsTyC7bQVySik5Z37fH10vd3GH6KoyeZjd2FflCCEsHWpvVYbh0tQzV0bTKRknLyu97FHk004ixJSEsQ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}