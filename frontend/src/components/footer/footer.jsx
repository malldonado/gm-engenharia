import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../images/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user-update");
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full mt-[100px] md:mt-[150px] h-full">
      <div className="md:flex block w-full text-center md:text-left md:justify-center md:items-center h-full">
        <div className="items-center md:w-[30%] flex justify-center mb-[30px] w-full">
          <ul className="text-white">
            <li className="md:mb-12 mb-10 mt-12">
              <Link to="/">
                <img
                  className="md:h-[36px] h-[30px] mx-auto md:m-0 cursor-pointer"
                  src={Logo}
                  alt=""
                />
              </Link>
            </li>
            <li className="mb-3 cursor-pointer block">
              {formData.streetAddress}
            </li>
            <li className="mb-3 cursor-pointer block">
              CEP: {formData.cep} - {formData.city}/{formData.region}
            </li>
            <li className="flex md:justify-start justify-center gap-3 mt-4">
              <a
                href={formData.facebook}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="fill-white hover:fill-[#af9155]" />
              </a>
              <a
                href={formData.instagram}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill className="fill-white hover:fill-[#af9155]" />
              </a>
              <a
                href={formData.twitter}
                className="text-[26px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter className="fill-white hover:fill-[#af9155]" />
              </a>
            </li>
          </ul>
        </div>
        <div className="items-center md:w-[30%] flex justify-center mb-[30px] w-full">
          <ul className="text-white">
            <li className="text-[22px] font-medium md:mb-12 mb-6 sm:mt-0 mt-6">
              Company
            </li>
            <li className="cursor-pointer mb-3">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="cursor-pointer block">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="items-center md:w-[30%] flex justify-center mb-[30px] w-full">
          <ul className="text-white">
            <li className="text-[22px] font-medium md:mb-12 mb-6 sm:mt-0 mt-6">
              Contact
            </li>
            <li className="mb-3 cursor-pointer block">{formData.email}</li>
            <li className="cursor-pointer">Phone: +55 {formData.phone}</li>
          </ul>
        </div>
      </div>
      <span className="text-white text-[12px] md:text-[16px] text-center md:flex md:justify-center md:align-bottom mt-20 pb-8 font-light opacity-75 block">
        © GTM Engenharia all rights 2023 - Designed by{" "}
        <Link
          className="pl-1 hover:underline md:decoration-white"
          to={"http://malldonado.dev"}
        >
          {" "}
          malldonado.dev
        </Link>
      </span>
    </div>
  );
}

export default Footer;
