function pairElement(str) {
  let genes = str.split('');
  let possiblePairs = {
    'A': 'T',
    'T': 'A', 
    'C': 'G',
    'G': 'C'
  }
  let genePairs = [];
  genes.forEach((gene) => {
    genePairs.push([gene, possiblePairs[gene]]);
  });
  return genePairs;
}

pairElement("GCG");
