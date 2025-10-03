import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HelpersList.css"; // Ensure this file exists
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import PersonPinCircleTwoToneIcon from "@mui/icons-material/PersonPinCircleTwoTone";

const HelpersList = () => {
  const [helpers, setHelpers] = useState([]);
  const [newHelper, setNewHelper] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Fetch Helpers from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/helpers") // ✅ Correct API endpoint
      .then((response) => setHelpers(response.data))
      .catch((error) => console.error("❌ Error fetching helpers:", error));
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setNewHelper({ ...newHelper, [e.target.name]: e.target.value });
  };

  // Submit New Helper
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/helpers",
        newHelper
      );
      setHelpers([...helpers, response.data.newHelper]);
      setNewHelper({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      console.error("❌ Error adding helper:", error);
    }
  };

  // ✅ DELETE Helper
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/helpers/${id}`); // Send DELETE request
      setHelpers(helpers.filter((helper) => helper._id !== id)); // Remove from state
    } catch (error) {
      console.error("❌ Error deleting helper:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Top Registered Helpers</h2>

      {/* ✅ Add Helper Form */}
      <Form
        onSubmit={handleSubmit}
        className="mb-4 p-3 shadow rounded bg-light"
      >
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              name="name"
              placeholder="Helper's Name"
              value={newHelper.name}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={newHelper.email}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={newHelper.phone}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="address"
              placeholder="Address"
              value={newHelper.address}
              onChange={handleChange}
              required
            />
          </Col>
          <Col>
          <Button type="submit" className="helperbtn" variant="none">
  Add Helper
</Button>

          </Col>
        </Row>
      </Form>

      {/* ✅ List of Helpers */}
      <Row className="g-4">
        {helpers.length > 0 ? (
          helpers.slice(0, 50).map((helper) => (
            <Col key={helper._id} md={6} lg={4}>
              <Card className="shadow-sm border-0 rounded">
                <Card.Body>
                  <Card.Title className="fw-bold">{helper.name}</Card.Title>
                  <Card.Text>
                    <strong>
                      <MailOutlineTwoToneIcon /> Email:
                    </strong>{" "}
                    {helper.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>
                      <PhoneInTalkTwoToneIcon /> Phone:
                    </strong>{" "}
                    {helper.phone}
                  </Card.Text>
                  <Card.Text>
                    <strong>
                      <PersonPinCircleTwoToneIcon /> Address:
                    </strong>{" "}
                    {helper.address}
                  </Card.Text>

                  {/* ✅ Delete Button */}
                  <Button
                    onClick={() => handleDelete(helper._id)}
                    className=" delete mt-2"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No helpers registered yet.</p>
        )}
      </Row>
    </Container>
  );
};

export default HelpersList;
