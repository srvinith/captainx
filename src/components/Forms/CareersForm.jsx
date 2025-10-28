import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";

function CareerForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];
    if (uploaded && uploaded.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }
    setFile(uploaded);
  };

  return (
    <Container className="career-form py-5">
      <Form>
        {/* Name */}
        <Form.Group className="mb-4">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        {/* Phone */}
        <Form.Group className="mb-4">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" required />
        </Form.Group>

        {/* Resume Upload */}
        <Form.Group className="mb-4">
          <Form.Label>Upload Resume</Form.Label>
          <div className="upload-box">
            <input
              type="file"
              accept=".pdf, .jpeg, .jpg"
              onChange={handleFileChange}
              className="file-input"
              id="resumeUpload"
            />
            <label htmlFor="resumeUpload" className="upload-label">
              <FaCloudUploadAlt size={40} color="#683FEA" />
              <p>
                <strong>Drag & drop your files</strong> or click to upload
              </p>
              <small>Supports PDF, JPEG (Max 5MB)</small>
              {file && <div className="mt-2 text-success">{file.name}</div>}
            </label>
          </div>
        </Form.Group>

        <Button type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CareerForm;
