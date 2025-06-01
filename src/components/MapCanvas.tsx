'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  game: string;
  onSelectArea?: (areaId: string) => void;
}

export default function MapCanvas({ game, onSelectArea }: Props) {
  const [svgContent, setSvgContent] = useState('');
  const [viewBox, setViewBox] = useState<[number, number, number, number]>([0, 0, 100, 100]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const viewBoxStart = useRef<[number, number, number, number]>([0, 0, 100, 100]);

  useEffect(() => {
    fetch(`/maps/${game}.svg`)
      .then((res) => res.text())
      .then((text) => setSvgContent(text))
      .catch(() => setSvgContent(''));
  }, [game]);

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    const scale = e.deltaY > 0 ? 1.1 : 0.9;
    const [x, y, w, h] = viewBox;
    const nw = w * scale;
    const nh = h * scale;
    const nx = x + (w - nw) / 2;
    const ny = y + (h - nh) / 2;
    setViewBox([nx, ny, nw, nh]);
  }

  function handleMouseDown(e: React.MouseEvent) {
    isPanning.current = true;
    panStart.current = { x: e.clientX, y: e.clientY };
    viewBoxStart.current = viewBox;
  }
  function handleMouseMove(e: React.MouseEvent) {
    if (!isPanning.current || !containerRef.current) return;
    const scaleX = viewBoxStart.current[2] / containerRef.current.clientWidth;
    const scaleY = viewBoxStart.current[3] / containerRef.current.clientHeight;
    const dx = (e.clientX - panStart.current.x) * scaleX;
    const dy = (e.clientY - panStart.current.y) * scaleY;
    const [x, y, w, h] = viewBoxStart.current;
    setViewBox([x - dx, y - dy, w, h]);
  }
  function endPan() {
    isPanning.current = false;
  }

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    const id = target.id;
    if (id && onSelectArea) onSelectArea(id);
  }

  return (
    <div
      ref={containerRef}
      className="border p-4 flex-1 bg-white overflow-hidden cursor-pointer"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={endPan}
      onMouseLeave={endPan}
      onClick={handleClick}
    >
      <svg
        viewBox={viewBox.join(' ')}
        className="w-full h-64 select-none"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}

