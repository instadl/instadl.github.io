window.addEventListener('load', function(e) {
  if (navigator.onLine) {
        // $('#lovemychi').html("Online");
    updateConnectionStatus('Online', true);
  } else {
        alert("Mất kết nối với internet");
        $("body").html("<i class='material-icons' style='font-size:250px;margin-left:5%'>signal_wifi_off</i><br/>Mất kết nối với internet,Trang web cần có kết nối internet để sử dụng dịch vụ, xin vui lòng kiểm tra lại");
        $('#network').html(" <i class='material-icons'>signal_wifi_off</i> Đã Mất kết nối với internet,vui lòng kiểm tra lại");

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

$('#network').html("<i class='material-icons'>signal_wifi_off</i> Đã Mất kết nối với internet,vui lòng kiểm tra lại");

});
  updateConnectionStatus('Offline', true);
  // Use offine mode.
}, false);
