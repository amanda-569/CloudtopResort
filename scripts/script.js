"use strict";
(function (document) {
    const body = document.body;
    const btn = document.getElementById("btn-menu");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.toggle("show");
    });

    btn.addEventListener("mousedown", (e) => {
        e.preventDefault();
    });
})(document);