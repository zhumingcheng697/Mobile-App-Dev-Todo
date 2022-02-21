function randomNumber(n, base = 10) {
  return [...Array(n)]
    .map(() => Math.floor(Math.random() * base).toString(base))
    .join("");
}

function dateToString(
  date,
  format = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }
) {
  return date.toLocaleString(undefined, format);
}

function spreadStyle(style) {
  if (!style) {
    return [];
  }

  if (Array.isArray(style)) {
    return style;
  } else {
    return [style];
  }
}

export { randomNumber, dateToString, spreadStyle };
