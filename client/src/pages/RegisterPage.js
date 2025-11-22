import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import UploadFile from "../helpers/UploadFile"

const RegisterPage = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [uploadPhoto, setUploadPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPhoto = async(e) => {
    const file = e.target.files && e.target.files[0];
    const uploadFile = await UploadFile(file);
    console.log("UploadFile", uploadFile);
    if (file) setUploadPhoto(file);
  };

  const handleClearUploadPhoto = (e) => {
    e.stopPropagation();
    setUploadPhoto(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleBoxClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission (send `data` and `uploadPhoto` to server)
    console.log("submit", data, uploadPhoto);
  };

  return (
    <div className="mt-5">
      <div className="bg-white max-w-md mx-auto p-5 rounded-md shadow-md">
        <h3>Welcome to Chat app!</h3>

        <form className="grid gap-4 mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required
              className="bg-slate-100 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={data.username}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
              className="bg-slate-100 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
              className="bg-slate-100 py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="profilePicture">Profile Picture:</label>

            <div
              role="button"
              tabIndex={0}
              onClick={handleBoxClick}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleBoxClick(); }}
              className="h-14 bg-slate-100 flex justify-center items-center border hover:border-primary cursor-pointer mt-1"
            >
              <p className="text-sm max-w-[200px] truncate">
                {uploadPhoto ? uploadPhoto.name : "Upload Profile Picture"}
              </p>

              {uploadPhoto && (
                <button
                  type="button"
                  className="text-lg ml-2 hover:text-red-500"
                  onClick={handleClearUploadPhoto}
                >
                  <IoClose />
                </button>
              )}
            </div>

            {/* hidden native file input */}
            <input
              ref={fileInputRef}
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              className="hidden"
              onChange={handleUploadPhoto}
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-[#4cbbb9] tracking-wide">
              Register
            </button>
          </div>
        </form>
        <p >Already have an account? <Link to="/email" className="text-blue-600 hover:underline">Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
// ...existing code...