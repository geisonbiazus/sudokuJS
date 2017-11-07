class Sudoku {
  constructor(board) {
    this.board = board.map(function(line, i){
      return line.map(function (el, j){
        return {i: i, j: j, value: el, valid: true};
      });
    });
  }

  validate() {
    this.invalid = {}

    this.validateLines()
    this.validateColumns()
    this.validateGroups()
    this.formatResult()

    return Object.keys(this.invalid).length == 0;
  }

  validateLines() {
    this.lines().forEach(function(line, index) {
      this.validateList(line);
    }, this);
  }

  validateColumns() {
    this.columns().forEach(function(line, index) {
      this.validateList(line);
    }, this);
  }

  validateGroups() {
    this.groups().forEach(function(line, index) {
      this.validateList(line);
    }, this);
  }

  lines() {
    return this.board;
  }

  columns() {
    let columns = [];
    this.board.forEach(function(line) {
      line.forEach(function(el, j) {
        if (!columns[j]) columns[j] = []
        columns[j].push(el)
      });
    });
    return columns;
  }

  groups() {
    let groups = []

    this.board.forEach(function(line, i) {
      line.forEach(function(el, j) {
        let index = Math.floor(i / 3) + Math.floor(j / 3) * 3;
        if (!groups[index]) groups[index] = [];
        groups[index].push(el);
      });
    });
    return groups;
  }

  validateList(line) {
    let elements = {}

    line.forEach(function(el, i) {
      if (!el.value) {
        el.valid = false;
      } else if (elements[el.value]) {
        elements[el.value].valid = false;
        el.valid = false;
      } else {
        elements[el.value] = el
      }
    });
  }

  formatResult() {
    this.board.forEach(function(line, index) {
      line.forEach(function(el) {
        if (el.valid) return
        if (!this.invalid[el.i]) this.invalid[el.i] = []
        this.invalid[el.i].push(el.j)
      }, this);
    }, this);
  }

  invalidCells() {
    return this.invalid;
  }
}
