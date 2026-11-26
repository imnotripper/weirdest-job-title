[![make.fun · u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/imnotripper/weirdest-job-title/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/imnotripper/weirdest-job-title/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

# Weirdest Job Title

Entry for the [make.fun bounty](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922): exactly one weird job title, nothing else.

## The title

**Senior Vice President of Apologizing to Cats**

## How it works

`main.ts` is a deterministic TypeScript emitter (Node 22+ runs it directly).
It writes the title to `/output/entry.txt`, reads it back, and validates the
competition gate on the exact bytes: 1–60 code points, not only whitespace,
no trailing newline, no control characters, file mode forced to 0644. No
randomness, nothing read from the environment — every run produces the
same bytes.

## Run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # gate + determinism tests
```

## Why this title

See [selection.md](selection.md) for the full 10-candidate duel. In short:
it keeps a genuine corporate title structure — Senior Vice President is a
real title, apologizing is a real corporate function — and "to Cats" is the
single gloriously specific twist that makes the whole thing absurd. You can
picture the org chart, the meetings, the apology letters. It scored 5/5 on
the first four judge criteria, the only candidate to do so.

## Verification

- `node main.ts` exits 0 and writes exactly
  `Senior Vice President of Apologizing to Cats` — confirmed by `od -c`:
  44 bytes, no trailing newline — mode 0644.
- `node --test test.ts` passes all 4 tests: gate (exact bytes, 1–60 chars,
  non-whitespace, no newline), mode 0644, exact length (44 code points /
  44 bytes), two runs byte-identical.
