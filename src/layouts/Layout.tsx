import HeaderComponent from "../components/headerComponent/HeaderComponent";
import React, { ReactNode } from "react";
import FooterComponent from "../components/footerComponent/FooterComponent";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </div>
    );
};

export default Layout;
