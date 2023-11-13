import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { plugins } from "@/postcss.config";

const VulnChartInvalid = ({ setInvalidCount }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const userType = window.localStorage.getItem("csc_user_type");
    const apiUrl = "/api/getElecData?invalid=true&userType=" + userType;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data["array"]);
        setInvalidCount(data["invalidCount"]);
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  }, []);

  return <></>;
};
export default VulnChartInvalid;
