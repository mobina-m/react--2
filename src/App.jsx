import React from "react";
import Alert from "../alert-component/alert";
import Card from "../building-a-layout/Card";
import RenderList from "../maping-array-objects-to-li/RenderList";
import ShowPlanets from "../maping-array-of-objects-to-li/ShowPlanets";
import CustomerInformation from "../rendering-from-objects/CustomerInformation";
// ================================
const data = {
  image: "/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
  cardTitle: "Bob Dylan",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};
// =================
const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephant" },
  { label: "Monkey" },
];
// ];===============
const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
// ];===============

function App() {
  return (
    <div>
      <Alert text="OMG! Something really bad has happened!" />
      {/* // ===========building-a-layout====================== */}
      <hr />
      <Card
        image={data.image}
        cardTitle={data.cardTitle}
        cardDescription={data.cardDescription}
        button={data.button}
      />
      {/* // ===========maping-array-objects-to-li====================== */}
      <hr />
      <RenderList animals={animals} />
      {/* // ===========maping-array-objects-to-li====================== */}
      <hr />
      <ShowPlanets planets={planets} />
      {/* // ===============rendering-from-objects====================== */}
      <hr />
      <CustomerInformation />
      {/* // ===========props-component-architecture====================== */}
      <hr />
      <Pokedex />
    </div>
  );
}

export default App;
