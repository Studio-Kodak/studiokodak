import {JSX} from "react";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import {getImagesUrl} from "@/util/images";


export default async function Portfolio(): Promise<JSX.Element> {
    const images = await getImagesUrl();
    return <PortfolioCarousel images={images}/>;
}
