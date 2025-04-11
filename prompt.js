

function genratePrompt(word) {
  return `You are a friendly and family-safe meme writer. 
  Write a short, funny, and clean joke suitable for all ages, about '${word}.
   The meme should not include any offensive, political, religious, or adult content. 
   Make sure it is not that much lighthearted, positive.
   Format the joke as a short two, three-liner or a question and answer.`;

}

module.exports = genratePrompt;

// Example usage
// const userinput = "cats";
// const prompt = genrateprompt(userinput);
// console.log(prompt);