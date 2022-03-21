const EventCard = ({ event }) => {

  const niceDate = (stamp) => {
    const date = new Date(stamp);
    return date.toDateString();
  }

  const titleText = (text) => {
    let str = text.toLowerCase().split('_');
    for (let i=0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  const entries = Object.entries(event).filter(e => !e.includes('id') && !e.includes('timestamp'));
  console.log(entries);

  // const headers = Object.keys(event).filter(e => !e.includes('id') && !e.includes('timestamp'));

  // const vals = event.map((e) => {
  //   return headers.map(i => e[i]);
  // })

  return(
    <div>
      <div className="main-card">
        <div className="card-head">
            <p>{titleText(event.event_type)}</p>
            <p>{niceDate(event.timestamp)}</p>
        </div>
        <div className="card-body">
        </div>
      </div>
    </div>
  )
}

export default EventCard;
