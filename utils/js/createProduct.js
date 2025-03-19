$(function () {
    $("#imgBtn").on("click", function (e) {
        e.preventDefault();
        document.getElementById("ImgInput").click();
    })

    $("#ImgInput").on("change", function () {
        let file = $("input[type=file]").get(0).files[0];
        console.log(file);
        document.getElementById("imgPreview").src = URL.createObjectURL(file);
    })
})