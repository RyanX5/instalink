// This file is used to generate the QR code and display it in the popup.html file

document.getElementById("generate").addEventListener("click", function (event) {
    event.preventDefault();
    const url = document.getElementById("url").value;
    if (url) {
        document.getElementById("qrcode").innerHTML = "";
        generateQRCode(url);
    } else {
        alert('Please enter a URL');
    }
});


function generateQRCode(url) {

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 150,
        height: 150
    });
}
