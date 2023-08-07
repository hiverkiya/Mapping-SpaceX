import Head from "next/head";
import Map from "./map/page";

export default function Home() {
  const markers = [
    {
      long: 51.505,
      lat: -0.09,
      popupText: "Good popup",
    },
    {
      long: 52.505,
      lat: -0.09,
      popupText: "Better popup",
    },
  ];

  return (
    <div>
      <div> Home page</div>
      <Map markers={markers} />
    </div>
  );
}
