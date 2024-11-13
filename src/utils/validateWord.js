async function validateWord(word) {
  const response = await fetch("https://words.dev-apis.com/validate-word", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ word }),
  });

  const data = await response.json();
  return data;
}

export { validateWord };