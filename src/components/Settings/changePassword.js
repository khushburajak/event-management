import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const fileChangeHandler = (e) => {
    setEventImage(e.target.files[0]);
  };
  const [eventImage, setEventImage] = useState();

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const ChangePassword = async (e) => {
    try {
      e.preventDefault();
      // stop the form from reloading the page
      const data = {
     oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword:  confirmPassword,
      };
      console.log(data);
      await axios
        .post("http://localhost:5000/users/api/change-password", data, config)
        .then((res) => {
          if (res.data.success === true) {
            window.location.replace("/logout");
          }
        });
    } catch (err) {
      window.location.replace("/logout");
     
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGridContent">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter old password"
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridContent">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridLocation">
        <Form.Label>Conform Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" onClick={ChangePassword}>
        Change Passowrd
      </Button>
    </Form>
  );
}

export default ChangePassword;
