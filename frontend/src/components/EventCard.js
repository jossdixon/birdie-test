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

  const keys = Object.keys(event).filter((e) => {
    // Filter out anything that is an id, is not a string or number
    return !e.includes('_id')
    // && !e.includes('timestamp')
    && !e.includes('type')
    && typeof event[e] === 'string'
  });
  console.log(keys);

  return(
    <div>
      <div className="main-card">
        <div className="card-head">
            <p>{titleText(event.event_type)}</p>
            <p>{niceDate(event.timestamp)}</p>
        </div>
        <div className="card-body">
          <div className="row justify-content-space-between">
            {keys.map((k, i) => (
              <div key={i} className="col-sm">
                <strong><p>{titleText(k)}</p></strong>
              </div>
            ))}
          </div>
          <div className="row">
            {keys.map((v, i) => (
              <div key={i} className="col-sm">
                <p>{titleText(event[v])}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard;
