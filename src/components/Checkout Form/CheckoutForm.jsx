import { useState, useEffect } from "react";
import styles from "./CheckoutForm.module.css";
import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setModifiedPrice,
  setCheckoutStatus,
  setCheckoutDetails,
} from "../../redux/slices/checkoutSlice";
import emailjs from "emailjs-com";

const CheckoutForm = () => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.checkout.productDetails);
  const checkoutStatus = useSelector((state) => state.checkout.checkoutStatus);

  const [quantity, setQuantity] = useState(1);

  const capitalizeFirst = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  const handleCheckout = async (values) => {
    dispatch(setCheckoutStatus(true));
    const finalValues = {
      ...values,
      price: productDetails.price,
      singlePrice: productDetails.singlePrice,
    };
    dispatch(setCheckoutDetails(finalValues));

    try {
      await emailjs.send(
        "service_92agsh9",
        "template_m0jhnzs",
        {
          customerName: finalValues.customerName,
          email: finalValues.email,
          price: finalValues.price,
          order_id: Math.floor(Math.random() * 1000000),
          orders: [
            {
              product: finalValues.product,
              quantity: finalValues.quantity,
              address: finalValues.address,
              phone: finalValues.phone,
              paymentMethod: finalValues.paymentMethod,
              singlePrice: finalValues.singlePrice || finalValues.price,
            },
          ],
        },
        "eUkpqIWqKgo5r0hDV"
      );

      console.log("Invoice sent to email successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    dispatch(setModifiedPrice(quantity));
  }, [quantity]);

  return (
    <div className={`${styles.checkout} section`}>
      {checkoutStatus ? (
        <h4 style={{ textAlign: "center", lineHeight: "50px" }}>
          Order placed successfully! <br />
          Please check your email for confirmation details.
        </h4>
      ) : (
        <div className={styles.checkoutForm}>
          <div className={styles.checkoutDetails}>
            <Form
              layout="vertical"
              onFinish={handleCheckout}
              initialValues={{
                product: capitalizeFirst(productDetails.name),
                quantity: productDetails.quantity || 1,
                price: productDetails.price,
              }}
            >
              <Form.Item name="product">
                <Input readOnly placeholder="Product" />
              </Form.Item>

              <Form.Item
                name="quantity"
                rules={[
                  { required: true, message: "Please enter quantity" },
                  {
                    validator: (_, value) => {
                      if (!value) return Promise.resolve();
                      return Number(value) >= 1
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Quantity must be at least 1")
                          );
                    },
                  },
                ]}
              >
                <Input
                  placeholder="Quantity"
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  readOnly
                  placeholder="Price"
                  value={
                    productDetails?.price !== undefined
                      ? `$ ${Number(productDetails.price).toFixed(2)}`
                      : ""
                  }
                />
              </Form.Item>

              <Form.Item
                name="customerName"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input.TextArea placeholder="Address" rows={3} />
              </Form.Item>

              <Form.Item
                name="paymentMethod"
                rules={[{ required: true, message: "Select a payment method" }]}
              >
                <Select placeholder="Select Payment Method">
                  <Select.Option value="upi">UPI</Select.Option>
                  <Select.Option value="card">Credit/Debit Card</Select.Option>
                  <Select.Option value="cod">Cash on Delivery</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Place Order
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
