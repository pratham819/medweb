'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { MotionValue } from 'framer-motion';

interface NativeDnaCanvasProps {
  scrollProgress: MotionValue<number>;
}

export default function NativeDnaCanvas({ scrollProgress }: NativeDnaCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, High-Precision WebGL Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 700;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 34);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Multi-Point Studio Lighting — Synergia Sciences brand palette
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x085884, 3.0);
    keyLight.position.set(20, 30, 25);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x03A9F4, 2.4);
    fillLight.position.set(-20, -15, 20);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x00A896, 2.6);
    rimLight.position.set(0, 25, -25);
    scene.add(rimLight);

    const centerGlow = new THREE.PointLight(0x03A9F4, 1.6, 60);
    centerGlow.position.set(0, 5, 12);
    scene.add(centerGlow);

    // 3. DNA Group with iconic natural slanted posture
    const dnaGroup = new THREE.Group();
    dnaGroup.rotation.z = THREE.MathUtils.degToRad(-14);
    dnaGroup.rotation.x = THREE.MathUtils.degToRad(8);
    scene.add(dnaGroup);

    // 4. Authentic Human B-DNA Molecular Geometry Setup
    const totalBasePairs = 68;
    const risePerBp = 0.44;
    const twistPerBp = (Math.PI * 2) / 10.5;
    const helixRadius = 3.9;
    const minorGrooveOffset = 2.22;

    // Molecular Color Scheme — Synergia Sciences Brand Palette
    const colorStrand1 = new THREE.Color('#085884');     // Deep Teal-Blue backbone
    const colorStrand2 = new THREE.Color('#03A9F4');     // Sky Blue backbone
    const colorPhosphate = new THREE.Color('#F59E0B');   // Gold/Amber phosphate groups

    // 4 Nitrogenous Bases (A, T, G, C)
    const baseColors = [
      { name: 'A-T', color1: new THREE.Color('#F43F5E'), color2: new THREE.Color('#06B6D4') },
      { name: 'G-C', color1: new THREE.Color('#8B5CF6'), color2: new THREE.Color('#10B981') },
      { name: 'T-A', color1: new THREE.Color('#06B6D4'), color2: new THREE.Color('#F43F5E') },
      { name: 'C-G', color1: new THREE.Color('#10B981'), color2: new THREE.Color('#8B5CF6') },
    ];

    // Shared Geometries & Materials for high performance
    const sphereGeoPhosphate = new THREE.SphereGeometry(0.58, 28, 28);
    const sphereGeoSugar = new THREE.SphereGeometry(0.46, 24, 24);
    const sphereGeoBase = new THREE.SphereGeometry(0.42, 22, 22);
    const sphereGeoHydrogen = new THREE.SphereGeometry(0.28, 16, 16);
    const tubeGeo = new THREE.CylinderGeometry(0.08, 0.08, 1, 12);

    const matStrand1 = new THREE.MeshStandardMaterial({
      color: colorStrand1,
      roughness: 0.18,
      metalness: 0.35,
    });

    const matStrand2 = new THREE.MeshStandardMaterial({
      color: colorStrand2,
      roughness: 0.18,
      metalness: 0.35,
    });

    const matPhosphate = new THREE.MeshStandardMaterial({
      color: colorPhosphate,
      roughness: 0.22,
      metalness: 0.3,
    });

    const matHydrogen = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      roughness: 0.3,
      metalness: 0.1,
    });

    const strand1Points: THREE.Vector3[] = [];
    const strand2Points: THREE.Vector3[] = [];

    const startY = -((totalBasePairs * risePerBp) / 2);

    for (let i = 0; i < totalBasePairs; i++) {
      const y = startY + i * risePerBp;
      const angle1 = i * twistPerBp;
      const angle2 = angle1 + minorGrooveOffset;

      const x1 = Math.cos(angle1) * helixRadius;
      const z1 = Math.sin(angle1) * helixRadius;
      strand1Points.push(new THREE.Vector3(x1, y, z1));

      const x2 = Math.cos(angle2) * helixRadius;
      const z2 = Math.sin(angle2) * helixRadius;
      strand2Points.push(new THREE.Vector3(x2, y, z2));

      // Phosphate group sphere
      const phosMesh1 = new THREE.Mesh(sphereGeoPhosphate, matPhosphate);
      phosMesh1.position.set(x1, y, z1);
      dnaGroup.add(phosMesh1);

      const phosMesh2 = new THREE.Mesh(sphereGeoPhosphate, matPhosphate);
      phosMesh2.position.set(x2, y, z2);
      dnaGroup.add(phosMesh2);

      // Deoxyribose sugar group sphere
      const sugarX1 = Math.cos(angle1) * (helixRadius - 0.7);
      const sugarZ1 = Math.sin(angle1) * (helixRadius - 0.7);
      const sugarMesh1 = new THREE.Mesh(sphereGeoSugar, matStrand1);
      sugarMesh1.position.set(sugarX1, y + 0.15, sugarZ1);
      dnaGroup.add(sugarMesh1);

      const sugarX2 = Math.cos(angle2) * (helixRadius - 0.7);
      const sugarZ2 = Math.sin(angle2) * (helixRadius - 0.7);
      const sugarMesh2 = new THREE.Mesh(sphereGeoSugar, matStrand2);
      sugarMesh2.position.set(sugarX2, y + 0.15, sugarZ2);
      dnaGroup.add(sugarMesh2);

      // Nitrogenous Base Pairs
      const pair = baseColors[i % baseColors.length];
      const matBase1 = new THREE.MeshStandardMaterial({
        color: pair.color1,
        roughness: 0.22,
        metalness: 0.25,
      });
      const matBase2 = new THREE.MeshStandardMaterial({
        color: pair.color2,
        roughness: 0.22,
        metalness: 0.25,
      });

      const dx = sugarX2 - sugarX1;
      const dz = sugarZ2 - sugarZ1;
      const rungLength = Math.sqrt(dx * dx + dz * dz);

      const atomsCount = 7;
      for (let j = 1; j < atomsCount; j++) {
        const u = j / atomsCount;
        const bx = sugarX1 + dx * u;
        const bz = sugarZ1 + dz * u;
        const by = y + Math.sin(u * Math.PI) * 0.12;

        const isCenterHydrogenBond = j === 3 || j === 4;
        let baseAtom: THREE.Mesh;

        if (isCenterHydrogenBond) {
          baseAtom = new THREE.Mesh(sphereGeoHydrogen, matHydrogen);
        } else if (u < 0.5) {
          baseAtom = new THREE.Mesh(sphereGeoBase, matBase1);
        } else {
          baseAtom = new THREE.Mesh(sphereGeoBase, matBase2);
        }

        baseAtom.position.set(bx, by, bz);
        dnaGroup.add(baseAtom);
      }

      // Internal covalent bond crossbar
      const bondMesh = new THREE.Mesh(tubeGeo, matHydrogen);
      bondMesh.scale.set(1, rungLength * 0.82, 1);
      bondMesh.position.set((sugarX1 + sugarX2) / 2, y, (sugarZ1 + sugarZ2) / 2);
      bondMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(dx, 0, dz).normalize()
      );
      dnaGroup.add(bondMesh);
    }

    // Continuous Helical Backbone Ribbons
    const curve1 = new THREE.CatmullRomCurve3(strand1Points);
    const tubeGeo1 = new THREE.TubeGeometry(curve1, 240, 0.22, 12, false);
    const ribbon1 = new THREE.Mesh(tubeGeo1, matStrand1);
    dnaGroup.add(ribbon1);

    const curve2 = new THREE.CatmullRomCurve3(strand2Points);
    const tubeGeo2 = new THREE.TubeGeometry(curve2, 240, 0.22, 12, false);
    const ribbon2 = new THREE.Mesh(tubeGeo2, matStrand2);
    dnaGroup.add(ribbon2);

    // 5. Animation loop and scroll sync
    let animationFrameId: number;
    let targetRotation = 0;
    let currentRotation = 0;

    const unsubscribe = scrollProgress.on('change', (latest) => {
      targetRotation = latest * Math.PI * 4;
    });

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      currentRotation += (targetRotation - currentRotation) * 0.085;
      dnaGroup.rotation.y = currentRotation;

      dnaGroup.position.y = Math.sin(Date.now() * 0.0014) * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scrollProgress]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center pointer-events-none"
      style={{ minHeight: '450px' }}
    />
  );
}
