import { CheckoutCard } from "@/components/checkout/CheckoutCard";
import {
  CHECKOUT_SUCCESS_URL,
  PADDLE_ADVANCED_PRICE_ID,
  PADDLE_CLIENT_TOKEN,
} from "@/lib/checkout/paddle";

export default function CheckoutPage() {
  return (
    <CheckoutCard
      token={PADDLE_CLIENT_TOKEN}
      priceId={PADDLE_ADVANCED_PRICE_ID}
      successUrl={CHECKOUT_SUCCESS_URL}
    />
  );
}
