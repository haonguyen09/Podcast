import React, { useState, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import audio from '../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'

const AudioPlayer = () => {
    const [progress, setProgress] = useState(0);
    const playerRef = useRef(null);

    const handleListen = (e) => {
        const currentTime = playerRef.current.audio.current.currentTime;
        const duration = playerRef.current.audio.current.duration;
        setProgress((currentTime / duration) * 100);
    };

    const data = {
        labels: ['Start', 'Current', 'End'],
        datasets: [
            {
                label: 'Progress',
                data: [0, progress, 100],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div>
            <AudioPlayer
                ref={playerRef}
                src={audio}
                onListen={handleListen}
                listenInterval={100}
            />
            <Line data={data} options={options} />
        </div>
    );
};

export default AudioPlayer;
