export default function (name) {
    const element = document.getElementById(name);
    if (element) {
        const offset = 100;
        const topPosition = element.offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
}
