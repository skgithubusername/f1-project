// import React, { useState } from 'react';
// import Cart from './Cart';
// import Cart3 from './Cart3';
// import Cart2 from './Cart2';

// function MultiStepCart() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
//   const goToPreviousStep = () => setCurrentStep((prevStep) => prevStep - 1);

//   return (
//     <div>
//       {currentStep === 1 && <Cart onNext={goToNextStep} />}
//       {currentStep === 2 && <Cart3 onNext={goToNextStep} onPrevious={goToPreviousStep} />}
//       {currentStep === 3 && <Cart2 onPrevious={goToPreviousStep} />}
//     </div>
//   );
// }
// // 
// export default MultiStepCart;
