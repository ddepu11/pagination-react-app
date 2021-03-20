const Cards = ({ imageUrl, title, publishedAt, summary, newsSite }) => {
  publishedAt = new Date(publishedAt).toDateString();

  return (
    <div className="blog card">
      <img src={imageUrl} alt="" />
      <button className="btn">{newsSite}</button>
      <div className="details">
        <h2>{title}</h2>
        <p>{summary}</p>
        <span>{publishedAt}</span>
      </div>
    </div>
  );
};

export default Cards;
