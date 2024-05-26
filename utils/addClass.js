export default (element, className) => {
    const handleScroll = () => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top <= windowHeight) {
            element.classList.add(...className);
        }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
};
