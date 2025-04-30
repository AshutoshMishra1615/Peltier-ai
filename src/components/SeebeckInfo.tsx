
import React from 'react';
import InfoCard from './InfoCard';

const SeebeckInfo = () => {
  return (
    <InfoCard
      title="The Seebeck Effect"
      description="Understanding the thermoelectric principle behind Peltier modules"
    >
      <div className="space-y-4">
        <p>
          The Seebeck effect is a thermoelectric phenomenon where a temperature difference between two dissimilar electrical 
          conductors or semiconductors produces a voltage difference between the two substances. When heat is applied to one 
          of the two conductors or semiconductors, heated electrons flow toward the cooler one.
        </p>

        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Key Points</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Discovered by Thomas Johann Seebeck in 1821</li>
            <li>Forms the basis for thermoelectric generators and Peltier cooling devices</li>
            <li>The voltage produced is proportional to the temperature difference</li>
            <li>The proportionality constant is known as the Seebeck coefficient</li>
          </ul>
        </div>

        <p>
          In a Peltier module, the Seebeck effect is utilized in reverse (known as the Peltier effect): when a voltage is 
          applied, it creates a temperature difference. By predicting the voltage based on temperature differences, our AI model 
          helps optimize the performance of Peltier modules for various applications.
        </p>
      </div>
    </InfoCard>
  );
};

export default SeebeckInfo;
