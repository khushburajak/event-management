import { IconButton } from "@material-ui/core";
import { ThumbUpAltOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";

const DetailsPage = () => {
  const { id } = useParams();
  const [events, setEvents] = useState([]);

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/events/api/get-single-event/" + id, config)
      .then((res) => {
        let program = res.data.event;
        setEvents(program);
      });
  }, []);

  const BookEvent = (_id) => {
    const fromData = new FormData();
    fromData.append("_id", _id);
    axios
      .put("http://localhost:5000/events/api/attend-event", fromData, config)
      .then((res) => {
        alert("You have successfully booked the event");
      })
      .catch((err) => {
        console.log(err);
      });

  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>{events.title}</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={events.eventImage}
                      alt={events.slug}
                      className="img-thumbnail"
                    />
                  </div>
                  {/* <div>
                    <div className="col-md-1">
                    </div>
                  </div> */}
                  <div className="col-md-7 ms-auto">
                    <p>
                      <h2>
                        <strong>{events.title}</strong>
                      </h2>
                    </p>
                    <p>
                      <h5>
                        <strong>{events.content}</strong>
                      </h5>
                    </p>
                    <p>
                      <h6>
                        Date: <strong>{events.eventDate}</strong>
                      </h6>
                    </p>

                    <p>
                      <h6>
                        Location: <strong>{events.location}</strong>
                      </h6>
                    </p>
                    <p>
                      <h6>
                        Rs. <strong>{events.ticketPrice}</strong>
                      </h6>
                    </p>
                    <p>
                      <h6>
                        <strong>{events.specialAppreance}</strong>
                      </h6>
                    </p>
                    <div className="d-flex">
                      <IconButton>
                        <ThumbUpAltOutlined  />
                        <center>
                          <h3 id="counter-label">0</h3>
                        </center>
                      </IconButton>
                      <Button
                        className="ms-auto m-2"
                        onClick={() => BookEvent(events._id)}
                      >
                        Buy Tickets
                      </Button>
                      <Button
                        className="m-2"
                        onClick={() => {
                          window.location.replace("/product");
                        }}
                      >
                        Cancle
                      </Button>
                    </div>
                  </div>

                  <Reviews 
                  key={events._id}
                  props={events}
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
