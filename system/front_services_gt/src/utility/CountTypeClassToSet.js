function Halls(coures) {
  let halls = {};

  let KyesC = Object.keys(coures);

  for (let C of KyesC) {
    if (halls[coures[C].hall]) {
      halls[coures[C].hall] = halls[coures[C].hall] + 1;
    } else {
      halls[coures[C].hall] = 1;
    }
  }

  return halls;
}


export default Halls;