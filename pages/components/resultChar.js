import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { plugins } from "@/postcss.config";

const VulnChart = ({ setValidCount }) => {
  const [data, setData] = useState(null);
  const [UserType, setUserType] = useState("");

  useEffect(() => {
    const userType = window.localStorage.getItem("csc_user_type");
    setUserType(window.localStorage.getItem("csc_user_type"));
    const apiUrl = "/api/getElecData?valid=true&userType=" + userType;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data["array"]);
        setValidCount(data["validCount"]);
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  }, [setValidCount]);

  return (
    <div>
      <Bar
        data={{
          labels:
            UserType === "Committee"
              ? [
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
                ]
              : ["1", "2"],
          datasets: [
            {
              label: UserType + " Voting Count",
              data: data,
              borderWidth: 2,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
export default VulnChart;
