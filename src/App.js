import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Hello, World!</h1>
        <p className="text-xl text-gray-600 mb-8">Welcome to my first React application with Tailwind CSS!</p>
        <div className="mb-8">
          <img src="https://images.unsplash.com/photo-1421986527537-888d998adb74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3MTcxMzR8&ixlib=rb-4.1.0&q=80&w=1080" alt="happy person waving hello" />
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;