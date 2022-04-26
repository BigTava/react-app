import "./App.css";
import React from "react";
import image from "./image.png";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Coding For the {props.adjective} World</p>
      <img src={image} height={200} alt="random simpson" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish, i) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["carbonara", "Minestrone", "salmon", "godfish"];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObjects);
dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="BigTava World" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
