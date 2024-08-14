import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const showAllHandler = () => {
    setShowAll(!showAll);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div>
        <button onClick={showAllHandler}>Show All</button>
      <h1>Multi-Step Form</h1>
      {step === 1 && !showAll && (
        <div>
          <h2>Step 1: Personal Info</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && !showAll && (
        <div>
          <h2>Step 2: Contact Info</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && !showAll && (
        <div>
          <h2>Step 3: Account Info</h2>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      <div>
        Step {step} of 3
      </div>
    </div>
  );
}

export default MultiStepForm;
