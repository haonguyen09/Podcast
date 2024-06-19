import React, { useEffect, useRef, useState } from 'react'
import imgList from '../../asset/images/podcast1.webp'
import audio from '../../asset/podcasts/Podcast English - Luyện Nghe Tiếng Anh Mỗi Ngày - No.49.mp4'
import PodcastItemComponent from '../../components/PodcastItemComponent'
import PlayIcon from '../../asset/icons/PlayIcon'
import HeartIcon from '../../asset/icons/HeartIcon'
import StarIcon from '../../asset/icons/StarIcon'
import PlaylistIcon from '../../asset/icons/PlaylistIcon'
import { useLocation } from 'react-router-dom'

const PLayListShow = () => {

    const location = useLocation()
    const data = location.state
    console.log("data", data)

    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
    const [audioEnded, setAudioEnded] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioEnded) {
            handleNextAudio();
            setAudioEnded(false);
        }
    }, [audioEnded]);

    const handleAudioItemClick = (index) => {
        setCurrentAudioIndex(index); // Cập nhật chỉ số của audio đang phát khi người dùng chọn một podcast khác
        setIsPlaying(true); // Bắt đầu phát audio mới khi người dùng chọn
    };

    const handleAudioEnded = () => {
        setAudioEnded(true); // Đánh dấu là audio hiện tại đã kết thúc
    };

    const handleNextAudio = () => {
        if (currentAudioIndex < data.length - 1) {
            setCurrentAudioIndex(currentAudioIndex + 1); // Chuyển sang audio tiếp theo trong danh sách
            setIsPlaying(true); // Bắt đầu phát audio mới
        } else {
            setIsPlaying(false); // Dừng phát khi đã phát hết danh sách
        }
    };


    return (
        <div className='playlistShow'>
        <div className='playlist-header text-start'>
            <h2 className='heading playlist-heading'>Playlist</h2>
            <span>Hear your own playlists and the playlists you’ve liked</span>
        </div>
        <div className='playlistShow-list d-grid'>
            <div className='playlistShow-item d-flex align-items-center'>
                <img src={`/uploads/${data[currentAudioIndex].image}`} alt='img' />
                <div className='playlistShow-info'>
                        <PodcastItemComponent audioUrl={`/uploads/${data[currentAudioIndex]}`} classWave='playlistShow-width' data={ data[currentAudioIndex] } />
                        <div className='playlistShow-listPodcast d-grid'>
                            {
                                data.map((item, index) => (
                                    <div className='playlistShow-itemPodcast d-flex align-items-center justify-content-between' key={index} onClick={() => handleAudioItemClick(index)}>
                                        <div className='playlistShow-itemPodcast-info d-flex align-items-center'>
                                            <img src={`/uploads/${item.image}`} alt='img' />
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <PlayIcon />
                                            <span>{item.viewsCount}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='playlistShow-footer d-flex align-items-center justify-content-between'>
                            <button className='button'>View 100+ Episodes</button>
                            <div className='exploreItem-action-left d-flex align-items-center'>
                                <HeartIcon />
                                <StarIcon className='exploreItem-stars'/>
                                <PlaylistIcon/>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <audio ref={audioRef} src={`/uploads/${data[currentAudioIndex]}`} onEnded={handleAudioEnded} />
    </div>
    )
}

export default PLayListShow
