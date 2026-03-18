"use client";

import React from 'react';
import PlatformLayout from "@/components/PlatformLayout";
import CompatibilityChecker from "@/components/CompatibilityChecker";

export default function CompatibilityPage() {
  return (
    <PlatformLayout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <CompatibilityChecker />
      </div>
    </PlatformLayout>
  );
}
