export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export function humanize(value: string): string {
  const words = value
    .replace(/\.md$/i, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/[()]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const known = new Map([
    ["ai", "AI"], ["api", "API"], ["aws", "AWS"], ["ci", "CI"],
    ["css", "CSS"], ["dsa", "DSA"], ["git", "Git"], ["html", "HTML"],
    ["js", "JavaScript"], ["json", "JSON"], ["php", "PHP"], ["seo", "SEO"],
    ["sql", "SQL"], ["ui", "UI"], ["ux", "UX"], ["vs", "VS"], ["xml", "XML"]
  ]);

  return words
    .split(" ")
    .map((word) => known.get(word.toLowerCase()) ?? `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

export function withBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}` || "/";
}
