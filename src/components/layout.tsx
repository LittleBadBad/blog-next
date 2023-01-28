import Nav from "./nav"
import {Category} from "../types/Category";
import {ReactNode} from "react";

const Layout = ({children, categories}: { children: ReactNode, categories: Category[] }) => (
    <>
        <Nav categories={categories}/>
        {children}
    </>
)

export default Layout
