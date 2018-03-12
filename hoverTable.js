$('#test_1 tr td').mouseover(function(){
  hoverTableAdd(this,3);
}).mouseout(function(){
  hoverTableRemove(this,3);
});
$('#test_2 tr td').mouseover(function(){
  hoverTableAdd(this,0);
}).mouseout(function(){
  hoverTableRemove(this,0);
});



function hoverTableAdd(thisTd,colNum){
  var parentsTable = $($(thisTd).parents('table')[0]);
  var parentTr = $(thisTd).parent('tr');
  var tableTr = $(parentsTable).find('tr').index(parentTr);
  var tableTd = parentTr.find('td').index($(thisTd));
  $(thisTd).addClass('zx_hover_table_bg2');
  $($(parentsTable).find('tr')[tableTr]).addClass('zx_hover_table_bg1');
  for(var i=0;i<$(parentsTable).find('tr').length;i++){
    $($($(parentsTable).find('tr')[i]).find('td')[tableTd]).addClass('zx_hover_table_bg1');
  };
  if(colNum == 0){
    $($($(parentsTable).find('tr')[1]).find('th')[tableTd]).addClass('zx_hover_table_bg3');
  }else{
    if(tableTd>colNum){
      $($(parentsTable).find('th')[tableTd+1]).addClass('zx_hover_table_bg3');
    }else{
      $($(parentsTable).find('th')[tableTd]).addClass('zx_hover_table_bg3');
    }
  }
};
function hoverTableRemove(thisTd,colNum){
  var parentsTable = $($(thisTd).parents('table')[0]);
  var parentTr = $(thisTd).parent('tr');
  var tableTr = $(parentsTable).find('tr').index(parentTr);
  var tableTd = parentTr.find('td').index($(thisTd));
  $(thisTd).removeClass('zx_hover_table_bg2');
  $($(parentsTable).find('tr')[tableTr]).removeClass('zx_hover_table_bg1');
  for(var i=0;i<$(parentsTable).find('tr').length;i++){
    $($($(parentsTable).find('tr')[i]).find('td')[tableTd]).removeClass('zx_hover_table_bg1');
  };
  if(colNum == 0){

    $($($(parentsTable).find('tr')[1]).find('th')[tableTd]).removeClass('zx_hover_table_bg3');
  }else{
    if(tableTd>colNum){
      $($(parentsTable).find('th')[tableTd+1]).removeClass('zx_hover_table_bg3');
    }else{
      $($(parentsTable).find('th')[tableTd]).removeClass('zx_hover_table_bg3');
    }
  }
}