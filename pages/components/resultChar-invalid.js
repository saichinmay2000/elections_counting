import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { plugins } from "@/postcss.config";

const VulnChartInvalid = ({setInvalidCount}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = "/api/getElecData?invalid=true";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data['array']);
        setInvalidCount(data['invalidCount'])
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  }, []);

  return (
    <div>
      
    </div>
  );
};
export default VulnChartInvalid;
