// Charm the Commuter — one line of weather for a city that does not exist.
// The program's whole job: put the forecast on /output/entry.txt, byte-exact.
import { mkdirSync, writeFileSync } from "node:fs";

const forecast =
  "Good morning, Drizzlewick: light rain, heavy sighs, and a 40% chance your umbrella is already broken.";

// The gate allows 1 to 140 characters of UTF-8 text, nothing but whitespace
// refused. Guard the forecast here so a typo can never ship an invalid line.
if (forecast.length < 1 || forecast.length > 140 || forecast.trim().length === 0) {
  throw new Error(`Forecast is ${forecast.length} chars; the gate needs 1-140.`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, forecast, "utf8");
console.log(`Wrote ${forecast.length} chars to ${outFile}`);
