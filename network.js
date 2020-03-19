window.addEventListener('load', function(e) {
  if (navigator.onLine) {
        // $('#lovemychi').html("Online");
    updateConnectionStatus('Online', true);
  } else {
        $('#network').html("Đã Mất kết nối với internet,vui lòng kiểm tra lại");

    updateConnectionStatus('Offline', true);
  }
}, false);

window.addEventListener('online', function(e) {
  $(document).ready(function(){
      $('#network').html("Đã kết nối trở lại");

  })

  location.reload();
  updateConnectionStatus('Online', true);
  // Get updates from server.
}, false);

window.addEventListener('offline', function(e) {
  $(document).ready(function(){
$('#network').html("Đã Mất kết nối với internet,vui lòng kiểm tra lại");

});
  updateConnectionStatus('Offline', true);
  // Use offine mode.
}, false);
