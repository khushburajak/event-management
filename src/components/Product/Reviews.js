import { Avatar, IconButton } from "@material-ui/core";
import { Reply, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Reviews = (props) => {
    const { id } = useParams();


     const [isShown, setIsShown] = useState(false);
     const [show, setShow] = useState(false);

        const [reviews, setReviews] = useState("");

     const handleClick = (event) => {
       // 👇️ toggle shown state
       setIsShown((current) => !current);

       // 👇️ or simply set it to true
       // setIsShown(true);
     };
       const clickHandle = (events) => {
         // 👇️ toggle shown state
         setShow((current) => !current);

         // 👇️ or simply set it to true
         // setIsShown(true);
       };
       // counter to update the like count
    const [review, setReview] = useState("");
    const [events,setEvents] = useState([]);
    const [rating, setRating] = useState(0);
   
 const config = {
   headers: {
     Authorization: localStorage.getItem("token"),
   },
 };
    const handleSubmit = (e) => {
      e.preventDefault();
      const fromData = new FormData();
      fromData.append("comments", review);
      axios
        .put("http://localhost:5000/events/api/comment-event/"+id, fromData, config)
        .then((res) => {
          alert("You have successfully added a review");
        
        }).catch((err) => {
          console.log(err);
        });
    }

    useEffect(() => {
      axios
        .get("http://localhost:5000/events/api/get-single-event/" + id, config)
        .then((res) => {
          let program = res.data.event;
          setEvents(program);
        });
    }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Reviews:</h4>
              </div>
              // Added As Recommendation

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <Avatar
                                alt="Remy Sharp"
                                src={events.title}
                                className="avatar"
                            />
                        </div>
                        <div className="col-md-10">
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>{events.comment}</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>{events.comment}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>{events.createdAt}</p>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="justify-content-around">
                      <Avatar
                        alt="user"
                        src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                      />
                      <h5>John Doe</h5>
                      <p>This is Nice Event, I am attending too.</p>
                      <IconButton>
                        <ThumbUpAltOutlined />
                      </IconButton>
                      <IconButton>
                        <ThumbDownAltOutlined />
                      </IconButton>
                      <IconButton>
                        <Reply
                          style={{
                            color: "#00bcd4",
                            fontSize: "20px",
                          }}
                          onClick={handleClick}
                        />
                      </IconButton>
                      {isShown && (
                        <div>
                          <Form>
                            <Row className="mb-3">
                              <Form.Group as={Col} controlId="formGridDate">
                                <Form.Control
                                  type="text"
                                  placeholder="Enter your review"
                                  onChange={(e) => setReview(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridImage">
                                <Button type="submit" onClick={handleSubmit}>
                                  Sumbit
                                </Button>
                              </Form.Group>
                            </Row>
                          </Form>
                        </div>
                      )}
                      {show && review}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
