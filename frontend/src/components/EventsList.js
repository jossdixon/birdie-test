import axios from 'axios';
import { useState, useEffect } from "react";
// import EventDataService from '../services/EventService.js'

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
  <div>
    {events && events.map((event) => (
      <div key={event.id}>
        <p>{event.event_type}</p>
      </div>
    ))}
  </div>
)
}

export default EventsList;
