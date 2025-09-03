"use client";

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Phone } from 'lucide-react';

export default function EmergencyCall() {
  return (
    <Button
      variant="emergency"
      size="lg"
      className="group"
      onClick={() => window.location.href = 'tel:911'}
    >
      <Phone className="mr-2 h-6 w-6 animate-pulse" />
      <span>Emergency Call</span>
    </Button>
  );
}
