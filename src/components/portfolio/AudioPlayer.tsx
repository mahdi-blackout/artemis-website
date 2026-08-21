"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { seededSequence, withBasePath } from "@/lib/utils";

const BAR_COUNT = 60;

function formatTime(t: number) {
  if (!Number.isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export default function AudioPlayer({ src, title }: { src: string; title?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [bars] = useState(() => {
    const seed = (title ?? src).split("").reduce((acc, c) => acc + c.charCodeAt(0), 1);
    return seededSequence(BAR_COUNT, seed).map((v) => 0.25 + v * 0.75);
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setProgress(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  };

  const activeRatio = duration ? progress / duration : 0;

  return (
    <div className="glass rounded-xl p-4">
      <audio ref={audioRef} src={withBasePath(src)} preload="metadata" muted={muted} />
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          data-cursor-hover
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-electric text-white transition-transform hover:scale-105"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
        </button>

        <div className="min-w-0 flex-1">
          {title && <p className="mb-1 truncate text-xs font-medium text-muted">{title}</p>}
          <div
            onClick={seek}
            data-cursor-hover
            className="flex h-8 cursor-pointer items-end gap-[2px]"
          >
            {bars.map((h, i) => {
              const barRatio = i / BAR_COUNT;
              const active = barRatio <= activeRatio;
              return (
                <span
                  key={i}
                  className="w-full rounded-full transition-colors duration-150"
                  style={{
                    height: `${h * 100}%`,
                    background: active ? "var(--electric)" : "rgba(255,255,255,0.12)",
                  }}
                />
              );
            })}
          </div>
        </div>

        <button
          onClick={() => setMuted((m) => !m)}
          data-cursor-hover
          aria-label={muted ? "Unmute" : "Mute"}
          className="shrink-0 text-muted transition-colors hover:text-electric"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-muted">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
