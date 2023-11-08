import { useEffect, useState } from "react";
import Header from "./components/header";
import Router from "next/router";

export default function RecordEntry() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const [seven, setSeven] = useState(0);
  const [eight, setEight] = useState(0);
  const [nine, setNine] = useState(0);
  const [ten, setTen] = useState(0);
  const [eleven, setEleven] = useState(0);
  const [twelve, setTwelve] = useState(0);

  const [user, setUser] = useState("");
  const [CurrentCount, setCurrentCount] = useState(0);
  useEffect(() => {
    if (window.localStorage.getItem("csc_user") === null) {
      Router.push("/");
    } else {
      setUser(window.localStorage.getItem("csc_user"));
      fetch(
        "/api/insertRecord?user=" + window.localStorage.getItem("csc_user")
      ).then(async (res) => {
        setCurrentCount(Object.values(await res.json())[0]);
      });
    }
  }, []);

  const sendData = async () => {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        one: one,
        two: two,
        three: three,
        four: four,
        five: five,
        six: six,
        seven: seven,
        eight: eight,
        nine: nine,
        ten: ten,
        eleven: eleven,
        twelve: twelve,
        username: user,
      }),
    };
    const res = await fetch(`/api/insertRecord`, postData);
    Router.reload();
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="font-bold text-lg">Please enter the below fields...</h1>
        <h1 className="font-bold  mt-8">Hey {user} !</h1>
        <h2 className="font-bold text-base">
          Current Entry Number - {CurrentCount + 1}
        </h2>
        <div className="flex flex-row p-10 justify-between">
          <div>
            <label
              for="inputone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              1
            </label>
            <input
              type="number"
              id="inputone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setOne(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              for="inputtwo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              2
            </label>
            <input
              type="number"
              id="inputtwo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setTwo(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputthree"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              3
            </label>
            <input
              type="number"
              id="inputthree"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setThree(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputfour"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              4
            </label>
            <input
              type="number"
              id="inputfour"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setFour(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputfive"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              5
            </label>
            <input
              type="number"
              id="inputfive"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setFive(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputsix"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              6
            </label>
            <input
              type="number"
              id="inputsix"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setSix(e.target.value)}
            />
          </div>
        </div>
        {/* New Row Starts */}
        <div className="flex flex-row p-10 justify-between">
          <div>
            <label
              for="inputseven"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              7
            </label>
            <input
              type="number"
              id="inputseven"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setSeven(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputeight"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              8
            </label>
            <input
              type="number"
              id="inputeight"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setEight(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputnine"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              9
            </label>
            <input
              type="number"
              id="inputnine"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setNine(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputten"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              10
            </label>
            <input
              type="number"
              id="inputten"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputeleven"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              11
            </label>
            <input
              type="number"
              id="inputeleven"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setEleven(e.target.value)}
            />
          </div>
          <div>
            <label
              for="inputtwelve"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              12
            </label>
            <input
              type="number"
              id="inputtwelve"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Number"
              onChange={(e) => setTwelve(e.target.value)}
            />
          </div>
        </div>
        <div className="ml-10">
          <button
            onClick={() => sendData()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
