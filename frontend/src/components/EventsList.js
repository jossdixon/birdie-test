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
        console.log(response.data.map(ev => {
          return JSON.parse(ev.payload)
        }));
        setEvents(response.data.map(ev => {
          return JSON.parse(ev.payload)
        }));
      })
      .catch(e => {
        console.log(e);
      })
  };

  const sortedEvents = (events) => {
    const sorted = events?.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    })
    return sorted;
  };

  return (
    <div className="cards-container">
      <div>
        {events && sortedEvents(events).map((ev) => (
          <div key={ev.id}>
            <EventCard event={ev}/>
          </div>
      ))}
      </div>
    </div>
)
}

export default EventsList;
