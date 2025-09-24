import styles from "./Contact.module.css";
import { Button, Form, Input, Alert } from "antd";
import { useState } from "react";

const Contact = () => {
  const [form] = Form.useForm();
  const [success, setSuccess] = useState(false);

  const onFinish = (values) => {
    console.log(values);

    setSuccess(true);
    form.resetFields();

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className={`${styles.contact} section`}>
      <div className={styles.contactForm}>
        <div className={styles.contactDetails}>
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span>Ut elit tellus, luctus nec ullamcorper.</span>
          </p>
          <div className={styles.phone}>
            <i aria-hidden="true" className="fas fa-phone-alt"></i>
            <p>929-242-6868</p>
          </div>

          <div className={styles.email}>
            <i aria-hidden="true" className="fas fa-envelope"></i>
            <p>contact@info.com</p>
          </div>

          <div className={styles.location}>
            <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
            <p>123 Fifth Avenue, New York, NY 10160</p>
          </div>
        </div>

        <div className={styles.form}>
          <Form
            form={form} // bind form instance
            name="contact-form"
            onFinish={onFinish}
            layout="vertical"
            style={{ maxWidth: 600 }}
          >
            <div className={styles.names}>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: "First name is required!" }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Last name is required!" }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required!" },
                { type: "email", message: "Not a valid email!" },
              ]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Message cannot be empty!" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button type="default" htmlType="submit">
                send message
              </Button>
            </Form.Item>
          </Form>

          {success && (
            <div style={{ marginTop: "16px" }}>
              <Alert
                message="Thank you for reaching out. Our team will get back to you shortly."
                type="success"
                showIcon
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.googleMap}>
        <iframe
          src="https://www.google.com/maps?q=Riverside+Building,+County+Hall,+Westminster+Bridge+Rd,+London+SE1+7PB,+United+Kingdom&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;
