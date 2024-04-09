// import React, { useState } from 'react';
// import DecisionTree from '../Components/DecisionTree';
// import Logo from '../Logo/Logo';

// function Home() {
//   const [showForm, setShowForm] = useState(false);

//   // Function to reload the page
//   const restartTest = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="bg-slate-250 min-h-screen" style={{ border: '2px solid black' }}>
//       {/* Navbar */}
//       <div>
//         <nav className="bg-gradient-to-r from-blue-700 to-cyan-700 p-4 ">
//           <div className="container mx-auto flex justify-between items-center">
//             <div className="text-white font-semibold text-xl">Stat Wizard</div>
//             {/* Restart Test button */}
//             <button
//               className="text-white border-2 rounded-full h-auto px-4 py-2 hover:bg-black hover:text-white"
//               onClick={restartTest}
//             >
//               Restart Test
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="container py-8" style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <div className="flex flex-col md:flex-row items-center justify-center">
//           {/* Left side: Stat Wizard text and animated icon */}
//           <div className="mb-8 md:mr-8">
//             <div className="flex items-center">
//               <div className="mr-4">
//                 <Logo className="w-16 h-16" />
//               </div>
//               <div>
//                 <h1 className="text-4xl font-bold text-center mb-2">Stat Wizard</h1>
//                 {/* Add your animated icon here */}
//               </div>
//             </div>
//           </div>

//           {/* Description of the project */}
//           <div className="max-w-md text-center mb-8">
//             <p className="text-lg">Enter your data information to find out which statistical test you should use.</p>
//             <p>Accuracy: 100%</p>

            
//           </div>
//         </div>

//         {/* Render Statistical Test Form component if showForm is true */}
//         {showForm && (
//           <div className="bg-[#2596be] border-2 border-slate-500 justify-center items-center p-6 rounded-lg shadow-inner mt-8 mx-auto w-70" style={{ width: '68%' }}>
//             <DecisionTree />
//           </div>
//         )}
//         {/* Button to show the form */}
//       </div>
//       {!showForm && (
//         <button className="bg-[#2596be] rounded-full text-white py-3 px-8 shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out mt-8" onClick={() => setShowForm(!showForm)} style={{ marginLeft: '550px' }}>
//           Start test
//         </button>
//       )}

//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import DecisionTree from '../Components/DecisionTree';
import Logo from '../Logo/Logo';

function Home() {
  const [showForm, setShowForm] = useState(false);

  // Function to reload the page
  const restartTest = () => {
    window.location.reload();
  };

  return (
    <div className="bg-slate-250 min-h-screen relative" style={{ border: '2px solid black' }}>
      {/* Navbar */}
      <div>
        <nav className="bg-gradient-to-r from-blue-700 to-cyan-700 p-4 ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-semibold">Stat Wizard</div>
            {/* Restart Test button */}
            <button
              className="text-white border-2 rounded-full h-auto px-4 py-2 hover:bg-black hover:text-white"
              onClick={restartTest}
            >
              Restart Test
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container py-8" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left side: Stat Wizard text and animated icon */}
          <div className="mb-8 md:mr-8">
            <div className="flex items-center">
              <div className="mr-4">
                <Logo className="w-16 h-16" />
              </div>
              <div>
              <h1 className="text-5xl font-bold text-center mb-2 mt-[57px]  ml-[-70px]">Stat Wizard</h1>

                {/* Add your animated icon here */}
              </div>
            </div>
          </div>

          {/* Description of the project */}
          <div className="max-w-md text-center mb-8">
            <p className="text-lg font-bold">Enter your data information to find out which statistical test you should use.</p>
            <p className="text-lg font-bold">Accuracy: 100%</p>
          </div>
        </div>

        {/* Render Statistical Test Form component if showForm is true */}
        {showForm && (
          <div className="bg-[#2596be] border-2 border-slate-500 justify-center items-center p-6 rounded-lg shadow-inner mt-8 mx-auto w-70" style={{ width: '68%' }}>
            <DecisionTree />
          </div>
        )}
        {/* Button to show the form */}
      </div>
      {!showForm && (
        <button className="bg-[#2596be] rounded-full text-white py-3 px-8 shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out mt-8" onClick={() => setShowForm(!showForm)} style={{ marginLeft: '550px' }}>
          Start test
        </button>
      )}

      {/* Names and Roll Numbers Section */}
      <div className="text-center mt-8 absolute bottom-0 w-full">
        <p className='font-bold'>Members:</p>
       <div className='font-bold'>
        <p>Drashy - 2021461</p>
        <p>Nikhil kumar - 2021479</p>
        <p>Aryan Sharma - 2021454</p>
        <p>Aniket Panchal - 2021448</p>
        </div>
        {/* Add more members as needed */}
      </div>

    </div>
  );
}

export default Home;
