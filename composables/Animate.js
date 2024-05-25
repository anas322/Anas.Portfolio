import { ref } from "vue";

const scrollPosition = useState("position", () => 0);

export default function Animate(element, className) {
    const titleoffset = element.offsetTop;
    scrollPosition.value = window.scrollY + window.innerHeight;

    window.addEventListener("scroll", () => {
        scrollPosition.value = window.scrollY + window.innerHeight;

        if (scrollPosition.value > titleoffset) {
            element.value.classList.add(className);
        }
    });
}
