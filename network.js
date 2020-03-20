window.addEventListener('load', function(e) {
  if (navigator.onLine) {
        // $('#lovemychi').html("Online");
        location.reload();
    updateConnectionStatus('Online', true);
  } else {
        alert("Mất kết nối với internet");
        $('#network').html("Đã Mất kết nối với internet,vui lòng kiểm tra lại");

    updateConnectionStatus('Offline', true);
  }
}, false);

window.addEventListener('online', function(e) {
  $(document).ready(function(){
      $('#network').html("Đã onLine trở lại");

  })

  location.reload();
  updateConnectionStatus('Online', true);
  // Get updates from server.
}, false);

window.addEventListener('offline', function(e) {
  $(document).ready(function(){
    alert("Mất kết nối với internet");

$('#network').html("Đã Mất kết nối với internet,vui lòng kiểm tra lại");

});
  updateConnectionStatus('Offline', true);
  // Use offine mode.
}, false);
