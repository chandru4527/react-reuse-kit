import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const main = document.getElementById("admin-main");

        if (main) {
            main.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;