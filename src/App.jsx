import React,{ useState } from 'react'
import './App.css'

function App() {
  const chars = "ABCDEF0123456789";
  const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#008000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Lime", hex: "#00FF00" },
  { name: "Navy", hex: "#000080" },
  { name: "Teal", hex: "#008080" },
  { name: "Olive", hex: "#808000" },
  { name: "Maroon", hex: "#800000" },
  { name: "Aqua", hex: "#00FFFF" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Tomato", hex: "#FF6347" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Violet", hex: "#EE82EE" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "Khaki", hex: "#F0E68C" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Sky Blue", hex: "#87CEEB" }
];
  const [value,setValue] = useState("white");
    
  const handleHexColor = () => {
     let ans = "#";
     for(let i=1;i<=6;i++){
       ans+=chars[(Math.floor(Math.random() *chars.length))];
     }
      console.log(ans);
     setValue(ans);
    }

   const handleRGBColor = () =>{
       let r = Math.floor(Math.random()*255);
       let g = Math.floor(Math.random()*255);
       let b = Math.floor(Math.random()*255);

       setValue(`rgb(${r},${g},${b})`);
   }

   const handleGenerateRandom = () => {
       let ans = colors[Math.floor(Math.random()*colors.length)];
       setValue(ans.name);
   }

  return (
    <div className="one" style={{backgroundColor:`${value}`}}>
       <h1 className='four'>Random Color Generator</h1>
       <div className="two">
           <button onClick={() => handleHexColor()}>Create Hex Color</button>
           <button onClick={() => handleRGBColor()}>Create RGB Color</button>
           <button onClick={() => handleGenerateRandom()}>Generate Random Color</button>
       </div>
       <h1 className="three">{value}</h1>
    </div>
  )
}

export default App;
