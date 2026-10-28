import { useEffect, useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useReducedMotion,
} from "motion/react";

const GAP = 32; // space between dots
const RADIUS = 130; // how far the cursor glow reaches
const SPEED = (Math.PI * 2) / 150; // radians per second (one full turn every 150s)
const BASE = "rgba(163,185,204,0.22)";
const GLOW = "255,200,87"; // amber
const TAU = Math.PI * 2;

export default function DotGrid() {
    const canvas = useRef(null);
    const reduce = useReducedMotion();
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 500, damping: 40 });
    const sy = useSpring(y, { stiffness: 500, damping: 40 });
    const [shown, setShown] = useState(false);
    const [hot, setHot] = useState(false);

    useEffect(() => {
        const c = canvas.current;
        const ctx = c.getContext("2d");
        const m = { x: -999, y: -999 };
        let raf = 0;

        const draw = (now = 0) => {
            const dpr = window.devicePixelRatio || 1;
            const w = window.innerWidth,
                h = window.innerHeight;
            if (c.width !== w * dpr || c.height !== h * dpr) {
                c.width = w * dpr;
                c.height = h * dpr;
            }
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, w, h);

            const a = reduce ? 0 : (now / 1000) * SPEED;
            const cos = Math.cos(a),
                sin = Math.sin(a);
            const cx = w / 2,
                cy = h / 2;
            const n = Math.ceil(Math.hypot(w, h) / 2 / GAP);
            const lit = [];

            ctx.fillStyle = BASE;
            ctx.beginPath();
            for (let i = -n; i <= n; i++) {
                for (let j = -n; j <= n; j++) {
                    const gx = i * GAP,
                        gy = j * GAP;
                    const rx = cx + gx * cos - gy * sin;
                    const ry = cy + gx * sin + gy * cos;
                    if (rx < -GAP || rx > w + GAP || ry < -GAP || ry > h + GAP)
                        continue;
                    const t = 1 - Math.hypot(rx - m.x, ry - m.y) / RADIUS;
                    if (t > 0) lit.push(rx, ry, t);
                    else {
                        ctx.moveTo(rx + 1, ry);
                        ctx.arc(rx, ry, 1, 0, TAU);
                    }
                }
            }
            ctx.fill();

            for (let k = 0; k < lit.length; k += 3) {
                ctx.fillStyle = `rgba(${GLOW},${0.15 + lit[k + 2] * 0.85})`;
                ctx.beginPath();
                ctx.arc(lit[k], lit[k + 1], 1 + lit[k + 2] * 1.2, 0, TAU);
                ctx.fill();
            }
            if (!reduce) raf = requestAnimationFrame(draw);
        };

        const move = (e) => {
            if (e.pointerType !== "mouse") return;
            m.x = e.clientX;
            m.y = e.clientY;
            x.set(e.clientX);
            y.set(e.clientY);
            setShown(true);
            setHot(!!e.target.closest?.("a,button,input,textarea"));
        };
        const leave = () => {
            m.x = m.y = -999;
            setShown(false);
        };
        const resize = () => {
            if (reduce) draw();
        };

        draw();
        window.addEventListener("resize", resize);
        if (!reduce) {
            window.addEventListener("pointermove", move);
            document.documentElement.addEventListener("pointerleave", leave);
        }
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", move);
            document.documentElement.removeEventListener("pointerleave", leave);
        };
    }, [reduce, x, y]);

    const corners = [
        "left-0 top-0 border-l-2 border-t-2",
        "right-0 top-0 border-r-2 border-t-2",
        "bottom-0 left-0 border-b-2 border-l-2",
        "bottom-0 right-0 border-b-2 border-r-2",
    ];

    return (
        <>
            <canvas
                ref={canvas}
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
            />
            {!reduce && (
                <motion.div
                    aria-hidden="true"
                    style={{ x: sx, y: sy }}
                    animate={{
                        opacity: shown ? 1 : 0,
                        scale: hot ? 1.5 : 1,
                        rotate: 360,
                    }}
                    transition={{
                        duration: 0.2,
                        rotate: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                    className="pointer-events-none fixed left-0 top-0 z-70 -ml-3.5 -mt-3.5 size-8"
                >
                    {corners.map((c) => (
                        <span
                            key={c}
                            className={`absolute size-2 border-ink ${c}`}
                        />
                    ))}
                    <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
                </motion.div>
            )}
        </>
    );
}
