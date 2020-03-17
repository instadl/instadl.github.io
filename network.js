window.addEventListener('load', function(e) {
  if (navigator.onLine) {
        // $('#lovemychi').html("Online");
    updateConnectionStatus('Online', true);
  } else {
        alert('Offline');
    updateConnectionStatus('Offline', true);
  }
}, false);

window.addEventListener('online', function(e) {
  $(document).ready(function(){
      $('#lovemychi').html("Online");

  })

  location.reload();
  updateConnectionStatus('Online', true);
  // Get updates from server.
}, false);

window.addEventListener('offline', function(e) {
  $(document).ready(function(){
$('#lovemychi').html("Mất kết nối với internet");

});
  updateConnectionStatus('Offline', true);
  // Use offine mode.
}, false);
