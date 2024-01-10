// src/App.tsx

import LogsDisplay from '@/components/LogDetails';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const App: React.FC = () => {

  return (
    <MaxWidthWrapper>
      <div>
        <h1 className="text-3xl font-bold mb-4">Logs Display</h1>
        <LogsDisplay />
      </div>
    </MaxWidthWrapper>
  );
};

export default App;
