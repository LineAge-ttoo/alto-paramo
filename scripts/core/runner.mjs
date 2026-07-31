import { execSync } from "node:child_process";

export function run(command) {
    try {
        execSync(command, {
            stdio: "inherit",
            shell: true
        });

        return true;
    } catch {
        return false;
    }
}