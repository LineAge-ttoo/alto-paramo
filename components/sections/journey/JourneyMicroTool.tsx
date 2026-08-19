"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface JourneyMicroToolProps {
    stepId: number;
}

export default function JourneyMicroTool({ stepId }: JourneyMicroToolProps) {
    if (stepId === 1) {
        return <HarvestMaturityTool />;
    }
    if (stepId === 4) {
        return <FermentationCurveTool />;
    }
    if (stepId === 6) {
        return <DryingBedTool />;
    }
    if (stepId === 7) {
        return <RoastHeatTool />;
    }
    if (stepId === 8) {
        return <CuppingDimensionsTool />;
    }
    if (stepId === 9) {
        return <CupProportionTool />;
    }
    return null;
}

/**
 * HERRAMIENTA 01: RECOLECCIÓN — OBSERVAR LA MADUREZ
 */
function HarvestMaturityTool() {
    const [selected, setSelected] = useState<number>(2); // Default to ripe cherry

    const cherries = [
        {
            id: 0,
            label: "Verde",
            stateText: "Fruto verde · En desarrollo, no cosechable",
            color: "#5B7A49",
            halo: "rgba(91, 122, 73, 0.4)"
        },
        {
            id: 1,
            label: "Pintona",
            stateText: "Fruto pintón · Maduración parcial en rama",
            color: "#B4693D",
            halo: "rgba(180, 105, 61, 0.4)"
        },
        {
            id: 2,
            label: "Madura",
            stateText: "Cereza madura · Punto óptimo de cosecha",
            color: "#992626",
            halo: "rgba(215, 193, 138, 0.5)"
        }
    ];

    return (
        <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                Observar la madurez
            </p>

            {/* Cherry Selection Row */}
            <div className="mt-3 flex items-center justify-around rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                {cherries.map((cherry) => {
                    const isSelected = selected === cherry.id;
                    return (
                        <button
                            key={cherry.id}
                            type="button"
                            onClick={() => setSelected(cherry.id)}
                            aria-label={`Observar cereza ${cherry.label}`}
                            className="group flex min-h-[44px] min-w-[64px] flex-col items-center justify-center gap-2 focus:outline-none"
                        >
                            {/* Illustrated Cherry Graphic */}
                            <div className="relative flex items-center justify-center">
                                {/* Stalk */}
                                <svg
                                    width="12"
                                    height="10"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                    className="absolute -top-2 left-1/2 -translate-x-1/2"
                                >
                                    <path
                                        d="M6 10 C6 5, 10 3, 11 0"
                                        stroke="#7C6F58"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* Cherry Body */}
                                <motion.div
                                    animate={{
                                        scale: isSelected ? 1.15 : 1,
                                        boxShadow: isSelected
                                            ? `0 0 14px ${cherry.halo}`
                                            : "0 0 0px transparent"
                                    }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="h-7 w-7 rounded-full border border-white/20 transition-transform"
                                    style={{
                                        background: `radial-gradient(circle at 35% 35%, ${cherry.color}EE, ${cherry.color} 70%, #151515 100%)`
                                    }}
                                />
                            </div>

                            <span
                                className={`text-[11px] font-medium tracking-wider transition-colors ${
                                    isSelected ? "text-[#D7C18A]" : "text-white/50 group-hover:text-white/80"
                                }`}
                            >
                                {cherry.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Selected Cherry Observation Caption */}
            <p className="mt-2 text-center text-[11px] text-white/60">
                {cherries[selected].stateText}
            </p>
        </div>
    );
}

/**
 * HERRAMIENTA 04: FERMENTACIÓN — OBSERVAR EL TIEMPO
 */
function FermentationCurveTool() {
    const [progress, setProgress] = useState<number>(50);

    // Coordinate mapping along a gentle sigmoid curve (width 260, height 44)
    const curveX = (progress / 100) * 240 + 10;
    // Normalized sigmoid Y from high to low (fermentation transformation curve)
    const normalizedT = (progress - 50) / 18;
    const sigmoid = 1 / (1 + Math.exp(-normalizedT));
    const curveY = 36 - sigmoid * 26;

    return (
        <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                    Observar el proceso
                </p>
                <span className="text-[10px] tracking-wider text-white/40">
                    Exploración visual
                </span>
            </div>

            {/* Visual Curve Representation */}
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                <div className="relative flex h-14 w-full items-center justify-center">
                    <svg viewBox="0 0 260 48" className="h-full w-full overflow-visible">
                        <defs>
                            <linearGradient id="fermentCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7C6F58" stopOpacity="0.4" />
                                <stop offset={`${progress}%`} stopColor="#D7C18A" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#7C6F58" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>

                        {/* Background Base Curve */}
                        <path
                            d="M 10 36 C 90 36, 120 10, 250 10"
                            fill="none"
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        {/* Dynamic Progress Curve */}
                        <path
                            d="M 10 36 C 90 36, 120 10, 250 10"
                            fill="none"
                            stroke="url(#fermentCurveGrad)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        />

                        {/* Active Observation Node */}
                        <circle
                            cx={curveX}
                            cy={curveY}
                            r="5"
                            fill="#D7C18A"
                            stroke="#0B0A09"
                            strokeWidth="2"
                        />
                        <circle
                            cx={curveX}
                            cy={curveY}
                            r="9"
                            fill="none"
                            stroke="rgba(215,193,138,0.35)"
                            strokeWidth="1"
                        />
                    </svg>
                </div>

                {/* Accessible Slider Control */}
                <div className="mt-1 flex items-center gap-3">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={(e) => setProgress(Number(e.target.value))}
                        aria-label="Exploración visual del avance de fermentación"
                        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#D7C18A] focus:outline-none"
                    />
                </div>
            </div>

            <p className="mt-2 text-center text-[11px] text-white/50">
                Curva de transformación aromática sin medición fija
            </p>
        </div>
    );
}

/**
 * HERRAMIENTA 06: SECADO — DISTRIBUIR EL GRANO
 */
function DryingBedTool() {
    const [spread, setSpread] = useState<number>(30); // 0 = clustered, 100 = evenly spread

    // 14 abstract bean definitions with base (clustered) and spread offsets
    const beans = [
        { id: 1, baseX: 35, baseY: 30, spreadX: 15, spreadY: 20 },
        { id: 2, baseX: 42, baseY: 40, spreadX: 30, spreadY: 25 },
        { id: 3, baseX: 48, baseY: 35, spreadX: 45, spreadY: 20 },
        { id: 4, baseX: 55, baseY: 42, spreadX: 60, spreadY: 25 },
        { id: 5, baseX: 62, baseY: 32, spreadX: 75, spreadY: 22 },
        { id: 6, baseX: 68, baseY: 45, spreadX: 88, spreadY: 28 },
        { id: 7, baseX: 38, baseY: 55, spreadX: 18, spreadY: 55 },
        { id: 8, baseX: 45, baseY: 65, spreadX: 32, spreadY: 60 },
        { id: 9, baseX: 52, baseY: 58, spreadX: 48, spreadY: 52 },
        { id: 10, baseX: 58, baseY: 68, spreadX: 62, spreadY: 62 },
        { id: 11, baseX: 65, baseY: 55, spreadX: 78, spreadY: 56 },
        { id: 12, baseX: 44, baseY: 48, spreadX: 25, spreadY: 42 },
        { id: 13, baseX: 56, baseY: 48, spreadX: 52, spreadY: 40 },
        { id: 14, baseX: 64, baseY: 42, spreadX: 70, spreadY: 44 }
    ];

    const factor = spread / 100;

    return (
        <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                    Observar la distribución
                </p>
                <span className="text-[10px] tracking-wider text-white/40">
                    Bandeja solar
                </span>
            </div>

            {/* Drying Bed Mesh Stage */}
            <div className="mt-3 rounded-2xl border border-white/10 bg-black/30 p-3">
                <div className="relative h-16 w-full overflow-hidden rounded-xl border border-white/5 bg-[#121110]">
                    {/* Mesh grid pattern */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(215,193,138,0.4) 1px, transparent 1px)",
                            backgroundSize: "8px 8px"
                        }}
                    />

                    {/* Stylized Coffee Beans */}
                    {beans.map((b) => {
                        const currentX = b.baseX + (b.spreadX - b.baseX) * factor;
                        const currentY = b.baseY + (b.spreadY - b.baseY) * factor;

                        return (
                            <motion.div
                                key={b.id}
                                animate={{
                                    left: `${currentX}%`,
                                    top: `${currentY}%`
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="relative h-2 w-3.5 rounded-full border border-[#D7C18A]/40 bg-[#A68953]">
                                    <div className="absolute inset-y-0 left-1/2 w-[0.5px] -translate-x-1/2 bg-[#5B4627]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Interactive Spread Slider */}
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                        Agrupado
                    </span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={spread}
                        onChange={(e) => setSpread(Number(e.target.value))}
                        aria-label="Distribuir granos en la bandeja de secado"
                        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#D7C18A] focus:outline-none"
                    />
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                        Uniforme
                    </span>
                </div>
            </div>

            <p className="mt-2 text-center text-[11px] text-white/50">
                El rastrillado constante previene fermentaciones irregulares
            </p>
        </div>
    );
}

/**
 * HERRAMIENTA 07: TUESTE — REVELAR CON EL CALOR
 */
function RoastHeatTool() {
    const [roastProgress, setRoastProgress] = useState<number>(55);

    // Color transition from straw/tan (#C8B08A) to medium caramel roast (#5A311A)
    const factor = roastProgress / 100;
    
    // Subtle RGB interpolation for bean color:
    // Start: R 200, G 176, B 138 (pajizo/claro)
    // End:   R 84,  G 48,  B 27  (caramelo medio tostado)
    const r = Math.round(200 - factor * 116);
    const g = Math.round(176 - factor * 128);
    const b = Math.round(138 - factor * 111);
    const beanColor = `rgb(${r}, ${g}, ${b})`;
    const creaseColor = `rgb(${Math.max(20, r - 40)}, ${Math.max(10, g - 40)}, ${Math.max(5, b - 30)})`;

    return (
        <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                    Observar la transformación
                </p>
                <span className="text-[10px] tracking-wider text-white/40">
                    Exploración visual
                </span>
            </div>

            {/* Beans Row & Heat Curve */}
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                {/* Visual illustrated beans array */}
                <div className="flex items-center justify-around py-2">
                    {[1, 2, 3, 4, 5, 6].map((beanId) => (
                        <motion.div
                            key={beanId}
                            animate={{
                                backgroundColor: beanColor,
                                scale: 1 + factor * 0.08
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative h-4 w-6 rounded-full border border-white/15 shadow-sm"
                        >
                            {/* Characteristic center fissure */}
                            <div
                                className="absolute inset-y-0.5 left-1/2 w-[1px] -translate-x-1/2 rounded-full transition-colors"
                                style={{ backgroundColor: creaseColor }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Thermal curve slider */}
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                        Verde
                    </span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={roastProgress}
                        onChange={(e) => setRoastProgress(Number(e.target.value))}
                        aria-label="Exploración visual de la transformación térmica del grano"
                        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#D7C18A] focus:outline-none"
                    />
                    <span className="text-[10px] uppercase tracking-wider text-[#D7C18A]">
                        Tostado
                    </span>
                </div>
            </div>

            <p className="mt-2 text-center text-[11px] text-white/50">
                El calor despierta compuestos aromáticos sin carbonizar el grano
            </p>
        </div>
    );
}

/**
 * HERRAMIENTA 08: CATACIÓN — LEER LA TAZA
 */
function CuppingDimensionsTool() {
    const [selectedDim, setSelectedDim] = useState<string>("aroma");

    const dimensions = [
        {
            id: "aroma",
            label: "Aroma",
            desc: "Fragancia en seco y aroma en infusión que revelan el origen botánico.",
            bias: { top: 75, right: 35, bottom: 35, left: 35 }
        },
        {
            id: "acidez",
            label: "Acidez",
            desc: "Brillo natural málico y cítrico originado por la altitud volcánica.",
            bias: { top: 35, right: 75, bottom: 35, left: 35 }
        },
        {
            id: "dulzor",
            label: "Dulzor",
            desc: "Presencia de azúcares caramelizados durante la maduración lenta.",
            bias: { top: 35, right: 35, bottom: 75, left: 35 }
        },
        {
            id: "cuerpo",
            label: "Cuerpo",
            desc: "Textura táctil y sedosidad en el paladar propia del varietal.",
            bias: { top: 35, right: 35, bottom: 35, left: 75 }
        }
    ];

    const activeDimObj = dimensions.find((d) => d.id === selectedDim) || dimensions[0];

    return (
        <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                    Explorar dimensiones
                </p>
                <span className="text-[10px] tracking-wider text-white/40">
                    Mesa sensorial
                </span>
            </div>

            {/* Organic 4-Dimension Radial Observation Widget */}
            <div className="mt-3 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                {/* 4 Interactive Dimension Buttons */}
                <div className="grid w-full grid-cols-4 gap-2">
                    {dimensions.map((dim) => {
                        const isCurrent = selectedDim === dim.id;
                        return (
                            <button
                                key={dim.id}
                                type="button"
                                onClick={() => setSelectedDim(dim.id)}
                                aria-label={`Explorar dimensión sensorial ${dim.label}`}
                                className={`
                                    flex min-h-[44px] flex-col items-center justify-center rounded-xl p-2 text-center transition-all duration-200
                                    ${
                                        isCurrent
                                            ? "border border-[#D7C18A]/60 bg-[#D7C18A]/10 text-white shadow-[0_0_12px_rgba(215,193,138,0.15)]"
                                            : "border border-white/5 bg-black/20 text-white/50 hover:border-white/20 hover:text-white/80"
                                    }
                                `}
                            >
                                <span
                                    className={`text-xs font-semibold uppercase tracking-wider ${
                                        isCurrent ? "text-[#D7C18A]" : "text-white/60"
                                    }`}
                                >
                                    {dim.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Dimension Editorial Detail Note */}
                <p className="min-h-[32px] text-center text-xs leading-5 text-white/75 sm:text-sm">
                    {activeDimObj.desc}
                </p>
            </div>

            <p className="mt-2 text-center text-[11px] text-white/50">
                Dimensiones sensoriales observadas en mesa de catación
            </p>
        </div>
    );
}

/**
 * HERRAMIENTA 09: LA TAZA — PROPORCIÓN VISUAL
 */
function CupProportionTool() {
    const [ratioValue, setRatioValue] = useState<number>(50); // 50 = equilibrium

    // Check if within balanced zone
    const isBalanced = ratioValue >= 40 && ratioValue <= 60;
    // Water level calculation: 30% to 75%
    const waterLevel = 30 + (ratioValue / 100) * 45;

    return (
        <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                    Relación café y agua
                </p>
                <span className="text-[10px] tracking-wider text-white/40">
                    Proporción visual
                </span>
            </div>

            {/* Visual Cup and Balance Representation */}
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
                <div className="flex items-center justify-center gap-6 py-1">
                    {/* Stylized Vessel Graphic */}
                    <div className="relative h-12 w-16 overflow-hidden rounded-b-2xl border-2 border-white/30 bg-black/40">
                        {/* Liquid fill */}
                        <motion.div
                            animate={{ height: `${waterLevel}%` }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#6A4023] to-[#A88252]"
                        />
                        {/* Cup handle */}
                        <div className="absolute -right-2 top-2 h-5 w-2 rounded-r-md border-r-2 border-y-2 border-white/30" />
                    </div>

                    {/* Balance State Callout */}
                    <div className="flex flex-col items-start">
                        <span
                            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all ${
                                isBalanced
                                    ? "border border-[#D7C18A]/50 bg-[#D7C18A]/15 text-[#D7C18A]"
                                    : "border border-white/10 bg-white/5 text-white/50"
                            }`}
                        >
                            {isBalanced ? "Equilibrio" : "En ajuste"}
                        </span>
                    </div>
                </div>

                {/* Interactive Proportion Slider */}
                <div className="mt-3 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">
                        Café
                    </span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={ratioValue}
                        onChange={(e) => setRatioValue(Number(e.target.value))}
                        aria-label="Ajustar proporción visual entre café y agua"
                        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[#D7C18A] focus:outline-none"
                    />
                    <span className="text-[10px] uppercase tracking-wider text-white/50">
                        Agua
                    </span>
                </div>
            </div>

            <p className="mt-2 text-center text-[11px] text-white/50">
                La armonía entre grano y agua permite revelar la expresión limpia del origen
            </p>
        </div>
    );
}
