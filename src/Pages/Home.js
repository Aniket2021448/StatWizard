import React, { useState } from 'react'; // Assuming you have a component for the statistical test form
import DecisionTree from '../Components/DecisionTree';
function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-700 to-cyan-700 p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-semibold text-xl">Stat Wizard</div>
            <button className="text-white" onClick={() => setShowForm(!showForm)}>Take Test</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Stat Wizard!</h1>
        <p className="text-lg text-center mb-8">Enter your data information to find out which statistical test you should use.</p>
        {showForm && 
        <div className='bg-blue-600 justify-center items-center p-6 max-w-md mx-auto rounded-lg shadow-inner'>
        <DecisionTree />
      </div>
     
        } {/* Render Statistical Test Form component if showForm is true */}
      </div>
    </div>
  );
}

export default Home;
