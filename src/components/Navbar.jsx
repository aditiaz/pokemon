import React from "react";
import pokeBall from "../assets/pokeBall.ico";
import pieChart from "../assets/pieChart.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="border p-1 border-white mb-5">
      <div className="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex gap-9 cursor-pointer ">
            <img
              onClick={() => navigate("/")}
              src={pokeBall}
              alt="pokeball"
              className="h-10 w-10 mt-2 mr-2"
            />
            <img
              onClick={() => navigate("/Chart/")}
              src={pieChart}
              alt="pokeball"
              className="h-10 w-10 mt-2 mr-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
