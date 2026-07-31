#!/usr/bin/env node

import { banner } from "./core/banner.mjs";
import {
    section,
    success,
    warning
} from "./core/logger.mjs";

import { run } from "./core/runner.mjs";

banner("DOCTOR", "Proyecto: Alto Páramo");

const checks = [
    {
        name: "Estado de Git",
        command: "git status --short"
    },
    {
        name: "TypeScript",
        command: "npx tsc --noEmit"
    },
    {
        name: "ESLint",
        command: "npx eslint ."
    },
    {
        name: "Dependencias circulares",
        command: "npx madge --circular ."
    },
    {
        name: "Dependencias",
        command: "npx depcheck"
    },
    {
        name: "Archivos sin uso",
        command: "npx knip"
    }
];

let passed = 0;

for (const check of checks) {

    section(check.name);

    const ok = run(check.command);

    if (ok) {
        success(check.name);
        passed++;
    } else {
        warning(`${check.name} terminó con hallazgos.`);
    }

}

console.log("\n==========================================");
console.log(`Checks ejecutados: ${checks.length}`);
console.log(`Sin incidencias:   ${passed}`);
console.log(`Con hallazgos:     ${checks.length - passed}`);
console.log("==========================================");