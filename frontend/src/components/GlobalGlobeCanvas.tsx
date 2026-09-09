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
    camera.position.z = 250;

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
    globeGroup.rotation.x = 0.30;
    globeGroup.rotation.z = -0.08;
    scene.add(globeGroup);

    // Scaled-up prominent globe radius
    const GLOBE_RADIUS = 100;

    // ─── Realistic Geographic Textured Earth Sphere (StratExecute Theme) ───
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
      roughness: 0.65,
      metalness: 0.02,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // ─── Lighting Setup — Clean Bright Neutral Studio Illumination (No Blue) ───
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.25);
    sunLight.position.set(130, 85, 160);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xfffbf5, 0.6);
    fillLight.position.set(-130, -40, -100);
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
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E0D8] shadow-xs pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#FF7A1A] animate-pulse" />
        <span className="text-[10px] sm:text-xs font-mono font-bold text-[#1B2632]">
          GLOBAL EXPORT NETWORK
        </span>
      </div>
    </div>
  );
}
