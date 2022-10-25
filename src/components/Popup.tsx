import React, { FormEvent, useRef } from "react";
import { addCard } from "../redux/reducers/cardReducer";
import { setPopup } from "../redux/reducers/popupReducer";
import { useAppDispatch } from "../redux/store";

type Props = {};

const Popup = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const submit = (event: FormEvent) => {
    event.preventDefault();

    const input = ref.current?.value;

    if (!input) {
      return;
    }

    const card = {
      id: undefined,
      name: input,
    };

    dispatch(addCard(card));
    dispatch(setPopup(false));
  };

  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-80
                    flex justify-center items-center"
    >
      <form
        onSubmit={submit}
        className="bg-slate-600 p-10 rounded-xl relative z-30"
      >
        <button
          onClick={() => dispatch(setPopup(false))}
          className="absolute top-5 right-5 text-red-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold">Geef dit kaartje een naam:</h2>
        <div className="flex justify-center items-center mt-3 gap-x-5">
          <input
            ref={ref}
            type="text"
            className="py-2 text-slate-200 bg-transparent border-b
                       text-xl
                       outline-none"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition
                       px-5 py-2 rounded-full shadow-xl"
          >
            Toevoegen
          </button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
