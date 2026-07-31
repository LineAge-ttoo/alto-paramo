const WIDTH = 60;

export function banner(title, subtitle = "") {
    const line = "=".repeat(WIDTH);

    console.clear();

    console.log(line);
    console.log("DAVID DEVELOPER TOOLKIT");
    console.log(line);

    console.log(`\n${title}`);

    if (subtitle) {
        console.log(subtitle);
    }

    console.log("");
}