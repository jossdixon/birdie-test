const EventCard = ({ event }) => {

  const niceDate = (stamp) => {
    const date = new Date(stamp);
    console.log(date);
    return date.toDateString();
  }

  const titleText = (text) => {
    let str = text.toLowerCase().split('_');
    for (let i=0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  return(
    <div>
      <div className="main-card">
        <div className="card-head">
            <p>{titleText(event.event_type)}</p>
            <p>{niceDate(event.timestamp)}</p>
        </div>
          <strong>Caregiver ID:</strong><p>{event.caregiver_id}</p>
      </div>
    </div>
  )
}

export default EventCard;
