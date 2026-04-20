"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import CalculatorPage from "./_components/Calculator";
import Container from "../components/Container";

const Zones = dynamic(() => import("./_components/Zones"), {
  ssr: false,
  loading: () => (
    <div className="py-20 text-center text-gray animate-pulse" role="status" aria-live="polite">
      Načítám zóny…
    </div>
  ),
});

export default function TepoveZonyClient() {
  const [age, setAge] = useState("25");
  const [restingHR, setRestingHR] = useState("60");
  const [isMaxHREnabled, setIsMaxHREnabled] = useState(false);
  const [maxHRInput, setMaxHRInput] = useState("185");
  
  const resultsRef = useRef<HTMLDivElement>(null);
  const zonesTriggerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadZones, setShouldLoadZones] = useState(false);
  
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

  useEffect(() => {
    if (shouldLoadZones || !zonesTriggerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadZones(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(zonesTriggerRef.current);

    return () => observer.disconnect();
  }, [shouldLoadZones]);

  const handleCalculate = () => {
    setShouldLoadZones(true);
    setCalculatedData(prev => ({
      age: Number(age) || 0,
      restingHR: Number(restingHR) || 0,
      isMaxHREnabled: isMaxHREnabled,
      maxHRInput: Number(maxHRInput) || 0,
      clickCount: prev.clickCount + 1 
    }));
  };

  return (
    <>
      <section className="flex items-center justify-center relative pb-20">
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
          <div ref={zonesTriggerRef}>
            {shouldLoadZones ? (
              <Zones 
                age={calculatedData.age} 
                restingHR={calculatedData.restingHR}
                isMaxHREnabled={calculatedData.isMaxHREnabled}
                maxHROverride={calculatedData.maxHRInput}
              />
            ) : (
              <div className="py-20 text-center text-gray animate-pulse" role="status" aria-live="polite">
                Načítám zóny…
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
