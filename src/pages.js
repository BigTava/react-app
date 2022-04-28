import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About Website]</h1>
      <Outlet></Outlet>
      <nav>
        <Link to="/">About</Link>
      </nav>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Our company history</h2>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our location</h2>
    </div>
  );
}

export function Page404() {
  let location = useLocation();
  return (
    <div>
      <h1>This page {location.pathname} does not exist!</h1>
    </div>
  );
}
