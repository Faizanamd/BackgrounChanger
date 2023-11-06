
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("Olive");
  const changeBackgroundColor = (newColor) => {
    setColor(newColor);
  };

  const colorOptions = [
    { name: 'Coral', value: '#FF5733' },
    { name: 'Dodger Blue', value: '#3498DB' },
    { name: 'Emerald', value: '#27AE60' },
    { name: 'Saffron', value: '#FFC300' },
    { name: 'Amethyst', value: '#9B59B6' },
    { name: 'Alizarin', value: '#E74C3C' },
    { name: 'Sunflower', value: '#F39C12' },
    { name: 'Turquoise', value: '#1ABC9C' },
    { name: 'Wet Asphalt', value: '#34495E' },
    { name: 'Pumpkin', value: '#D35400' },
    { name: 'Lavender', value: '#967BB6' },
    { name: 'Teal', value: '#2E8B57' },
    { name: 'Salmon', value: '#FA8072' },
    { name: 'Lime Green', value: '#32CD32' },
    { name: 'Indigo', value: '#4B0082' },
    { name: 'Gold', value: '#FFD700' },
    { name: 'Silver', value: '#C0C0C0' },
    { name: 'Chocolate', value: '#D2691E' },
    { name: 'Sky Blue', value: '#87CEEB' },
    { name: 'Magenta', value: '#FF00FF' },
    { name: 'Royal Blue', value: '#4169E1' },
    { name: 'Forest Green', value: '#228B22' },
    { name: 'Crimson', value: '#DC143C' },
    { name: 'Khaki', value: '#F0E68C' },
    { name: 'Plum', value: '#DDA0DD' },
    { name: 'Slate Gray', value: '#708090' },
    { name: 'Tomato', value: '#FF6347' },
    // { name: 'Lemon Chiffon', value: '#FFFACD' },
    { name: 'Pale Green', value: '#98FB98' },
    { name: 'Hot Pink', value: '#FF69B4' },
  ];

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 mx-2 shadow-lg bg-white px-5 py-2 rounded-2xl'>
          {colorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => changeBackgroundColor(option.value)}
              className='outline-none px-3 py-2 rounded-3xl text-white shadow-xl'
              style={{ backgroundColor: option.value }}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
