import React, { useState, useEffect } from "react";
import axios from "axios";

function SettingsPanel() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    region: "",
    facebook: "",
    instagram: "",
    twitter: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8000/user-update",
        formData
      );
      console.log(response.data);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form className="w-4/5 mx-auto" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-12">
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="password"
                  placeholder="********"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="contato@gtmengenharia.com.br"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Geovane"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  placeholder="Monteiro"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2 mt-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    typeof="tel"
                    autoComplete="tel"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium"
                    placeholder="(19) 99999-9999"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="street-address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  autoComplete="street-address"
                  placeholder="Rua Frederico Penachione, 302"
                  className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postal-code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  placeholder="12345-678"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  placeholder="Americana"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  value={formData.region}
                  onChange={handleChange}
                  autoComplete="address-level1"
                  placeholder="São Paulo"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Facebook
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  autoComplete="facebook"
                  placeholder="https://www.facebook.com/criativitis/"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Instagram
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  autoComplete="instagram"
                  placeholder="https://www.instagram.com/criativitis/"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Twitter
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  autoComplete="twitter"
                  placeholder="https://twitter.com/criativitis"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-medium"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-6 flex justify-end">
              <button
                type="button"
                // onClick={handleCancel}
                className="text-sm font-semibold leading-6 text-gray-900 w-[100px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]"
              >
                Update
              </button>
            </div>
          </div>
          {status === "success" && (
            <div className="text-green-600 font-medium">
              Information updated successfully!
            </div>
          )}
          {status === "error" && (
            <div className="text-red-600 font-medium">
              Error updating information. Please try again.
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default SettingsPanel;
