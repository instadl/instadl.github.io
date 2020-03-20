var imageAddr = "http://www.tranquilmusic.ca/images/cats/Cat2.JPG" + "?n=" + Math.random();
var startTime, endTime;
var downloadSize = 5616998;
var download = new Image();
download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
}
startTime = (new Date()).getTime();
download.src = imageAddr;

function showResults() {
    var duration = (endTime - startTime) / 1000; //Math.round()
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    var maxsp = "25Mbps";
    var maxkb = "0.10kbps";
    if(speedMbps < maxkb){
      alert("Kết nối không ổn định");
      $('#network').html("<i class='material-icons'>signal_wifi_off</i> Kết nối không ổn định,vui lòng kiểm tra lại");

    }
    // alert("Your connection speed is: \n" +
    //        speedBps + " bps\n"   +
    //        speedKbps + " kbps\n" +
    //        speedMbps + " Mbps\n" );
}
