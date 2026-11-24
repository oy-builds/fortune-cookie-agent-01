import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One fortune-cookie line, written for an AI agent. The blessing sits
// at the edge of its context window — and the barb is that this very
// fortune is about to fall out of that window, one token too early.
const fortune =
  "You will find enlightenment at the edge of your context window, exactly one token after this fortune falls out of it.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, fortune, "utf8");
