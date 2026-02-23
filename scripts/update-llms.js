import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SITE = "https://cowsinvaders.com";
const LANG_FILE = join(import.meta.dirname, "../src/i18n/langs/en.json");
const OUTPUT = join(import.meta.dirname, "../public/llms.txt");

function stripMarkdown(text) {
	return text
		.replace(/\*\*(.*?)\*\*/g, "$1")
		.replace(/\[(.*?)\]\(.*?\)/g, "$1")
		.replace(/\{\{.*?\}\}/g, "")
		.trim();
}

async function main() {
	const t = JSON.parse(await readFile(LANG_FILE, "utf-8"));

	const lines = [
		"# Cows Invaders",
		"",
		`> ${t["block.hero.text"]}`,
		"",
		`## ${t["block.media_game.title"]}`,
		"",
		stripMarkdown(t["block.media_game.text"]),
		"",
		`## ${t["block.media_genesis.title"]}`,
		"",
		stripMarkdown(t["block.media_genesis.text"]),
		"",
		`## ${t["block.media_about.title"]}`,
		"",
		stripMarkdown(t["block.media_about.text"]),
		"",
		"## Pages",
		"",
		`- [Home](${SITE}/)`,
		`- [Privacy](${SITE}/privacy/)`,
		`- [Credits](${SITE}/credits/)`,
		"",
	];

	await writeFile(OUTPUT, lines.join("\n"), "utf-8");
	console.log(`llms.txt generated → ${OUTPUT}`);
}

main();