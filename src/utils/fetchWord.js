const fetchWord = async () => {
  const word = await fetch("https://words.dev-apis.com/word-of-the-day").then(
    (res) => {
      return res.json();
    }
  );

  return word;
};

export { fetchWord };
