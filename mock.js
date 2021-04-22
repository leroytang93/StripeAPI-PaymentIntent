const express = require("express");
const app = express();

app.use(express.static("."));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
    res.redirect("https://2f414b69-1e92-4465-8c3e-1541c8343a17.mock.pstmn.io");
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd"
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret
    });
  });

  app.listen(4242, () => console.log('Node server listening on port 4242!'));