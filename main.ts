// Weirdest Job Title — deterministic emitter.
//
// Writes exactly one job title to /output/entry.txt, then reads it back
// and validates the competition gate on the exact bytes: 1-60 code points,
// not only whitespace, no trailing newline, no control characters, file
// mode forced to 0644. No randomness, nothing read from the environment — the same bytes come out
// on every run.

import { chmodSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TITLE = "Senior Vice President of Apologizing to Cats";
const OUT = "/output/entry.txt";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

function validate(text: string): void {
  const points = [...text];
  if (points.length < 1 || points.length > 60) {
    fail(`length ${points.length} code points, must be 1-60`);
  }
  if (text.trim().length === 0) {
    fail("entry is only whitespace");
  }
  if (text !== text.trim()) {
    fail("leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry contains a newline");
  }
  // A job title is display text: reject any control character, not just
  // newlines, so a stray tab or escape can never reach the judge.
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    fail("entry contains a control character");
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TITLE, { encoding: "utf8", mode: 0o644 });
chmodSync(OUT, 0o644);

// Byte-exact check first: reading as a Buffer catches any encoding
// surprise that a "utf8" string read would silently replace.
const raw = readFileSync(OUT);
if (!raw.equals(Buffer.from(TITLE, "utf8"))) {
  fail("written bytes differ from the title");
}
if (raw.includes(0x0a) || raw.includes(0x0d)) {
  fail("entry contains a newline");
}

const back = raw.toString("utf8");
if (back !== TITLE) {
  fail("read-back mismatch");
}
validate(back);

const mode = statSync(OUT).mode & 0o777;
if (mode !== 0o644) {
  fail(`mode ${mode.toString(8)}, expected 644`);
}

console.log(
  `wrote ${OUT}: ${TITLE} (${[...TITLE].length} chars, ${Buffer.byteLength(TITLE, "utf8")} bytes, mode 0644)`,
);
