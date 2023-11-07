const Card = ({name, click}) => { 
  return (
  <div className="card">
     <button className="close" onClick={click}>close</button>
    <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} />

  
    <h2>{name}</h2> 
    <div className="counts">
    <button><span className="material-symbols-outlined thumb">thumb_up</span></button>
    <span id="favorite" className="material-symbols-outlined">favorite</span>
    <p id="amount">0</p>
    <button><span className="material-symbols-outlined">thumb_down</span></button>
    </div>
    
  </div>
  );
};

export default Card;


