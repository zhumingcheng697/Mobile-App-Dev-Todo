function randomNumber(n, base = 10) {
  return [...Array(n)]
    .map(() => Math.floor(Math.random() * base).toString(base))
    .join("");
}

export { randomNumber };
