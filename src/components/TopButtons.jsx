import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Mathura",
    },
    {
      id: 2,
      title: "Agra",
    },
    {
      id: 3,
      title: "Basti",
    },
    {
      id: 4,
      title: "Sisauli",
    },
    {
      id: 5,
      title: "Ghaziabad",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 transition ease-out hover:scale-125">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
