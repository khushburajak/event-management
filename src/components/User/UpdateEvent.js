import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

function UpdateEvent() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState();
  const [specialAppereance, setSpecialAppereance] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImage, setEventImage] = useState("");

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  // fetching Events data from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/events/api/get-single-event/"+id, config)
      .then((res) => {

        let program = res.data.event;
        setTitle(program.title);
        setCategory(program.category);
        setContent(program.content);
        setLocation(program.location);
        setSpecialAppereance(program.specialAppereance);
        setTicketPrice(program.ticketPrice);
        setEventDate(program.eventDate);
        setEventImage(program.eventImage);
      });
  }, []);

  const UpdateEvents = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      category: category,
      content: content,
      location: location,
      ticketPrice: ticketPrice,
      specialAppereance: specialAppereance,
      eventDate: eventDate,
      eventImage: eventImage,
    };
    console.log(data);

    axios
      .put("http://localhost:5000/events/api/update-event/"+id, data, config)
      .then((response) => {
        window.location.replace("/user");
        console.log(response.dataPost);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Form onSubmit={UpdateEvents}>
      <h1>Update Events</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridticketPrice">
          <Form.Label>Ticket Price</Form.Label>
          <Form.Control
            type="ticketPrice"
            placeholder="Enter Ticket Price"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridContent">
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="Describe the Event"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          placeholder="Softwarica College(Block E), DilliBazar, Kathmandu"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridSpecialAppereance">
          <Form.Label>Special Appereance</Form.Label>
          <Form.Control
            placeholder="Enter Special Guest"
            value={specialAppereance}
            onChange={(e) => setSpecialAppereance(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Choose...</option>
            <option>62b5f6d60cfddb3fccc5685f</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </Form.Group>
       
      </Row>
      <Button type="submit">Update Event</Button>
    </Form>
  );
}

export default UpdateEvent;
