// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, dnaString) {
    return {
        specimenNum: number,
        dna: dnaString,
        mutate() {
           let indexNum = Math.floor(Math.random() * (dnaString.length - 1));
           let chosenBase = dnaString[indexNum];
           let newBase = returnRandBase();
           function sameBaseDetector(){
            return chosenBase != newBase ? dna[indexNum] = newBase : sameBaseDetector()
           };
           return sameBaseDetector();
        },
        compareDNA(specimen) { 
            let equalStr = 0;
            for (i = 0; i < specimen.length; i++){
                if (specimen[i] === this.dna[i]) {equalStr += 1}
            }
            console.log(equalStr)
            let percentage = equalStr / specimen.length;
            return console.log(`specimen #1 and apecimen #2 have ${percentage * 100}% in common.`)
        }
    }
}

let pAequor1 = pAequorFactory(1, mockUpStrand());
let pAequor2 = pAequorFactory(2, mockUpStrand());
console.log(pAequor1.compareDNA(pAequor2.dna));