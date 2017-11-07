describe("Sudoku", function() {
  describe("Given a valid board", function() {
    let board = [
      [5, 3, 4,  6, 7, 8,  9, 1, 2],
      [6, 7, 2,  1, 9, 5,  3, 4, 8],
      [1, 9, 8,  3, 4, 2,  5, 6, 7],

      [8, 5, 9,  7, 6, 1,  4, 2, 3],
      [4, 2, 6,  8, 5, 3,  7, 9, 1],
      [7, 1, 3,  9, 2, 4,  8, 5, 6],

      [9, 6, 1,  5, 3, 7,  2, 8, 4],
      [2, 8, 7,  4, 1, 9,  6, 3, 5],
      [3, 4, 5,  2, 8, 6,  1, 7, 9]
    ];

    it("is valid", function() {
      sudoku = new Sudoku(board);

      expect(sudoku.validate()).toBe(true);
    });
  });

  describe("Given a board with an invalid line", function() {
    let board = [
      [5, 3, 2,  6, 7, 8,  9, 1, 2],
      [6, 7, 4,  1, 9, 5,  3, 4, 8],
      [1, 9, 8,  3, 4, 2,  5, 6, 7],

      [8, 5, 9,  7, 6, 1,  4, 2, 3],
      [4, 2, 6,  8, 5, 3,  7, 9, 1],
      [7, 1, 3,  9, 2, 4,  8, 5, 6],

      [9, 6, 1,  5, 3, 7,  2, 8, 4],
      [2, 8, 7,  4, 1, 9,  6, 3, 5],
      [3, 4, 5,  2, 8, 6,  1, 7, 9]
    ];

    let sudoku = new Sudoku(board);


    it("is invalid", function() {
      expect(sudoku.validate()).toBe(false);
    });

    it("returns invalid positions", function() {
      let expected = { 0: [2, 8], 1: [2, 7] }

      sudoku.validate()
      expect(sudoku.invalidCells()).toEqual(expected)
    });
  })

  describe("Given a board with an invalid column", function() {
    let board = [
      [5, 3, 4,  6, 7, 8,  9, 1, 2],
      [6, 7, 2,  1, 9, 5,  3, 4, 8],
      [1, 9, 8,  3, 4, 2,  5, 6, 7],

      [8, 5, 9,  7, 6, 1,  4, 2, 3],
      [4, 2, 6,  8, 5, 3,  7, 9, 1],
      [7, 1, 3,  9, 2, 4,  8, 5, 6],

      [9, 6, 1,  5, 3, 7,  2, 4, 8],
      [2, 8, 7,  4, 1, 9,  6, 3, 5],
      [3, 4, 5,  2, 8, 6,  1, 7, 9]
    ];

    let sudoku = new Sudoku(board);


    it("is invalid", function() {
      expect(sudoku.validate()).toBe(false);
    });

    it("returns invalid positions", function() {
      let expected = { 1: [7, 8], 6: [7, 8] }

      sudoku.validate()
      expect(sudoku.invalidCells()).toEqual(expected)
    });
  });

  describe("Given a board with an invalid groups", function() {
    let board = [
      [5, 3, 4,  6, 7, 8,  9, 1, 2],
      [6, 7, 2,  1, 9, 5,  3, 4, 8],
      [1, 9, 8,  3, 4, 2,  5, 6, 7],

      [8, 5, 9,  7, 6, 1,  4, 2, 3],
      [1, 2, 6,  8, 5, 3,  7, 9, 4],
      [7, 1, 3,  9, 2, 4,  8, 5, 6],

      [9, 6, 4,  5, 3, 7,  2, 8, 1],
      [2, 8, 7,  4, 1, 9,  6, 3, 5],
      [3, 4, 5,  2, 8, 6,  1, 7, 9]
    ];

    let sudoku = new Sudoku(board);


    it("is invalid", function() {
      expect(sudoku.validate()).toBe(false);
    });

    it("returns invalid positions", function() {
      let expected = {
        0: [2],
        2: [0],
        3: [6],
        4: [0, 8],
        5: [1],
        6: [2, 8],
        8: [1, 6]
      }

      sudoku.validate()
      expect(sudoku.invalidCells()).toEqual(expected)
    });
  });

  describe("Given a board with empty cells", function() {
    let board = [
      [5, 3, 4,  null, null, null,  null, null, null],
      [6, 7, 2,  null, null, null,  null, null, null],
      [1, 9, 8,  null, null, null,  null, null, null],

      [null, null, null,  null, null, null,  null, null, null],
      [null, null, null,  null, null, null,  null, null, null],
      [null, null, null,  null, null, null,  null, null, null],

      [null, null, null,  null, null, null,  null, null, null],
      [null, null, null,  null, null, null,  null, null, null],
      [null, null, null,  null, null, null,  null, null, null]
    ];

    let sudoku = new Sudoku(board);


    it("is invalid", function() {
      expect(sudoku.validate()).toBe(false);
    });

    it("returns invalid positions", function() {
      let expected = {
        0: [3, 4, 5, 6, 7, 8],
        1: [3, 4, 5, 6, 7, 8],
        2: [3, 4, 5, 6, 7, 8],
        3: [0 ,1, 2, 3, 4, 5, 6, 7, 8],
        4: [0 ,1, 2, 3, 4, 5, 6, 7, 8],
        5: [0 ,1, 2, 3, 4, 5, 6, 7, 8],
        6: [0 ,1, 2, 3, 4, 5, 6, 7, 8],
        7: [0 ,1, 2, 3, 4, 5, 6, 7, 8],
        8: [0 ,1, 2, 3, 4, 5, 6, 7, 8],
      }

      sudoku.validate()
      expect(sudoku.invalidCells()).toEqual(expected)
    });
  });

  describe("Given a board with only ne empty cell", function() {
    let board = [
      [5, 3, 4,  6, 7, 8,  9, 1, 2],
      [6, 7, 2,  1, 9, 5,  3, 4, 8],
      [1, 9, 8,  3, 4, 2,  5, 6, 7],

      [8, 5, 9,  7, 6, 1,  4, 2, 3],
      [4, 2, 6,  8, 5, 3,  7, 9, 1],
      [7, 1, 3,  9, 2, 4,  8, 5, 6],

      [9, 6, 1,  5, 3, 7,  2, 8, 4],
      [2, 8, 7,  4, 1, 9,  6, 3, 5],
      [3, 4, 5,  2, 8, 6,  1, 7, null]
    ];

    it("is valid", function() {
      sudoku = new Sudoku(board);

      expect(sudoku.validate()).toBe(false);
    });

    it("returns invalid positions", function() {
      let expected = {
        8: [8]
      }

      sudoku.validate()
      expect(sudoku.invalidCells()).toEqual(expected)
    });
  });
});
