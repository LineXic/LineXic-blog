import { execSync } from "node:child_process";

export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history && file.history[0];
    try {
      const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`, {
        encoding: "utf8",
      }).trim();

      file.data = file.data || {};
      file.data.astro = file.data.astro || {};
      file.data.astro.frontmatter = file.data.astro.frontmatter || {};
      file.data.astro.frontmatter.lastModified = result;
    } catch (err) {
      file.data = file.data || {};
      file.data.astro = file.data.astro || {};
      file.data.astro.frontmatter = file.data.astro.frontmatter || {};
      file.data.astro.frontmatter.lastModified = null;
    }
  };
}
