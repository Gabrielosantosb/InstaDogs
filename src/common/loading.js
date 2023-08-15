import React from "react";
import { ReactComponent as LoadingSVG } from "../assets/carregando.svg";

export const Loading = () => {
  return (
    <section
      className="animeLeft"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <LoadingSVG />
    </section>
  );
};
