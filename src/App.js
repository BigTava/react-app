import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Page404,
  Services,
  Location,
  CompanyHistory,
} from "./pages";

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!data) {
    return null;
  }

  if (data) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />} />
            <Route path="history" element={<CompanyHistory />} />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>

        <h1>{data.name}</h1>
        <p>{data.company}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }
}

export default App;
