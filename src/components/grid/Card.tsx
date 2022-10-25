import React, { useEffect, useState } from "react";
import { Card as CardType } from "../../redux/reducers/cardReducer";
import { useSearchImageQuery } from "../../redux/reducers/imageApi";

type Props = {
  data: CardType;
};

const Card = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);
  const { data, isLoading } = useSearchImageQuery(props.data.name);

  useEffect(() => {
    if (isLoading) return;

    setImage(data);
  }, [data, isLoading]);

  if (image == null) {
    return null;
  }

  return (
    <div key={props.data.id} className="bg-slate-600 rounded-md shadow-xl p-5">
      <img className="rounded-md" src={image} alt={props.data.name} />
      <h2 className="mt-3 font-semibold text-center">{props.data.name}</h2>
    </div>
  );
};

export default Card;
