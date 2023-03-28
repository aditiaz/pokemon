import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useQuery } from "react-query";
import "./App.css";
import Cards from "../components/Cards";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  // const [offset, setOffest] = useState(0);
  // const [poke, setPoke] = useState();
  // let { data: pokemons } = useQuery("pokeCache", async () => {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
  //   );
  //   return response.data.results;
  // });
  // console.log(pokemons);

  return (
    // <div className="flex justify-center">
    //   <div className=" grid grid-cols-2 lg:grid-cols-5 gap-3 m-auto mt-20  mb-5 w-[90%]">
    //     {pokemons?.map((e) => (
    //       <div key={e.name} className=" text-black p-2  h-80  bg-[#aeac24] text-center">
    //         <img
    //           src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e.url
    //             .split("/")
    //             .filter(Boolean)
    //             .pop()}.svg`}
    //           className="h-[85%] mb-3"
    //           alt="/"
    //         />
    //         <p>{e.name}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="fixed bottom-6   w-[20%] flex justify-center ">
    //     <div className="flex w-[40%] md:w-[10%] justify-around ">
    //       {offset == 0 ? (
    //         <></>
    //       ) : (
    //         <button onClick={() => setOffest(offset - 10)}>
    //           <IoArrowBackCircleOutline color="yellow" size={50} />
    //         </button>
    //       )}
    //       <button onClick={() => setOffest(offset + 10)}>
    //         <IoArrowForwardCircleOutline color="yellow" size={50} />
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Cards />
  );
}

export default App;
