//SERVER/INDEX.JS is the backend for stripe payment, & cors
const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require('stripe')('sk_test_51IinU0FtWjoQXoZ1haydbDhnxUMVFtpsTZwgsMjB3cS5OcHlboaHIdYfKCjST55f49HACO58zWXtC82krB6n2ptT008tpYjnyE');
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

//cors asycn request to handle server reponses
app.post("/payment", cors(), async (req, res) => {
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Shoe company",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
});
// port running 
app.listen(process.env.PORT || 4000, () => {
    console.log("Sever is listening on port 4000")
});
