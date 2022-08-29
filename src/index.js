import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'flowbite';


function Calculator() {
  const [bb, setBB] = React.useState({
    age: 0,
    height: 0,
    isMale: true,
    bodyWeight: 0,
    bodyFat: 0,
    leanMass: 0,
    activity: 1.2,
    intensity: 0
  })

  const [calories, setCalories] = React.useState(0);
  const [protien, setProtien] = React.useState(0);
  const [fat, setFat] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);

  function handleSubmit(event){
    event.preventDefault();
  }

  function handleChange(event){
    setBB({
      ...bb,
      [event.target.name]: event.target.value
    });

    let extra = bb.isMale ? 5 : -161;
    let bmr = (10 * bb.bodyWeight) + (6.25 * bb.height) - (5 * bb.age) + extra;

    
  }

  return (
    <form className="">
      <div className="grid gap-6 mb-6 md:grid-cols-1" onSubmit={handleSubmit}>
        <div>
          <label className="block">Age (years)</label>
          <input className="block" id="steps-range" type="text" defaultValue={bb.age} onChange={handleChange}/>
        </div>
        <div>
          <label className="block">Height (cm)</label>
          <input className="block" id="steps-range" type="text" defaultValue={bb.age} onChange={handleChange}/>
        </div>
        <div>
          <label className="block">Body Weight (kg)</label>
          <input className="block" id="steps-range" type="text" defaultValue={bb.age} onChange={handleChange}/>
        </div>
        <div>
          <label className="block">Body Fat (%)</label>
          <input className="block" id="steps-range" type="text" defaultValue={bb.age} onChange={handleChange}/>
        </div>
        <label className="block">
          <span>Activity Multiplier (x{bb.activity})</span>
          <input className="block" id="steps-range" type="range" min="1.2" max="2" step="0.1" name="activity" defaultValue={bb.activity} onChange={handleChange}/>
        </label>
        <label className="block">
          <span>Surplus/Deficit Intensity ({bb.intensity}%)</span>
          <input className="block" id="steps-range" type="range" min="-20" max="20" step="1" name="intensity" defaultValue={bb.intensity} onChange={handleChange}/>
        </label>
        <span>Total Calories: {calories}</span>
        <span>Protien: {protien}</span>
        <span>Fat: {fat}</span>
        <span>Carbs: {carbs}</span>
      </div>
    </form>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);
