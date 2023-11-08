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
      <Bar
        data={{
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
          ],
          datasets: [
            {
              label: "Number of In-Valid Votes",
              data: data,
              borderWidth: 2,
              backgroundColor:["red"]
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
export default VulnChartInvalid;
