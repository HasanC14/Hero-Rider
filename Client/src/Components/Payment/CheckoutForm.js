import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthProvider";
import "./CheckoutForm.css";
const CheckoutForm = ({ Payment }) => {
  const { User } = useContext(AuthContext);
  const { Price } = Payment;
  const [CardError, setCardError] = useState("");
  const [TID, setTID] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const dateObj = String(new Date());
  const date = dateObj.substring(0, 16);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://hero-rider-server-ashy.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [Price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    const { paymentIntent, error: ConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: User?.displayName,
            email: User?.email,
          },
        },
      });
    if (ConfirmError) {
      setCardError(ConfirmError.message);

      return;
    } else {
      setCardError("");
    }
    if (paymentIntent.status === "succeeded") {
      setTID(paymentIntent.id);
      //   console.log(TID);
      //   const PaymentInfo = {
      //     ProductName,
      //     BuyerEmail,
      //     SellerEmail,
      //     TID,
      //     date,
      //   };
      //   //Payment Collection
      //   fetch("https://hero-rider-server-ashy.vercel.app/addPayment", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(PaymentInfo),
      //   });

      swal({
        icon: "success",
        title: `Payment Successful.`,
        button: "OK",
      });
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement className="CardElement" />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p className="text-red-600 text-center text-xl">{CardError}</p>
    </>
  );
};

export default CheckoutForm;
