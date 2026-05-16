import { Outlet } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";

export default function Products() {

    return (
        <>
            <ProductCard />
            <Outlet />
        </>
    );
}