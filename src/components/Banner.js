import React from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
export default function Banner() {
  console.log("banner dc goi lan dau");
  const [images] = useFetchImage();

  return <div></div>;
}
