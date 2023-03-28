import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Chart = () => {
  let { data: chart } = useQuery("chartCache", async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/berry/2`);
    return response.data;
  });
  console.log(chart);
  // const firmnessData = chart.firmness.map((firmness) => ({
  //   name: firmness.name,
  //   value: firmness.potency,
  // }));
  // const flavorsData = chart.flavors.map((flavor) => ({
  //   name: flavor.flavor.name,
  //   value: flavor.potency,
  // }));

  return (
    <div>
      <div style={{ textAlign: "center" }}>Pie Chart of Firmness</div>
      {/* <Pie
        style={{ height: "500px", marginTop: "50px" }}
        data={firmnessData}
        innerRadius={60}
        labelLine={false}
        legend={{
          position: "right",
          offset: 0,
          itemWidth: 10,
          itemHeight: 10,
        }}
      /> */}

      <div style={{ textAlign: "center", marginTop: "100px" }}>Bar Chart of Flavors</div>
      <Bar
        style={{ height: "500px", marginTop: "50px" }}
        data={flavorsData}
        xField="name"
        yField="value"
        xAxis={{ label: { autoRotate: false } }}
        yAxis={{ label: { formatter: (value) => `${value}g` } }}
        legend={{
          position: "top",
          offsetY: -10,
        }}
      />
    </div>
  );
};

export default Chart;
