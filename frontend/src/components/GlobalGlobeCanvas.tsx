'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlobalGlobeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 650;
    const height = container.clientHeight || 560;

    // ─── Three.js Scene, Camera, Renderer ───
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.z = 290;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // ─── Globe Group & Orientation ───
    const globeGroup = new THREE.Group();
    // Natural axial tilt (~18 degrees)
    globeGroup.rotation.x = 0.32;
    globeGroup.rotation.z = -0.08;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 92;

    // ─── Realistic Geographic Textured Earth Sphere ───
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth-clean.png', (tex) => {
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
    });

    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.85,
      metalness: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // ─── Subtle Atmosphere Rim Shading ───
    const haloGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 1.2, 64, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x085884,
      transparent: true,
      opacity: 0.06,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // ─── Lighting Setup ───
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.35);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 0.7);
    sunLight.position.set(120, 80, 150);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xdcf3ff, 0.4);
    fillLight.position.set(-120, -40, -100);
    scene.add(fillLight);

    // ─── Resize Handler ───
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 650;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ─── Smooth Ambient Rotation Loop ───
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Continuous calm rotation in place
      globeGroup.rotation.y += 0.0022;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      earthTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[520px] flex items-center justify-center">
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      />

      {/* Top Floating Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#085884]/15 shadow-sm pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#03A9F4] animate-pulse" />
        <span className="text-[10px] sm:text-xs font-mono font-bold text-[#085884]">
          GLOBAL EXPORT NETWORK
        </span>
      </div>

      {/* Bottom Floating Region Badges */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex flex-wrap gap-1.5 max-w-full">
          {['North America', 'Europe', 'Latin America', 'Asia-Pacific', 'Middle East'].map((reg) => (
            <span
              key={reg}
              className="text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/95 border border-[#085884]/15 text-[#17252A] shadow-xs backdrop-blur-sm"
            >
              {reg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
