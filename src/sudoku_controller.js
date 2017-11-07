class SudokuController {
  constructor(useCase) {
    this.useCase = useCase;
    document.querySelectorAll('.cell').forEach(
      function(el){
        el.addEventListener("change", this.validateBoard.bind(this));
      }, this);
  }

  validateBoard() {
    let board = [];
    document.querySelectorAll('.cell').forEach(function(cell){
      let row = parseInt(cell.dataset['row']);
      let column = parseInt(cell.dataset['column']);
      let value = parseInt(cell.value);
      if (!board[row]) board[row] = [];
      board[row][column] = value;
    })
    this.useCase.validate(board);
  }
}
