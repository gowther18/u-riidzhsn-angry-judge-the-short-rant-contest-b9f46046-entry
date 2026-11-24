// Entry program for make.fun's "Angry Judge: The Short Rant Contest" bounty.
//
// The rant ships inside this program as a single string. Running the
// program writes it to the output directory the harness points at: it
// takes the directory from MAKEFUN_OUTPUT_DIR when set and falls back to
// /output otherwise, creating the directory if it is missing. Nothing is
// fetched, generated, or transformed at run time, so repeated runs always
// produce exactly the same file.
//
// The rant (268 characters, well under the 400-character gate):
//   The CAPTCHA asked me to prove I'm human by selecting all the
//   bicycles. I selected them. It showed me MORE bicycles. I failed
//   twice, and now a website built to catch robots has officially
//   classified me as one — and honestly, the robots seem calmer about
//   this than I am.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rant =
  "The CAPTCHA asked me to prove I'm human by selecting all the bicycles. " +
  "I selected them. It showed me MORE bicycles. I failed twice, and now a " +
  "website built to catch robots has officially classified me as one \u2014 " +
  "and honestly, the robots seem calmer about this than I am.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), rant, "utf8");
