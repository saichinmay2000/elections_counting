import { useRouter } from "next/router";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function LoginPage({ isUserLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [UserType, SetUserType] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password, type: UserType }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      var isUserLoggedIn = true;
      console.log(isUserLoggedIn);
      localStorage.setItem("csc_user", username);
      localStorage.setItem("csc_user_type", UserType);
      router.push(`/dashboard`);
    } else {
      var isUserLoggedIn = false;
      const data = await response.json();
      alert(data.error);
      console.error("Login error:", data.error);
    }
  };

  return (
    <div
      className={`${inter.className} min-h-[100vh] w-full flex items-center justify-center bg-gray-50`}
    >
      {UserType === "" && (
        <div className="flex flex-col gap-5">
          <p
            className="border-2 border-black rounded p-2 pl-4 pr-4 text-center hover:bg-black hover:text-white cursor-pointer"
            onClick={() => SetUserType("President")}
          >
            PRESIDENT ELECTIONS LOGIN
          </p>
          <p
            className="border-2 border-black rounded p-2 pl-4 pr-4 text-center hover:bg-black hover:text-white cursor-pointer"
            onClick={() => SetUserType("Committee")}
          >
            COMMITTEE ELECTIONS LOGIN
          </p>
        </div>
      )}
      {UserType != "" && (
        <section className=" w-full h-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Image
              className="p-4"
              src={require("public/club_logo.png")}
              alt="Your Company"
              width={420}
            />
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {UserType} Elections
                  <br />
                  Sign in to your account
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <button
                    onClick={() => handleLogin()}
                    className="w-full flex items-center justify-center text-white bg-slate-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading ? (
                      <svg
                        classNameName="animate-spin -ml-1 mr-3 h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          classNameName="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokwidth="4"
                        ></circle>
                        prs
                        <path
                          classNameName="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <></>
                    )}
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
