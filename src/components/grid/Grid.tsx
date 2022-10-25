import React from "react";
import { selectCards } from "../../redux/reducers/cardReducer";
import { setPopup } from "../../redux/reducers/popupReducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Card from "./Card";

const Grid = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectCards);

  return (
    <div className="container">
      <div className="flex justify-end py-10">
        <button
          onClick={() => {
            dispatch(setPopup(true));
          }}
          className="bg-cyan-500 hover:bg-cyan-600 transition
                           px-5 py-2 rounded-full shadow-xl
                          flex items-center gap-x-3 justify-between"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Nieuw kaartje
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10 pb-10">
        {cards.map((card) => (
          <Card data={card} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
