import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  const [offset, setOffest] = useState(0);
  const [poke, setPoke] = useState();
  let { data: pokemons } = useQuery("pokeCache", async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
    );
    return response.data.results;
  });
  console.log(pokemons);
  const img =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-2 lg:grid-cols-5 gap-3 m-auto mt-1  w-[90%]">
        {pokemons?.map((e) => (
          <div
            onClick={() => navigate(`/Detail/${e.name}`)}
            key={e.name}
            className=" text-black p-2  h-78  bg-[#aeac24] text-center"
          >
            <img
              src={`${img}${e.url.split("/").filter(Boolean).pop()}.svg`}
              className="h-[85%] mb-3"
              alt="/"
            />
            <p>{e.name}</p>
          </div>
        ))}
      </div>
      <div className="fixed bottom-5   w-[20%] flex justify-center ">
        <div className="flex w-[40%] md:w-[10%] justify-around ">
          {offset == 0 ? (
            <></>
          ) : (
            <button onClick={() => setOffest(offset - 10)}>
              <IoArrowBackCircleOutline color="yellow" size={50} />
            </button>
          )}
          <button onClick={() => setOffest(offset + 10)}>
            <IoArrowForwardCircleOutline color="yellow" size={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
