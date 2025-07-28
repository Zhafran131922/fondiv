'use client';
import Navbar from "../components/navbar";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="text-gray-600">Web Developer | UI Designer</p>
      </section>

   
    </div>
  );
}
