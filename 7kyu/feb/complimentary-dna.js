const DNAStrand = dna => {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };

  return dna
    .split("")
    .map(string => pairs[string])
    .join("");
};
