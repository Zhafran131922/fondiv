"use client";

import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/aboutus';
import Service from './components/service';
import Choose from './components/choose';
import Contact from './components/contact';
import Footer from './components/footer';
export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Service />
      <Choose />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
