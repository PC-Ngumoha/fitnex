import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
    text: string
}

const SpotlightButton = ({ text }: Props) => {
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const spanRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const currentbtnRef = btnRef?.current
        const handleMouseMove = (e: MouseEvent) => {
            const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
            const offset = e.offsetX;
            const left = `${(offset / width) * 100}%`;

            spanRef.current!.animate({ left }, { duration: 250, fill: "forwards" });
        };

        const handleMouseLeave = () => {
            spanRef.current!.animate(
                { left: "50%" },
                { duration: 100, fill: "forwards" }
            );
        };

        currentbtnRef?.addEventListener("mousemove", handleMouseMove);
        currentbtnRef?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            currentbtnRef?.removeEventListener("mousemove", handleMouseMove);
            currentbtnRef?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <motion.button
            ref={btnRef}
            className="relative w-full h-10 px-6 py-4 flex items-center justify-center max-w-xs overflow-hidden rounded-lg font-medium text-white border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
            <span className="pointer-events-none relative z-10 text-slate-700 text-md font-medium p-4">
                {text}
            </span>
            <span
                ref={spanRef}
                className="pointer-events-none absolute left-[50%] top-[50%] h-20 w-20 -translate-x-[50%] -translate-y-[50%] rounded-full bg-gradient-to-r from-blue-500 to-blue-100 filter blur-sm"
            />
        </motion.button>
    );
};

export default SpotlightButton;