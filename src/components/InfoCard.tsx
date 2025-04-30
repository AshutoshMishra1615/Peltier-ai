
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InfoCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const InfoCard = ({ title, description, children }: InfoCardProps) => {
  return (
    <Card className="border shadow-md animate-fade-in">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
