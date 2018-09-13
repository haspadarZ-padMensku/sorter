class Sorter {
  constructor() {
    // your implementation
    this.mass = new Array();
  }

  add(element) {
    // your implementation
    this.mass.push(element);
  }

  at(index) {
    // your implementation
    return this.mass[index];
  }

  get length() {
    // your implementation
    return this.mass.length;
  }

  toArray() {
    // your implementation
    return this.mass;
  }

  sort(indices) {
    // your implementation
      let temp = new Array(indices.length); //create an array to store choosen mass' elements
      indices.sort();
      for (let i = 0; i < indices.length; i++) { //fill temp
        temp[i] = this.mass[indices[i]];
      }
    
    //sort temp
    if (typeof this.compareFunction !== "undefined" && this.compareFunction !== null) {
      temp.sort(this.compareFunction);
    } else {
      temp.sort(function compareNumbers(a, b) {
        return a - b;
      });
    }
    //put back sorted values in this.mass
    for (let i = 0; i < indices.length; i++) {
      this.mass[indices[i]] = temp[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;