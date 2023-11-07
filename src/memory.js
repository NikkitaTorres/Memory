function cardGrid() {
  this.row1 = [];
  this.row2 = [];
  this.row3 = [];
  this.row4 = [];
  this.row5 = [];
}

function randomIndex() {
  const randomIndex = Math.floor(Math.random() * 10); //rng
  return randomIndex;
}

cardGrid.prototype.assignCards = function() {
  const numsToAssign = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  let randomized = [];

  const numsCopy = [...numsToAssign];
  
    while (numsCopy.length > 0) {
      const random = randomIndex(numsCopy);
        randomized.push(numsToAssign[random]);
        numsToAssign.splice(random, 1);
      }

  this.row1 = [randomized[0], randomized[1]];
  this.row2 = [randomized[2], randomized[3]];
  this.row3 = [randomized[4], randomized[5]];
  this.row4 = [randomized[6], randomized[7]];
  this.row5 = [randomized[8], randomized[9]];

}
