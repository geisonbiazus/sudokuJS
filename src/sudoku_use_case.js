class SudokuUseCase {
  constructor(presenter) {
    this.presenter = presenter;
  }

  validate(board) {
    let sudoku = new Sudoku(board);
    this.presenter.setIsValid(sudoku.validate());
    this.presenter.setResult(sudoku.board);
  }
}
