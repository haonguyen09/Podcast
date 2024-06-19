import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './Waveform.css'; // Import CSS for custom styling

const Waveform = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize WaveSurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'grey',
      progressColor: 'orange',
      cursorColor: 'transparent',
      barWidth: 2,
      barGap: 2,
    });

    wavesurferRef.current.load(audioUrl);

    // Cleanup on unmount
    return () => wavesurferRef.current.destroy();
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (wavesurferRef.current.isPlaying()) {
      wavesurferRef.current.pause();
      setIsPlaying(false);
    } else {
      wavesurferRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="waveform-container">
      <div ref={waveformRef} className="waveform" />
      <button onClick={handlePlayPause} className="play-pause-btn">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Waveform;
