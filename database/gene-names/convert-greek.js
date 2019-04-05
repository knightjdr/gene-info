const greekLetters = [
  {
    word: 'Alpha',
    letter: 'α',
  },
  {
    word: 'Beta',
    letter: 'β',
  },
  {
    word: 'Gamma',
    letter: 'γ',
  },
  {
    word: 'Delta',
    letter: 'δ',
  },
  {
    word: 'Epsilon',
    letter: 'ε',
  },
  {
    word: 'Zeta',
    letter: 'ζ',
  },
  {
    word: 'Eta',
    letter: 'η',
  },
  {
    word: 'Theta',
    letter: 'θ',
  },
  {
    word: 'Iota',
    letter: 'ι',
  },
  {
    word: 'Kappa',
    letter: 'κ',
  },
  {
    word: 'Lambda',
    letter: 'λ',
  },
  {
    word: 'Mu',
    letter: 'μ',
  },
  {
    word: 'Nu',
    letter: 'ν',
  },
  {
    word: 'Xi',
    letter: 'ξ',
  },
  {
    word: 'Omicron',
    letter: 'ο',
  },
  {
    word: 'Pi',
    letter: 'π',
  },
  {
    word: 'Rho',
    letter: 'ρ',
  },
  {
    word: 'Sigma',
    letter: 'σ',
  },
  {
    word: 'Tau',
    letter: 'τ',
  },
  {
    word: 'Upsilon',
    letter: 'υ',
  },
  {
    word: 'Phi',
    letter: 'φ',
  },
  {
    word: 'Chi',
    letter: 'χ',
  },
  {
    word: 'Psi',
    letter: 'ψ',
  },
  {
    word: 'Omega',
    letter: 'ω',
  },
];

// Iterate over every name in the arr and replace all instances of
// greek letters in a case insensitive way. The greekLetters array
// is ordered, so that earlier letters will take precedence over
// later ones, for example Beta over Eta.
const convertGreek = (names) => {
  const converted = [];
  names.forEach((name) => {
    let convertedName = name;
    let match = false;
    greekLetters.forEach((entry) => {
      const reTest = new RegExp(entry.word, 'i');
      if (reTest.test(convertedName)) {
        const reReplace = new RegExp(entry.word, 'gi');
        convertedName = convertedName.replace(reReplace, entry.letter);
        match = true;
      }
    });
    if (match) {
      converted.push(convertedName);
    }
  });
  return converted;
};

module.exports = convertGreek;
