const openPopup = document.getElementById("openPopup");
const popupBg = document.getElementById("popupBg");
const closePopup = document.getElementById("closePopup");

/* buka popup */
openPopup.onclick = function () {
    popupBg.style.display = "flex";
};

/* tutup popup */
closePopup.onclick = function () {
    popupBg.style.display = "none";
};

/* klik luar card */
window.onclick = function (e) {

    if (e.target == popupBg) {
        popupBg.style.display = "none";
    }

};