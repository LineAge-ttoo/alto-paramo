export function info(message) {
    console.log(`ℹ ${message}`);
}

export function success(message) {
    console.log(`✅ ${message}`);
}

export function warning(message) {
    console.log(`🟡 ${message}`);
}

export function error(message) {
    console.log(`❌ ${message}`);
}

export function section(name) {
    console.log(`\n▶ ${name}`);
}