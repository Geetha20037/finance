import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + step, 100);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 250);
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="Finova-loading-screen">
      <div className="Finova-loading-background">
        <div className="loading-orb loading-orb-one"></div>
        <div className="loading-orb loading-orb-two"></div>
      </div>

      <div className="Finova-loader">
        <div className="loader-logo-wrap">
          <div className="loader-logo">
            F
          </div>
        </div>

        <div className="loader-brand">
          <span>Finova</span>
          <small>Finance, simplified.</small>
        </div>

        <div className="loader-progress-area">
          <div className="loader-progress-track">
            <div
              className="loader-progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="loader-progress-info">
            <span>Preparing your workspace</span>
            <strong>{Math.round(progress)}%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;


