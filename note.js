document.getElementById('SaveButton').onclick = function(){
var noteHead = document.getElementById('noteHeading').value;
var noteBody = document.getElementById('noteText').value;
alert('The Note has been Saved');
if(noteHead!=null || noteBody!=null){
document.getElementById("viewHead").innerHTML = '1. ' + noteHead;
document.getElementById("viewHead").style.display = 'block';
document.getElementById("viewBody").innerHTML = noteBody;
document.getElementById("archiveHeader").style.display = 'block';
document.getElementById("viewDetails").style.display = 'block';
}
}
