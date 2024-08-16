import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the username in local storage
    localStorage.setItem("username", username);
    // Redirect to the home page
    navigate("/"); // Redirect to "/"
  };

  return (
    <div
      className="w-[100vw] h-screen bg-cover bg-center bg-gray-700 flex items-center justify-center"
      style={{
        backgroundColor: "",
      }}
    >
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-md dark:bg-gray-800 dark:bg-opacity-80 h-[55vh]">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
              alt="Logo"
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-white">
            Welcome Back
          </h3>

          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter Your Name"
                value={username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex justify-center items-center mt-8">
              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="mx-2 text-sm font-bold text-red-500">
            Note: User details are just stored in Local Storage. For a smooth
            experience, don't refresh the page.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
