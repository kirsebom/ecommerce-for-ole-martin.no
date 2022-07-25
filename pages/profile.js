import React from "react";
import { useRouter } from "next/router";
const stripe = require("stripe")(
	`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(ctx) {
		const session = getSession(ctx.req, ctx.res);
		const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
		const paymentIntents = await stripe.paymentIntents.list({
			customer: stripeId,
		});
		return { props: { orders: paymentIntents.data } };
	},
});

export default function Profile({ user, orders }) {
	const route = useRouter();
	console.log(orders);
	return (
		user && (
			<div>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<div>
					{orders.map((order) => (
						<Order key={order.id}>
							<h1>Order Number: {order.id}</h1>
							<h2>Receipt Email: {user.email}</h2>
							<h2>Amount: {formatMoney(order.amount)}</h2>
						</Order>
					))}
				</div>
				<Logout onClick={() => route.push("/api/auth/logout")}>Logout</Logout>
			</div>
		)
	);
}

const Order = styled.div`
	box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
	background: white;
	margin: 2rem 0rem;
	padding: 3rem;
	display: flex;
	justify-content: space-between;

	h1 {
		font-size: 1rem;
	}
	@media (max-width: 1800px) {
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}
	@media (max-width: 641px) {
		h2,
		h1 {
			font-size: 0.8rem;
		}
	}
`;
const Logout = styled.button`
	border: none;
	outline: none;
	background: #b23b3b;
	color: white;
	padding: 2rem 3rem;
	border-radius: 5px;
	font-size: 1.5rem;
	box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
	cursor: pointer;
`;
