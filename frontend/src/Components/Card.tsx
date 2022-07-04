import CardProps from "../Models/CardModel";

const Card = (props: CardProps) => {
  return (
    <div>
      <h1>
        {props.value} {props.suit}
      </h1>
    </div>
  );
};

export default Card;
