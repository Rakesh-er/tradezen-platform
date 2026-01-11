import React from "react";
import Hero from "./Hero";
import PricingSection from "./PricingSection";
import ChargesForAccountOpening from "./ChargesForAccountOpening";
import DematAMC from "./DematAMC";
import Brokerage from "./Brokerage";
import OptionalValue from "./optionalValue";
import ChargesExplained from "./ChargesExplained";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <PricingSection />

      {/* Separator to indicate start of detailed charges */}
      <div className="container border-top mt-5"></div>
      <Brokerage />
      <ChargesForAccountOpening />
      <DematAMC />
      <OptionalValue />
      <ChargesExplained />
    </>
  );
}
