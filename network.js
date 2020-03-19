window.addEventListener('load', function(e) {
  if (navigator.onLine) {
        // $('#lovemychi').html("Online");
    updateConnectionStatus('Online', true);
  } else {
        alert('Mất kết nối với internet, trang web cần kết nối để hoạt động dịch vụ');
    updateConnectionStatus('Offline', true);
  }
}, false);

window.addEventListener('online', function(e) {
  $(document).ready(function(){
      $('#lovemychi').html("Đã kết nối trở lại");

  })

  location.reload();
  updateConnectionStatus('Online', true);
  // Get updates from server.
}, false);

window.addEventListener('offline', function(e) {
  $(document).ready(function(){
            alert('Mất kết nối với internet, trang web cần kết nối để hoạt động dịch vụ');

$('#lovemychi').html("Mất kết nối với internet");

});
  updateConnectionStatus('Offline', true);

  // Use offine mode.
}, false);
