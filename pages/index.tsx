import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { HERO_BACKGROUND_IMAGE, PROPERTYLISTINGSAMPLE } from "../constants";
import Pill from "../components/common/Pill";
import { Card } from "../components/common/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Pet Friendly",
    "Pool",
    "Mountain View",
    "Beachfront",
  ];

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <section
          className="relative w-full h-[400px] flex flex-col justify-center items-center text-center text-white px-4 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Content */}
          <div className={`relative z-10 flex flex-col items-center`}>
            <h1
              className={`text-4xl font-bold mb-4 drop-shadow-lg transition-opacity duration-1000 ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}>
              Find your favorite place here!
            </h1>
            <p className="text-xl drop-shadow-lg max-w-xl mb-6">
              The best prices for over 2 million properties worldwide
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition-colors"
              onClick={() => alert("Explore Now clicked!")}>
              Explore Now
            </button>
          </div>
        </section>
        <section className="filter-section flex gap-2 flex-wrap mb-6">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilters.includes(filter)}
              onClick={() => toggleFilter(filter)}
            />
          ))}
        </section>
        <section className="listing-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {PROPERTYLISTINGSAMPLE.map(({ image, name, price, rating }) => (
            <Card
              key={name}
              image={image}
              name={name}
              price={price}
              rating={rating}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
