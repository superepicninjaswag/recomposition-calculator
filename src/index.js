import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'flowbite';


function Calculator() {
  const [bb, setBB] = React.useState({
    age: 23,
    height: 168,
    isMale: true,
    bodyWeight: 75,
    bodyFat: 27,
    activity: 1.3,
    intensity: -10,
    proteinIntake: 1.2,
    fatIntake: 35
  })

  const [calories, setCalories] = React.useState(0);
  const [protein, setProtein] = React.useState(0);
  const [fat, setFat] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);

  function handleChange(event){
    setBB({
      ...bb,
      [event.target.name]: event.target.value
    });
  }

  useEffect(() => {
    let extra = bb.isMale ? 5 : -161;
    let bmr = (10 * bb.bodyWeight) + (6.25 * bb.height) - (5 * bb.age) + extra;
    let lean_body_mass = bb.bodyWeight * ((100-bb.bodyFat)/100)

    setCalories(bmr*(bb.activity) + bmr*(bb.intensity/100))
    setProtein(Math.round(lean_body_mass * bb.proteinIntake * 2.204623))
    setFat(Math.round((calories * (bb.fatIntake/100))/9))
    setCarbs(Math.round((calories - (4*protein) - (9*fat))/4))
  });

  return (
    <div className="grid w-full pt-8 place-content-center items-stretch">
      <div className="bg-red-100 rounded-md">
        <h1 className="font-bold">Recomposition Calculator</h1>
        <form className="w-full">
          <div className="grid gap-1 mb-6 lg:grid-cols-1">
            <div>
              <label className="block">Age (years)</label>
              <input className="block w-full" type="text" name="age" defaultValue={bb.age} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Height (cm)</label>
              <input className="block w-full" type="text" name="height" defaultValue={bb.height} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Body Weight (kg)</label>
              <input className="block w-full" type="text" name="bodyWeight" defaultValue={bb.bodyWeight} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Body Fat (%)</label>
              <input className="block w-full" type="text" name="bodyFat" defaultValue={bb.bodyFat} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Activity Multiplier (x{bb.activity})</label>
              <input className="block w-full" id="steps-range" type="range" min="1.2" max="2" step="0.1" name="activity" defaultValue={bb.activity} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Surplus/Deficit Intensity ({bb.intensity}%)</label>
              <input className="block w-full" id="steps-range" type="range" min="-20" max="20" step="1" name="intensity" defaultValue={bb.intensity} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Protein ({bb.proteinIntake} g/lb lean)</label>
              <input className="block w-full" id="steps-range" type="range" min="1.2" max="1.6" step="0.05" name="proteinIntake" defaultValue={bb.proteinIntake} onChange={handleChange}/>
            </div>
            <div>
              <label className="block">Fat intake ({bb.fatIntake}% of calories)</label>
              <input className="block w-full" id="steps-range" type="range" min="20" max="35" step="1" name="fatIntake" defaultValue={bb.fatIntake} onChange={handleChange}/>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-blue-100 rounded-md">
        <span className="block">Total Calories: {calories}</span>
        <span className="block">Protein: {protein}</span>
        <span className="block">Fat: {fat}</span>
        <span className="block">Carbs: {carbs}</span>
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);
