window.addEventListener("load", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){
                // vào màn hình -> hiện
                entry.target.classList.add("show");
            }else{
                // ra khỏi màn hình -> ẩn lại
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal").forEach(el=>{
        observer.observe(el);
    });

});
window.addEventListener("load", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){
                // vào màn hình -> hiện
                entry.target.classList.add("show2");
            }else{
                // ra khỏi màn hình -> ẩn lại
                entry.target.classList.remove("show2");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal2").forEach(el=>{
        observer.observe(el);
    });

});
document.querySelectorAll(".hover-text").forEach(el => {

    const words = el.textContent.split(" ");
    el.innerHTML = "";

    words.forEach(word => {

        const span = document.createElement("span");
        span.textContent = word;

        el.appendChild(span);

    });

});
window.addEventListener("load", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){
                // vào màn hình -> hiện
                entry.target.classList.add("show3");
            }else{
                // ra khỏi màn hình -> ẩn lại
                entry.target.classList.remove("show3");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal3").forEach(el=>{
        observer.observe(el);
    });

});
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0,0);
});