import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioUrl }) => {
    const waveformRef = useRef(null);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'blue',
            progressColor: 'purple',
            height: 100,
            cursorWidth: 0,
            barWidth: 2,
        });

        wavesurfer.load(audioUrl);

        return () => wavesurfer.destroy();
    }, [audioUrl]);

    return <div ref={waveformRef} />;
};

export default Waveform;
