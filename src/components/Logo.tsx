import React from "react";
import { Thermometer } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Thermometer className="w-8 h-8 text-primary" />
        <div className="absolute top-0 left-0 w-full h-full bg-primary/20 rounded-full blur-md animate-pulse-slow"></div>
      </div>
      <span className="font-bold text-xl">Peltier</span>
    </div>
  );
};

export default Logo;
