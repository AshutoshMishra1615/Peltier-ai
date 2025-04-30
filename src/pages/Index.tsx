
import React from 'react';
import Header from '@/components/Header';
import PredictionForm from '@/components/PredictionForm';
import SeebeckInfo from '@/components/SeebeckInfo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-6xl mx-auto space-y-10">
          {/* Hero Section */}
          <section className="text-center space-y-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold">Peltier Voltage Prediction</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage AI to predict the voltage of Peltier modules based on hot and cold side measurements
            </p>
          </section>
          
          {/* Prediction Tool Section */}
          <section className="py-6">
            <div className="bg-card shadow-xl rounded-xl border p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Voltage Predictor</h2>
              <PredictionForm />
            </div>
          </section>
          
          {/* Seebeck Effect Information */}
          <section className="py-6">
            <SeebeckInfo />
          </section>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} PeltierAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
