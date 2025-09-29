/** @format */

import React, { useState, lazy, Suspense } from "react";
import Spinner from "../Components/Spinner";

const LazyComponent = lazy(() => import("../Components/Profile"));

export default function LazyLoadingExample() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>
      {showProfile && (
        <Suspense fallback={<Spinner />}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
