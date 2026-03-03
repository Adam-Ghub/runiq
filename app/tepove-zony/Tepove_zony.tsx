"use client";

import { useState, useRef, useEffect } from "react";
import CalculatorPage from "./_components/Calculator";
import Zones from "./_components/Zones";
import Container from "../components/Container";

export default function TepoveZony() {
  const [age, setAge] = useState("25");
  const [restingHR, setRestingHR] = useState("60");
  const [isMaxHREnabled, setIsMaxHREnabled] = useState(false);
  const [maxHRInput, setMaxHRInput] = useState("185");
  
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [calculatedData, setCalculatedData] = useState({
    age: 25,
    restingHR: 60,
    isMaxHREnabled: false,
    maxHRInput: 185,
    clickCount: 0 
  });

  useEffect(() => {
    if (calculatedData.clickCount > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [calculatedData]);

  const handleCalculate = () => {
    setCalculatedData(prev => ({
      age: Number(age) || 0,
      restingHR: Number(restingHR) || 0,
      isMaxHREnabled: isMaxHREnabled,
      maxHRInput: Number(maxHRInput) || 0,
      clickCount: prev.clickCount + 1 
    }));
  };

  return (
    <main className="bg-background">
      <section className="h-[800px] flex items-center justify-center relative">
        <Container className="flex flex-col items-center justify-center w-full">
          <CalculatorPage 
            age={age} 
            setAge={setAge} 
            restingHR={restingHR} 
            setRestingHR={setRestingHR}
            isMaxHREnabled={isMaxHREnabled}
            setIsMaxHREnabled={setIsMaxHREnabled}
            maxHRInput={maxHRInput}
            setMaxHRInput={setMaxHRInput}
            onCalculate={handleCalculate} 
          />
        </Container>
      </section>

      <div ref={resultsRef} className="scroll-mt-10">
        <section className="py-20 border-t border-gray/5">
          <Zones 
            age={calculatedData.age} 
            restingHR={calculatedData.restingHR}
            isMaxHREnabled={calculatedData.isMaxHREnabled}
            maxHROverride={calculatedData.maxHRInput}
          />
        </section>
      </div>
    </main>
  );
}