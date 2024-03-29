/**
 * @author Francisco Soto <ebobby@gmail.com>
 */
var Draw = (function () {
  var LAST_SQUARE = Constants.LAST_BOARD_SQUARE,
    FIRST_SQUARE = Constants.FIRST_BOARD_SQUARE,
    CLASS_WHITE_SQUARE = "queens-white_square",
    CLASS_BLACK_SQUARE = "queens-black_square",
    IMG_WHITE_QUEEN = '<img src="/assets/images/white_queen.png" />',
    IMG_BLACK_QUEEN = '<img src="/assets/images/black_queen.png" />',
    DOMQueens = null;

  function _init() {
    var result = document.getElementsByTagName("td");
    DOMQueens = [];

    for (i = 0; i < result.length; i++) {
      if (
        result[i].className == CLASS_WHITE_SQUARE ||
        result[i].className == CLASS_BLACK_SQUARE
      ) {
        DOMQueens.push(result[i]);
      }
    }
  }

  function _putQueen(iSquare) {
    if (iSquare >= FIRST_SQUARE && iSquare <= LAST_SQUARE) {
      var queen = DOMQueens[iSquare];

      if (queen.getAttribute("class") == CLASS_WHITE_SQUARE) {
        queen.innerHTML = IMG_WHITE_QUEEN;
      } else if (queen.getAttribute("class") == CLASS_BLACK_SQUARE) {
        queen.innerHTML = IMG_BLACK_QUEEN;
      }
    }
  }

  function _removeQueen(iSquare) {
    if (iSquare >= FIRST_SQUARE && iSquare <= LAST_SQUARE) {
      DOMQueens[iSquare].innerHTML = "";
    }
  }

  function _drawBoard(board) {
    for (var iSquare = FIRST_SQUARE; iSquare <= LAST_SQUARE; iSquare++) {
      _removeQueen(iSquare);
    }

    for (var iQueen = 0; iQueen <= board.length; iQueen++) {
      if (board[iQueen] >= FIRST_SQUARE && board[iQueen] <= LAST_SQUARE) {
        _putQueen(board[iQueen]);
      }
    }
  }

  return {
    Initialize: function () {
      _init();
    },

    DrawBoard: function (board) {
      _drawBoard(board);
    },
  };
})();
