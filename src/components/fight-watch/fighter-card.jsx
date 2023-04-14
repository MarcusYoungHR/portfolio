import {Form} from 'react-router-dom';

export default function FighterCard(props) {
  const { name, image, fight_date, next_opponent, id} = props

  let outputDate = fight_date;
  if (outputDate !== "TBD") {
    const dateObj = new Date(outputDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    outputDate = dateObj.toLocaleDateString('en-US', options);
  }



  return (
    <div className="col">
      <div className="card text-bg-dark fighter-card" id={`fighter-${id}`}>
        <img src={image} className="card-img-top fighter-image p-1 rounded" alt="..."></img>
        <div className="card-body d-flex flex-column py-1">
          <h5 className="card-title mx-auto">{name}</h5>
          <div className="card-text mx-auto">{`Fighting vs ${next_opponent}`}</div>
          <div className="card-text mx-auto">{`On ${outputDate}`}</div>
        </div>
        <div className="w-100 px-1 py-1">
          <Form 
            method="post"
            action={`/fight-watch/destroy/${id}`}
            >
          <button className="btn btn-outline-danger w-100"  type="submit">Remove</button>
          </Form>
        </div>
      </div>
    </div>
  )
}