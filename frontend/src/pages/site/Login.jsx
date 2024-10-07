import React, { useState, useEffect } from "react";
import Left from "../../components/site/login/left";
import Right from "../../components/site/login/right";
import HashLoader from "react-spinners/HashLoader";

function LoginPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`flex justify-center items-center w-full h-screen overflow-y-hidden ${
          loading ? "" : "hidden"
        }`}
      >
        <HashLoader color="#ffffff" size={100} />
      </div>
      <div className={`${loading ? "hidden" : ""}`}>
        <div className="flex md:justify-center mx-auto h-screen bg-white md:flex-row flex-col">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
