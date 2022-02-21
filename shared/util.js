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

export { randomNumber, dateToString };
