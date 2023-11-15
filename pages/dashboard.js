import { useEffect, useState } from "react";
import Header from "./components/header";
import VulnChart from "./components/resultChar";
import Router, { useRouter } from "next/router";
import VulnChartInvalid from "./components/resultChar-invalid";
import Image from "next/image";
import Footer from "./components/footer";

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");
  const [invalidCount, setInvalidCount] = useState(0);
  const [validCount, setValidCount] = useState(0);
  useEffect(() => {
    if (
      window.localStorage.getItem("csc_user") === null &&
      window.localStorage.getItem("csc_user_type") === null
    ) {
      Router.push("/");
    } else {
      setUser(window.localStorage.getItem("csc_user"));
      setUserType(window.localStorage.getItem("csc_user_type"));
    }
  }, []);
  useEffect(() => {
    setInterval(function () {
      Router.reload();
    }, 30000);
  });
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between p-5">
        <h1 className="font-bold flex items-center gap-2">
          Hey {user} !{" "}
          <span className="font-bold">
            <span className="border-2 border-red-800 rounded-full p-1 pl-3 pr-3 text-xs animate-pulse">
              🔴 LIVE
            </span>
          </span>
        </h1>
        {user !== "viewer" && (
          <button
            onClick={() => {
              Router.push(`/recordEntry`);
            }}
            className=" text-white bg-slate-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Enter New Record
          </button>
        )}
      </div>
      <div className="p-5 -mt-10">
        <h1 className="font-bold mt-1">
          Number of Invalid Votes: {invalidCount}
        </h1>
        <h1 className="font-bold">Number of Valid Votes: {validCount}</h1>
        <VulnChart setValidCount={setValidCount} />
        <VulnChartInvalid setInvalidCount={setInvalidCount} />

        <div className="w-fit">
          {userType === "Committee" ? (
            <Image
              className="p-4"
              src={require("public/list2.jpg")}
              alt="Your Company"
            />
          ) : (
            userType === "President" && (
              <Image
                className="p-4"
                src={require("public/list2.jpeg")}
                alt="Your Company"
              />
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
