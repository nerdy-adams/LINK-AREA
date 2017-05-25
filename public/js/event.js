function linkSearch(btn) {
 btn.addEventListener('click', function(event) {
   event.preventDefault();
   var url = 'http://letscc.net/?t=all&k=';
   var word = document.getElementById('url').value;
   var textUrl = url + word;
   window.open(textUrl, '_blank');
 });
}