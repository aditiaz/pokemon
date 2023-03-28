import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  let { data: pokemon } = useQuery("pokeDetailCache", async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  });
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { name, stats, sprites } = pokemon;

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 ">
      <img src={sprites.front_default} alt={name} className="w-64 h-48 mx-auto " />
      <h1 className="text-3xl font-bold uppercase">{name}</h1>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {stats.map((stat) => (
          <div
            key={stat.stat.name}
            className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4"
          >
            <span className="font-bold text-lg ">{stat.stat.name.toUpperCase()}</span>
            <span className="text-xl">{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
