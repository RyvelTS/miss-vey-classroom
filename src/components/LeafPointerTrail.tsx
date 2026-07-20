import { useEffect, useState, useRef } from "react";

interface LeafParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  alpha: number;
  color: string;
  size: number;
  leafType: number;
}

export default function LeafPointerTrail() {
  const [particles, setParticles] = useState<LeafParticle[]>([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const particleIdCounter = useRef(0);
  const lastSpawnTime = useRef(0);

  // Colors matching the Pine/Sage/Cream Neo-Brutalist palette
  const leafColors = [
    "#3D5A45", // Forest Green (brand-coral)
    "#75927D", // Soft Sage Green (brand-teal)
    "#A7C4B0", // Light Sage Green
    "#E2C391", // Soft Gold (brand-yellow accent)
    "#DFD5C6", // Warm Cream / Linen
  ];

  // Leaf paths for diverse leaf shapes
  const leafPaths = [
    // Oval Leaf with center line
    "M12,2 C17,6 19,11 19,15 C19,19 16,21 12,22 C8,21 5,19 5,15 C5,11 7,6 12,2 Z",
    // Slender Willow Leaf
    "M12,2 C18,7 18,14 12,21 C6,14 6,7 12,2 Z",
    // Asymmetric organic leaf
    "M12,2 C15,2 18,5 18,10 C18,15 14,19 12,22 C10,19 6,15 6,10 C6,5 9,2 12,2 Z"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if mouse is hovering over a clickable element to animate the main pointer
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === "BUTTON" || 
          target.tagName === "A" || 
          target.closest("button") || 
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer");
        setIsHoveringClickable(!!isClickable);
      }

      // Spawn particles on move, throttle spawning to avoid DOM overflow
      const now = Date.now();
      if (now - lastSpawnTime.current > 45) { // Spawn every ~45ms on mouse move
        spawnParticle(e.clientX, e.clientY);
        lastSpawnTime.current = now;
      }
    };

    const spawnParticle = (x: number, y: number) => {
      particleIdCounter.current += 1;
      const id = particleIdCounter.current;

      // Random speed and direction for physical whirling effect
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      
      const newParticle: LeafParticle = {
        id,
        x,
        y,
        // Drifts backward slightly from mouse velocity plus noise
        vx: Math.cos(angle) * speed * 0.6,
        // Floats slightly upwards
        vy: (Math.sin(angle) * speed * 0.4) - (Math.random() * 0.8 + 0.4),
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8, // degrees per frame
        scale: Math.random() * 0.5 + 0.5,
        alpha: 1,
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        size: Math.random() * 10 + 12, // 12px to 22px
        leafType: Math.floor(Math.random() * leafPaths.length)
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]); // Limit to max 20 particles in state
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Support touch devices
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        setMousePos({ x: touch.clientX, y: touch.clientY });
        setIsVisible(true);

        const now = Date.now();
        if (now - lastSpawnTime.current > 50) {
          spawnParticle(touch.clientX, touch.clientY);
          lastSpawnTime.current = now;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", (e) => {
      if (e.touches && e.touches[0]) {
        setIsVisible(true);
        setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    }, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Update particles loop
  useEffect(() => {
    let animationFrameId: number;

    const updateParticles = () => {
      setParticles((prev) => {
        if (prev.length === 0) return prev;
        
        return prev
          .map((p) => {
            // Apply slight drag and physical drift
            const nextX = p.x + p.vx;
            const nextY = p.y + p.vy;
            const nextRotation = (p.rotation + p.rotationSpeed) % 360;
            const nextAlpha = p.alpha - 0.022; // Fade out rate

            return {
              ...p,
              x: nextX,
              y: nextY,
              rotation: nextRotation,
              alpha: nextAlpha,
            };
          })
          .filter((p) => p.alpha > 0); // Keep alive only positive alpha
      });

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {/* Whirling Leaves Trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.scale * p.alpha})`,
            opacity: p.alpha,
            color: p.color,
            transition: "transform 0.05s linear",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[1px_1px_1px_rgba(0,0,0,0.15)]">
            <path d={leafPaths[p.leafType]} />
            {/* Stem line */}
            <path d="M12,22 L12,12" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      ))}
    </div>
  );
}
