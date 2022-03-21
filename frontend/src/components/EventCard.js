const EventCard = ({ event }) => {

  const niceDate = (stamp) => {
    const date = new Date(stamp);
    console.log(date);
    return date.toDateString();
  }

  const niceText = (text) => {
    return text.split('_').join(" ");
  }

  return(
    <div>
      <div className="main-card">
        <div className="card-head">
            <p>{niceText(event.event_type)}</p>
            <p>{niceDate(event.timestamp)}</p>
        </div>
          <strong>Caregiver ID:</strong><p>{event.caregiver_id}</p>
      </div>
    </div>
  )
}

export default EventCard;
