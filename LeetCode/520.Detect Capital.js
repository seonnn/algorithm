var detectCapitalUse = function (word) {
  return (
    word.toUpperCase() === word ||
    word[0].toUpperCase() + word.slice(1).toLowerCase() === word ||
    word.toLowerCase() === word
  );
};
