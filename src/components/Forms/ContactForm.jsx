import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import langData from "../../locales/langData.json";

function ContactForm({ language = "en" }) {
  const t = langData[language].contactform;

  return (
    <Container className={`contact-form py-5 ${language === "ar" ? "text-end" : ""}`}>
      <Form dir={language === "ar" ? "rtl" : "ltr"}>
        {/* Name */}
        <Form.Group className="mb-4">
          <Form.Label>{t.fullName}</Form.Label>
          <Form.Control type="text" placeholder={t.placeholderName} required />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-4">
          <Form.Label>{t.email}</Form.Label>
          <Form.Control type="email" placeholder={t.placeholderEmail} required />
        </Form.Group>

        {/* Phone */}
        <Form.Group className="mb-4">
          <Form.Label>{t.phone}</Form.Label>
          <Form.Control type="tel" placeholder={t.placeholderPhone} required />
        </Form.Group>

        {/* Message */}
        <Form.Group className="mb-4">
          <Form.Label>{t.message}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder={t.placeholderMessage}
            required
          />
        </Form.Group>

        <Button type="submit" className="w-100">
          {t.submit}
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
