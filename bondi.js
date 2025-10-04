

let worksList = document.querySelectorAll(" ul li");

worksList.forEach(function (li) {
    li.addEventListener("click",
        function () {
            worksList.forEach(el => el.classList.remove("active"));
            li.classList.add("active")
        }
    )
})


let workDesign = document.querySelectorAll(".works ul li")[1];
let codImg = document.querySelectorAll(".code");

let workDesignTWO = document.querySelectorAll(".works ul li")[2];
let DesignImg = document.querySelectorAll(".works .work.app");

let workAll = document.querySelectorAll(".works ul li")[0];
let allImg = document.querySelectorAll(".worka");


workAll.addEventListener("click", function () {
    codImg.forEach(function (el) {
        el.style.setProperty("display", "flex", "important");
    });

    DesignImg.forEach(function (el) {
        el.style.setProperty("display", "flex", "important");
    });
});


workDesign.addEventListener("click", function () {
    codImg.forEach(function (el) {
        el.style.setProperty("display", "none", "important");
    });

    DesignImg.forEach(function (el) {
        el.style.setProperty("display", "flex", "important");
    });
});



workDesignTWO.addEventListener("click", function () {
    codImg.forEach(function (el) {
        el.style.setProperty("display", "flex", "important");
    });

    DesignImg.forEach(function (el) {
        el.style.setProperty("display", "none", "important");
    });
});
