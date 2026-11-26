// Tests for the weirdest-job-title emitter (node --test test.ts).
//
// Gate checks run against the file main.ts actually wrote: strict UTF-8
// decoding, exact bytes, 1-60 code points, non-whitespace, no trailing
// newline, mode 0644, and two runs producing byte-identical output.

import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = "/output/entry.txt";
const TITLE = "Senior Vice President of Apologizing to Cats";
const MAIN = fileURLToPath(new URL("./main.ts", import.meta.url));

function runEmitter(): void {
  const result = spawnSync(process.execPath, [MAIN], { encoding: "utf8" });
  assert.equal(result.status, 0, `main.ts exited ${result.status}: ${result.stderr}`);
}

test("gate: exact bytes, 1-60 chars, non-whitespace, no newline", () => {
  runEmitter();
  const bytes = readFileSync(OUT);
  assert.deepEqual(bytes, Buffer.from(TITLE, "utf8"));
  const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  assert.equal(text, TITLE);
  assert.ok([...text].length >= 1 && [...text].length <= 60);
  assert.ok(text.trim().length > 0);
  assert.equal(text.trim(), text);
  assert.ok(!text.includes("\n") && !text.includes("\r"));
  assert.ok(!/[\u0000-\u001f\u007f]/.test(text), "no control characters");
});

test("file mode is 0644", () => {
  runEmitter();
  assert.equal(statSync(OUT).mode & 0o777, 0o644);
});

test("title is 44 code points and 44 bytes", () => {
  runEmitter();
  const bytes = readFileSync(OUT);
  assert.equal(bytes.length, 44);
  assert.equal([...new TextDecoder("utf-8", { fatal: true }).decode(bytes)].length, 44);
});

test("two runs are byte-identical", () => {
  runEmitter();
  const first = readFileSync(OUT);
  runEmitter();
  const second = readFileSync(OUT);
  assert.deepEqual(first, second);
});
