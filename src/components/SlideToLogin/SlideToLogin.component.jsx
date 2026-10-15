import React, { useState, useRef, useEffect } from 'react';
import { ChevronsRight, ArrowRight } from 'lucide-react';

export default function SlideToLogin({ onComplete, text = 'Slide to Log in' }) {
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const startXRef = useRef(0);
  const maxDragRef = useRef(0);

  const getClientX = (e) => {
    return e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
  };

  const calculateMaxDrag = () => {
    if (!trackRef.current) return 200;
    const trackWidth = trackRef.current.clientWidth;
    // Track width minus thumb size (50px) minus margins (10px)
    return Math.max(trackWidth - 58, 120);
  };

  const handleStart = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    startXRef.current = getClientX(e);
    maxDragRef.current = calculateMaxDrag();
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const maxDrag = maxDragRef.current || calculateMaxDrag();
    if (maxDrag <= 0) return;

    const currentX = getClientX(e);
    const delta = currentX - startXRef.current;
    const progress = Math.min(Math.max(delta / maxDrag, 0), 1);
    setDragProgress(progress);

    if (progress >= 0.85) {
      // Completed unlock gesture!
      setIsDragging(false);
      setDragProgress(1);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 140);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragProgress >= 0.65) {
      // Threshold reached -> snap to finish and trigger login
      setDragProgress(1);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 140);
    } else {
      // Snap back to starting position
      setDragProgress(0);
    }
  };

  useEffect(() => {
    if (isDragging) {
      const onMove = (e) => handleMove(e);
      const onEnd = () => handleEnd();

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: true });
      window.addEventListener('touchend', onEnd);

      return () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onEnd);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);
      };
    }
  }, [isDragging, dragProgress]);

  // Handle tap on the slider track to smoothly auto-slide
  const handleTrackClick = () => {
    if (isDragging || dragProgress > 0.1) return;
    setDragProgress(1);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 280);
  };

  const maxDrag = maxDragRef.current || 220;
  const thumbOffset = dragProgress * maxDrag;

  return (
    <div
      className="rh-slide-track"
      ref={trackRef}
      onClick={handleTrackClick}
      title="Slide or tap to Log in"
    >
      {/* Dynamic Slide Glow Fill */}
      <div
        className="rh-slide-fill"
        style={{
          width: `${Math.max(dragProgress * 100, 14)}%`,
          transition: isDragging ? 'none' : 'width 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Shimmering Center Label */}
      <div
        className="rh-slide-label"
        style={{
          opacity: Math.max(1 - dragProgress * 1.4, 0),
          transition: isDragging ? 'none' : 'opacity 0.25s ease'
        }}
      >
        <span className="rh-slide-text">{text}</span>
        <div className="rh-slide-arrows-wrap">
          <ChevronsRight size={17} className="rh-slide-arrows" />
        </div>
      </div>

      {/* Interactive Sliding Glass Thumb */}
      <div
        className={`rh-slide-thumb ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `translateX(${thumbOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        role="button"
        tabIndex={0}
        aria-label="Slide to Log in"
      >
        <ArrowRight size={20} className="rh-slide-thumb-icon" />
      </div>
    </div>
  );
}
