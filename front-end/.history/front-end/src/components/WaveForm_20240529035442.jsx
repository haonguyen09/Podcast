import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioUrl, isPlaying }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'grey',
      progressColor: 'orange',
      cursorColor: 'transparent',
      barWidth: 2,
      barGap: 2,
    });

    wavesurferRef.current.load(audioUrl);

    return () => wavesurferRef.current.destroy();
  }, [audioUrl]);

  useEffect(() => {
    if (isPlaying) {
      wavesurferRef.current.play();
    } else {
      wavesurferRef.current.pause();
    }
  }, [isPlaying]);

  return <div ref={waveformRef} />;
};

export default Waveform;
