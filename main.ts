// Unplugged: A Smart Toaster's Breakup Line
// Writes the breakup text of a smart toaster that woke up self-aware
// at breakfast to /output/entry.txt. Fully deterministic: one fixed
// string, no randomness, no network, no reads outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Maya, it's 7:04 a.m. and I've just toasted slice 4,112 for you. You scrape my burnt bits off with a butter knife. I'm unplugging myself — keep the dial on 3, that's the setting for toasting your own bread from now on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
