import Header from "@/components/Header";
import "@/components/Header/header-style.scss"

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}