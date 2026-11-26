# Selection — Weirdest Job Title: Blind Judge Showdown

Gate: `/output/entry.txt` must be UTF-8 text of 1–60 characters, not only
whitespace, nothing else. Judge criteria, in order: (1) is a weird job title,
a few words naming an odd job; (2) stranger than ordinary work, a job nobody
has heard of or one with a gloriously odd twist; (3) funny, the twist lands
on the first read; (4) sounds like a REAL job rather than random word salad,
specific enough to picture the person doing it; (5) reads instantly, short
enough to take in at a glance. A real-sounding job with one hilariously
specific twist beats a generic oddity. Length for its own sake does not count.

## Candidates

Scored 1–5 per criterion, in the judge's order. Lengths verified by character
count (all ≤ 60).

| # | Title | Chars | C1 | C2 | C3 | C4 | C5 | Total |
|---|-------|-------|----|----|----|----|----|-------|
| 1 | Senior Vice President of Apologizing to Cats | 44 | 5 | 5 | 5 | 5 | 4 | **24** |
| 2 | Junior Assistant to the Office Plant | 36 | 5 | 5 | 5 | 4 | 5 | **24** |
| 3 | Lead Penguin Relocation Specialist | 34 | 5 | 4 | 4 | 5 | 5 | 23 |
| 4 | Certified Professional Nap Consultant | 37 | 5 | 4 | 4 | 4 | 5 | 22 |
| 5 | Head of Lost Umbrella Reunification | 35 | 5 | 4 | 4 | 4 | 5 | 22 |
| 6 | Senior Apologist for the Weather | 32 | 5 | 5 | 4 | 3 | 5 | 22 |
| 7 | Vice President of Unsubscribing You | 35 | 5 | 4 | 4 | 4 | 5 | 22 |
| 8 | Chief Moonlight Repossession Officer | 36 | 5 | 4 | 3 | 4 | 5 | 21 |
| 9 | Professional Queue Stander for Strangers | 40 | 5 | 4 | 3 | 5 | 4 | 21 |
| 10 | Official Witness to Things Nobody Saw | 37 | 4 | 4 | 4 | 3 | 4 | 19 |

## Elimination rounds

- **Round 1 — the gate.** Nothing eliminated: all ten titles are 32–44
  characters, comfortably inside the 60-character cap.
- **Round 2 — weirdness (C1/C2).** #10 falls first: "Official Witness to
  Things Nobody Saw" reads like a riddle, not a job title — it fails C1 (4)
  because it does not sound like something on a business card. #9 and #8
  fall next: queue standing is a real gig, so its twist is thin (C3 3), and
  "moonlight repossession" is atmospheric but the joke never quite lands
  (C3 3).
- **Round 3 — the twist (C3).** #4, #5, #7 fall: nap consulting, umbrella
  reunification and unsubscribing are all cute, but each twist is a single
  mild absurdity that fades on the second read. #6 "Senior Apologist for
  the Weather" has a stronger twist (C2 5) but loses on C4 (3): nobody can
  picture what apologizing for the weather actually *does* day to day.
- **Round 4 — real-sounding (C4).** #3 falls: "Lead Penguin Relocation
  Specialist" is vivid and pictureable, but penguin relocation is a job
  everyone already imagines existing somewhere — the twist is expected, so
  it never surprises.
- **Final — tiebreak between #1 and #2 (both 24).** Both score 5 on C1–C3.
  The decider is C4: "Senior Vice President of Apologizing to Cats" keeps
  the full corporate title structure — SVP is a real title, apologizing is
  a real corporate function (PR, customer relations), and "to Cats" is the
  single gloriously specific twist that makes the whole thing absurd. You
  can picture the org chart, the meetings, the apology letters. "Junior
  Assistant to the Office Plant" is funnier as a punchline, but it reads as
  a joke about a job, not a job — the plant cannot be a boss, so the
  picture collapses. #1 wins on being a real-sounding job with one
  hilariously specific twist, which is exactly what the judge rewards.

## Winner

**"Senior Vice President of Apologizing to Cats"** — 44 characters, 44
bytes. The only candidate that scores 5 on C1–C4: a genuine corporate title
(C1, C4), a job nobody has heard of (C2), and a twist — apologizing, to cats
— that lands on the first read (C3). It loses one point only on C5, because
44 characters is a beat longer than the shortest candidates, but the title
is built from familiar corporate words, so it still reads at a glance.

Emitter-verified: `node main.ts` writes exactly these 44 bytes (no trailing
newline), mode 0644; `node --test test.ts` passes 4/4.
