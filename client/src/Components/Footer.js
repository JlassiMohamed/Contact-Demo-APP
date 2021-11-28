import React from "react";

const Footer = () => {
  const style = {
    minHeight: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#608f9f",
    color: "white",
  };
  return (
    <div style={style}>
      <span>Mohamed JLASSI</span>
      <span>All rights reserved -Copyright- 2021</span>
    </div>
  );
};

export default Footer;
