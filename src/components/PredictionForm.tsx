import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import VoltageInput from "./VoltageInput";
import ResultDisplay from "./ResultDisplay";
import { Thermometer, ThermometerSun, Zap } from "lucide-react";

const PredictionForm = () => {
  const [hotSideVoltage, setHotSideVoltage] = useState<number>(0);
  const [coldSideVoltage, setColdSideVoltage] = useState<number>(0);
  const [predictedVoltage, setPredictedVoltage] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePredict = () => {
    setLoading(true);
    setPredictedVoltage(null);

    setTimeout(() => {
      const prediction =
        Math.abs(hotSideVoltage - coldSideVoltage) *
        210 *
        Math.pow(10, -6) *
        127;
      setPredictedVoltage(prediction);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <VoltageInput
          id="hot-side"
          label="Hot Side Voltage (V)"
          value={hotSideVoltage}
          onChange={setHotSideVoltage}
          icon={<ThermometerSun className="w-4 h-4 text-accent" />}
        />

        <VoltageInput
          id="cold-side"
          label="Cold Side Voltage (V)"
          value={coldSideVoltage}
          onChange={setColdSideVoltage}
          icon={<Thermometer className="w-4 h-4 text-primary" />}
        />

        <Button
          onClick={handlePredict}
          className="w-full flex items-center gap-2 transition-all hover:scale-105"
          disabled={loading}
        >
          <Zap className="w-4 h-4" />
          Predict Voltage
        </Button>
      </div>

      <ResultDisplay loading={loading} value={predictedVoltage} />
    </div>
  );
};

export default PredictionForm;
