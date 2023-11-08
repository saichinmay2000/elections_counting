import { useEffect, useState } from "react";
import Header from "./components/header";
import VulnChart from "./components/resultChar";
import Router, { useRouter } from "next/router";
import VulnChartInvalid from "./components/resultChar-invalid";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [invalidCount, setInvalidCount] = useState(0);
  useEffect(() => {
    if (window.localStorage.getItem("csc_user") === null) {
      Router.push("/");
    } else {
      setUser(window.localStorage.getItem("csc_user"));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between p-5">
        <h1 className="font-bold">Hey {user} !</h1>
        <button
          onClick={() => {
            Router.push(`/recordEntry`);
          }}
          className=" text-white bg-slate-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Enter New Record
        </button>
      </div>
      <div className="p-5">
        <h1 className="font-bold">
          {" "}
          <span className="border-2 border-red-800 rounded-full p-1 pl-3 pr-3 text-xs animate-pulse">
            🔴 LIVE (Valid Votes)
          </span>
        </h1>
        <VulnChart />
        <h1 className="font-bold mt-5">
          {" "}
          <span className="border-2 border-red-800 rounded-full p-1 pl-3 pr-3 text-xs animate-pulse">
            🔴 LIVE (In-Valid Votes: {invalidCount} )
          </span>
        </h1>
        <VulnChartInvalid setInvalidCount={setInvalidCount} />
      </div>
    </>
  );
}
