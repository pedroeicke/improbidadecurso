"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SocialProofVideo() {
    const [position, setPosition] = useState(3); // Start in the middle (3 of 5)
    const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

    const videos = [
        {
            id: 1,
            title: "Depoimento: Maria Silva",
            role: "Gestora de Contratos - TJMG",
            thumbnail: "/uploaded_media_0_1770074625239.png",
            youtubeId: "dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: "Depoimento: João Santos",
            role: "Pregoeiro - Prefeitura de BH",
            thumbnail: "/uploaded_media_1770065697827.png",
            youtubeId: "dQw4w9WgXcQ"
        },
        {
            id: 3,
            title: "Depoimento: Especialista",
            role: "Instituto Plenum Brasil",
            thumbnail: "/uploaded_media_1770065858365.png",
            videoSrc: "/03.MOV" // Local video file
        },
        {
            id: 4,
            title: "Depoimento: Carlos Lima",
            role: "Secretário - MPMG",
            thumbnail: "/uploaded_media_0_1770074625239.png",
            youtubeId: "dQw4w9WgXcQ"
        },
        {
            id: 5,
            title: "Depoimento: Fernanda Souza",
            role: "OAB - MG",
            thumbnail: "/uploaded_media_1770065697827.png",
            youtubeId: "dQw4w9WgXcQ"
        }
    ];

    const handleCardClick = (offset: number, videoId: number) => {
        if (position !== offset) {
            setPosition(offset);
            setPlayingVideoId(null); // Stop any playing video when changing slides
        }
    };

    const handlePlayClick = (e: React.MouseEvent, videoId: number) => {
        e.stopPropagation();
        setPlayingVideoId(videoId);
    };

    const handleCloseVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPlayingVideoId(null);
    };

    return (
        <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/fundodepo.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Yellow lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#FBB03B]/5 to-black/80 z-1" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FBB03B]/10 via-transparent to-transparent z-1" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#FBB03B] text-sm font-bold tracking-[0.2em] uppercase mb-4 inline-block">
                        Depoimentos
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white font-sequel-medium mb-4">
                        O que estão <span className="text-[#FBB03B]">falando da gente</span>
                    </h2>
                </div>

                {/* 3D Carousel Container */}
                <div className={`${playingVideoId !== null ? 'h-[600px]' : 'h-[500px]'} w-full flex items-center justify-center relative transition-all duration-500`}>
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{
                            perspective: '1000px',
                            transformStyle: 'preserve-3d',
                            '--position': position,
                        } as any}
                    >
                        {videos.map((video, index) => {
                            const offset = index + 1;
                            const isPlaying = playingVideoId === video.id;
                            const isActive = position === offset;

                            return (
                                <div
                                    key={video.id}
                                    className={cn(
                                        "absolute transition-all ease-out cursor-pointer",
                                        isPlaying ? "w-full max-w-[900px] h-full z-[100]" : "w-[320px] h-[420px]"
                                    )}
                                    onClick={() => handleCardClick(offset, video.id)}
                                    style={!isPlaying ? {
                                        '--offset': offset,
                                        '--r': 'calc(var(--position) - var(--offset))',
                                        '--abs': 'max(calc(var(--r) * -1), var(--r))',
                                        transform: 'rotateY(calc(-10deg * var(--r))) translateX(calc(-310px * var(--r)))',
                                        zIndex: 'calc(10 - var(--abs))',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        opacity: 'calc(1 - (0.2 * var(--abs)))',
                                    } as any : {
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    } as any}
                                >
                                    <div className={cn(
                                        "w-full h-full relative rounded-3xl overflow-hidden group bg-gray-900",
                                        !isPlaying && "shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                                    )}>
                                        {isPlaying ? (
                                            <div className="w-full h-full relative">
                                                <button
                                                    onClick={handleCloseVideo}
                                                    className="absolute top-4 right-4 z-[110] bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all"
                                                >
                                                    <X className="w-6 h-6" />
                                                </button>
                                                {video.videoSrc ? (
                                                    <video
                                                        src={video.videoSrc}
                                                        className="w-full h-full object-contain bg-black"
                                                        controls
                                                        autoPlay
                                                    />
                                                ) : (
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                                                        title={video.title}
                                                        className="w-full h-full border-none"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                {/* Thumbnail / Video Preview */}
                                                {video.videoSrc ? (
                                                    <video
                                                        src={video.videoSrc}
                                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                                        muted
                                                        playsInline
                                                        loop
                                                        // Preload metadata to show first frame as thumbnail
                                                        preload="metadata"
                                                        // Auto-play preview only when active or hovered
                                                        onMouseOver={(e) => e.currentTarget.play()}
                                                        onMouseOut={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                                                    />
                                                ) : (
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center h-full w-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                                                    />
                                                )}

                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                                                {/* Play Button - Only prominent on active slide */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <button
                                                        onClick={(e) => handlePlayClick(e, video.id)}
                                                        className={cn(
                                                            "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 backdrop-blur-sm",
                                                            isActive
                                                                ? "bg-[#FBB03B] scale-100 opacity-100"
                                                                : "bg-white/10 scale-75 opacity-0 group-hover:opacity-40"
                                                        )}
                                                    >
                                                        <Play className="w-6 h-6 ml-1 fill-current" />
                                                    </button>
                                                </div>

                                                {/* Content - Bottom area */}
                                                <div className="absolute bottom-0 left-0 w-full p-8">
                                                    <h3 className="text-white font-bold text-xl leading-tight mb-1">{video.title}</h3>
                                                    <p className="text-[#FBB03B] text-sm uppercase tracking-widest font-bold opacity-80">{video.role}</p>
                                                </div>

                                                {/* Active Slide Reflection Highlight */}
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination Controls - Hidden when playing */}
                <div className={cn(
                    "flex justify-center gap-5 mt-12 transition-opacity duration-300",
                    playingVideoId !== null ? "opacity-0 pointer-events-none" : "opacity-100"
                )}>
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPosition(index + 1)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-500",
                                position === index + 1
                                    ? "bg-[#FBB03B] w-12"
                                    : "bg-white/20 hover:bg-white/40 w-4"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
