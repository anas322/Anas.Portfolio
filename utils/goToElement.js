export default function (name) {
    const element = document.getElementById(name);
    if (element) {
        const offset = 100;
        const topPosition = element.offsetTop - offset;
        setTimeout(() => {
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }, 300); // 300 milliseconds = 0.3 seconds
    }
}
