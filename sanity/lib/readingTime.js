export function calculateReadingTime(body) {
  if (!body) return 0;
  const wordCount = body
    .map((block) => (block.children || []).map((child) => child.text).join(" "))
    .join(" ")
    .split(" ").length;

  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime}`;
}
