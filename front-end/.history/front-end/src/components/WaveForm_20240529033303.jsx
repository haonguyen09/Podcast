import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioUrl, className, waveColor, progressColor}) => {
    const waveformRef = useRef(null);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: {waveColor},
            progressColor: {progressColor},
            height: 100,
            cursorWidth: 0,
            barWidth: 2,
        });

        wavesurfer.load(audioUrl);
        // wavesurfer.on('interaction', () => {
        //     wavesurfer.play()
        // })

        return () => wavesurfer.destroy();
    }, [audioUrl]);

    return <div ref={waveformRef} className={ className } />;
};

export default Waveform;
