const promoFooterSubBtnEl = document.getElementById("promoFooterSubBtn");
const promoFooterEl = document.getElementById("promoFooter");
const promoLabelMainContainerEl = document.getElementById("promoLabelMainContainer")

function myFunction(){
    promoFooterEl.style.display = "none";
    promoLabelMainContainerEl.style.paddingBottom = "40px";
}


promoFooterSubBtnEl.addEventListener("click", myFunction)