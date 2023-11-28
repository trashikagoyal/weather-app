import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between
       text-white">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="text-sm">{item.title}</p>
            <img
              className="w-10 h-10"
              src={iconUrlFromCode(item.icon)}
              alt={item.description}
            />
            <p className="text-sm">{item.temp.toFixed()}&deg;</p>

          </div>
        ))}
      </div>
    </div>
  );
}
export default Forecast;