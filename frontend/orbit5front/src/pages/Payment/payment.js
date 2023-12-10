import "../../Styles/payment.css"

import { useState } from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Payment() {
  toast.configure();

  const [product] = useState({
    name: "First Session",
    price: 120,
    description: "This is a Sample Session",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:4000/checkout", {
      token,
      product,
    });

    console.log(response.status);

    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
      window.location.href = "http://localhost:3000/bookings";
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="Payment">
      <div className="container">
        <br />
        <br />
        <h1 className="text-center">ORBIT5 Payment Page</h1>
        <br />
        <h2 className="text-center">Payment Info</h2>
        <h3 className="text-center">Coach Name: {product.name}</h3>
        <h3 className="text-center">Session Price: {product.price}</h3>
        <h3 className="text-center">
          Product Description: {product.description}
        </h3>
        <br />
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51KpfRNIcxD4GreRxEL4GIXUMYlX2H1fGC9afHtMPVT62WcGIPD8ZeshAQgy1zo7vDEjs9RudervIMs4Fz4r6GSnS00fh2XzeYL"
            token={handleToken}
            amount={product.price * 100}
            name="Sample Book"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
