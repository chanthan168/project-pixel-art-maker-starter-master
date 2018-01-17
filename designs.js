// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
let grid;
let tbl = $('#pixel_canvas');

let i = 0;
while (i < height) {
  grid +="<tr>";
  let j = 0;
  while (j < width) {
    grid +="<td></td>";
    j++;
  }
  grid +="</tr>";
  i++;
}

tbl.html(grid);
};

$(document).ready(function(){
  $('#btn-submit').click(function(e){
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  e.preventDefault();
  makeGrid(height, width);
  });

  $('#pixel_canvas').click(function(e) {
    let color = $('#colorPicker').val();
    $(e.target).css("background-color", color);
  });
});
