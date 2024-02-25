import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

function UpdateProfile() {
  const { id } = useParams();

  const [facebook,setFacebook] = useState("");
  const [github,setGithub] = useState("");
  const [linkedIn,setLinkedIn] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  // fetching Events data from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/profiles/api/my-profile", config)
      .then((res) => {
        console.log(res.data.profiles);
        let program = res.data.profiles;
        setFacebook(program[0].facebook);
        setGithub(program[0].github);
        setLinkedIn(program[0].linkedin);
        setProfileImage(program.profileImage);
      });
  }, []);

  const UpdateProfiles = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("facebook", facebook);
    // formData.append("github", github);
    // formData.append("linkedin", linkedIn);
    // formData.append("avatar", profileImage);
    // console.log(formData);

    const data = {
      facebook: facebook,
      github: github,
      linkedin: linkedIn,
      // avatar: profileImage,
    };

    axios
      .put("http://localhost:5000/profiles/api/update-profile", data, config)
      .then((response) => {
        window.location.replace("/profile");
        console.log(response.dataPost);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Form onSubmit={UpdateProfiles}>
      <h1>Update Profile</h1>
      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridGithub">
          <Form.Label>GitHub Link</Form.Label>
          <Form.Control
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>FaceBook</Form.Label>
          <Form.Control
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Event Image</Form.Label>

          <Form.Control
            type="file"
            accept="image/*"
            name="filename"
            onChange={(e) => {
              setProfileImage(e.target.files[0]);
            }}
          />
        </Form.Group>
      </Row>
      <Button type="submit">Update Profile</Button>
    </Form>
  );
}

export default UpdateProfile;
