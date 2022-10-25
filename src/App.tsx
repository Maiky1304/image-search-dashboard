import React, { useState } from "react";
import Grid from "./components/grid/Grid";
import Header from "./components/Header";
import Popup from "./components/Popup";
import { selectPopup } from "./redux/reducers/popupReducer";
import { useAppSelector } from "./redux/store";

function App() {
  const popupVisible = useAppSelector(selectPopup);

  return (
    <>
      <Header />
      <Grid />

      {popupVisible && <Popup />}
    </>
  );
}

export default App;
