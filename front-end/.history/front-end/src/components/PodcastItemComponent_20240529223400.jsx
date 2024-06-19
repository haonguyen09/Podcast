import React, { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js';
import PauseIcon from '../asset/icons/PauseIcon';
import PlayIcon from '../asset/icons/PlayIcon';

const PodcastItemComponent = ({audioUrl}) => {
    const waveformRef = useRef(null);
    const wavesurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

  useEffect(() => {
    // Initialize WaveSurfer
    wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'grey',
        progressColor: 'orange',
        cursorColor: 'transparent',
        barWidth: 2,
        barGap: 2,
        height: 30,
    });

      wavesurferRef.current.load(audioUrl);
      
      wavesurferRef.current.on('ready', () => {
        setDuration(wavesurferRef.current.getDuration());
      });
  
      wavesurferRef.current.on('audioprocess', () => {
        setCurrentTime(wavesurferRef.current.getCurrentTime());
      });

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
    
    const formatTime = (time) => {
        if (typeof time !== 'number' || isNaN(time)) {
          console.error('Invalid time value:', time);
          return '0:00';
        }
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
      
        // Formatting to hh:mm:ss
        if (hours > 0) {
          return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
      };

  return (
    <div className="waveform-container d-flex align-items-center">
      <button onClick={handlePlayPause} className="play-pause-btn">
        {isPlaying ? <PauseIcon/> : <PlayIcon/> }
      </button>
      <div ref={waveformRef} className="waveform" />
        <span className='waveform-time'> {formatTime(currentTime)}</span>
    </div>
  );
}

export default PodcastItemComponent