import { Box, styled } from "@material-ui/core";
import { EventSeatOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

// etc
import {
  AiFillApple,
  AiFillBug,
  AiFillWindows
} from "react-icons/ai";
import InfoCard from "./InfoCard";

// info card item list





const ContainerStyle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7.5),
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
}));

const InfoCards = () => {

  // info card item list
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [attendeeEvent, setAttendeeEvent] = useState([]);
  const [userevent, setUserEvent] = useState([]);
// JWT Token from Local Storage
  const config = {
    headers: {
      Authorization:localStorage.getItem("token"),
    },
  };
  // fetching Events data from API
  useEffect(() => {
    axios.get("http://localhost:5000/events/api/get-event")
      .then((res) => {
        let program = res.data.events;
        setEvents(program);
      });
  }, []);
 
  // Fetching Categories data from API
  useEffect(() => {
    axios.get("http://localhost:5000/categories/api/categories").then((res) => {
      let programCategory = res.data.categories;
      setCategories(programCategory);
    });
  }, []);
 
  // Fetching User Purchased Data From API
  useEffect(() => {
    axios
      .get("http://localhost:5000/events/api/get-attendee-event", config)
      .then((res) => {
        let purchaseevents = res.data.events;
        setAttendeeEvent(purchaseevents);
      });
  }, []);
  

   // Fetching Event by User/Organizer
   
   useEffect(() => {
     axios
       .get("http://localhost:5000/events/api/get-userevent", config)
       .then((res) => {
         let userevents = res.data.events;
         setUserEvent(userevents);
       });
   }, []);
 
  
  

const items = [
  {
    id: "green",
    icon: <EventSeatOutlined />,
    count: [events.length],
    title: "Total Events",
  },
  {
    id: "blue",
    icon: <AiFillApple />,
    count: [categories.length],
    title: "Categories",
  },
  {
    id: "yellow",
    icon: <AiFillWindows />,
    count: [attendeeEvent.length],
    title: "My Purchased Events",
  },
  { id: "maroon", icon: <AiFillBug />, count: [userevent.length], title: "My Events" },
];
  
  return (
    <ContainerStyle>
      {items.map((el) => (
        <InfoCard
          key={el.id}
          colorId={el.id}
          icon={el.icon}
          amount={el.count}
          title={el.title}
        />
      ))}
    </ContainerStyle>
  );
};

export default InfoCards;
