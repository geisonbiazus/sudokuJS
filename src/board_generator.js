var BoardGenerator = function() {
  let generateHTML = function() {
    let columnSize = 9;
    let rowSize = 9;
    let boardHtml = '<table>';
    for (let i = 0; i < rowSize; i++){
      boardHtml+= "<tr>";
      for (let j = 0; j < columnSize; j++){
          boardHtml+= "<td><input type='text' class='cell' data-row='" + i + "' data-column='" + j +"'></input></td>";
      }
      boardHtml+= "</tr>";
    }
    boardHtml += '</table>';
    return boardHtml;
  }

  let createBoard = function(containerSelector) {
    document.querySelector(containerSelector).innerHTML = generateHTML()
  }

  return {
    createBoard: createBoard
  }
}()
