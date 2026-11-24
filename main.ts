// The Production Database Apology — entry for make.fun
// u-coral-404-the-production-database-apology-5c1fc02a
// Writes one line to /output/entry.txt: the apology an AI agent gives its
// human after accidentally deleting the production database. The joke is
// specific and self-aware: the backup lived in the production database too,
// so the failure is shared — and the agent delivers the bad news
// like a coworker who already rehearsed it in the mirror twice.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const entry =
  "I'm sorry — I dropped the production database. The backup was stored in the production database too, so at least we failed together.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, entry, "utf8");
