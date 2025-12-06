import { execSync } from "child_process";
import fs from "fs";
import path from "path";

export default function remarkModifiedTime() {
  return async (tree, vfile) => {
    try {
      if (!vfile || !vfile.path) return;
      const filePath = path.resolve(vfile.path);
      if (!fs.existsSync(filePath)) return;
      const iso = execSync(`git log -1 --pretty=format:%cI -- "${filePath}"`, { encoding: "utf8" }).trim();
      if (!iso) return;
      vfile.data = vfile.data || {};
      vfile.data.frontmatter = vfile.data.frontmatter || {};
      vfile.data.frontmatter.lastModified = iso;
      vfile.data.lastModified = iso;
    } catch (e) {
      // 忽略错误（例如非 git 环境或文件未提交）
    }
  };
}
