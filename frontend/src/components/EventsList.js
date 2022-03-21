import axios from 'axios';
import { useState, useEffect } from "react";
import EventCard from "./EventCard";

const EventsList = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    axios.get('http://localhost:8080/api/events')
      .then(response => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  };

  return (
    <div className="cards-container">
      <div>
        {events && events.map((ev) => (
          <div key={ev.id}>
            <EventCard event={ev}/>
          </div>
      ))}
      </div>
    </div>
)
}

export default EventsList;
