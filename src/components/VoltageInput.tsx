
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface VoltageInputProps {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  icon?: React.ReactNode;
}

const VoltageInput = ({ id, label, value, onChange, icon }: VoltageInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      onChange(val);
    } else if (e.target.value === '') {
      onChange(0);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-2">
        {icon && icon}
        {label}
      </Label>
      <Input
        id={id}
        type="number"
        value={value}
        onChange={handleChange}
        step="0.1"
        min="0"
        className="transition-all focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

export default VoltageInput;
