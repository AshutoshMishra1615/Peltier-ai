
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LoadingSpinner from './LoadingSpinner';

interface ResultDisplayProps {
  loading: boolean;
  value: number | null;
}

const ResultDisplay = ({ loading, value }: ResultDisplayProps) => {
  return (
    <Card className="border shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Predicted Voltage</h3>
          
          {loading ? (
            <div className="py-8 flex flex-col items-center justify-center gap-4">
              <LoadingSpinner size="lg" />
              <p className="text-muted-foreground">Processing...</p>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center gap-2 animate-fade-in">
              <div className="relative">
                <div className="text-4xl font-bold">{value !== null ? value.toFixed(2) : '–'}</div>
                {value !== null && (
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse-slow"></div>
                )}
              </div>
              <div className="text-sm text-muted-foreground">Volts</div>
            </div>
          )}

          <div className="mt-4 text-sm text-muted-foreground">
            Based on the Seebeck effect and machine learning prediction
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
