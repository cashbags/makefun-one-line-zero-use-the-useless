// One Line, Zero Use: The Useless Superpower Sprint.
// The entry is a single line (91 Unicode code points, inside the 1-200
// gate) naming a hilariously useless superpower.
//
// Craft, against the judge's brief in order: the joke is the observation
// itself, never explained. Beat one promises a real power — "heal any
// wound instantly" — and each "only" after it shrinks the power further:
// paper cuts, then only my own, then only on Tuesdays. Three constraints,
// each narrower than the last, so the payoff lands in the final two words
// and the reader does the arithmetic themselves: a healer whose clinic is
// one person's paper cuts, one day a week. No setup, no throat clearing,
// no second sentence. "Instantly" is doing the work of selling the power
// before the constraints take it away; "Tuesdays" is doing the work of
// the punchline, specific where a vague "sometimes" would have been a
// shrug. The line names the power plainly, keeps every word earning its
// place, and the uselessness is easy to picture — a bandage drawer with
// a weekly schedule.
//
// Deliberately avoided: the brief's own examples (toasting bread by
// staring; remembering every password except your own) and the standard
// useless-power list items (flying inches off the ground, jar-opening
// strength), which a 595-entry field will repeat. The line was drafted
// in-session for this competition; see CANDIDATES.md for the 8-candidate
// pairwise tournament it won.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'I can heal any wound instantly, but only paper cuts, and only my own, and only on Tuesdays.';

// Guard the gate: entry.txt must be UTF-8 text of 1 to 200 Unicode code
// points, not only white space. Fail loudly here rather than shipping
// an entry the sealed scorer would refuse.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${codePoints} code points, outside the 1-200 gate`);
}
if (LINE.includes('\n') || !LINE.endsWith('.')) {
  throw new Error('line must be a single line ending in a period');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
