import {JSX} from "react";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import {getImages} from "@/lib/getImages";
import {IMAGE_URL_PORTFOLIO_QUERY_1, IMAGE_URL_PORTFOLIO_QUERY_2} from "@/util/images";


export default async function Portfolio(): Promise<JSX.Element> {
    const imagesObjectArray = await getImages(IMAGE_URL_PORTFOLIO_QUERY_1);
    const imagesObjectArray2 = await getImages(IMAGE_URL_PORTFOLIO_QUERY_2)
    const images1 = imagesObjectArray
        .map((img: { secure_url?: string }) => img.secure_url)
        .filter(Boolean);
    const images2 = imagesObjectArray2
        .map((img: { secure_url?: string }) => img.secure_url)
        .filter(Boolean);
    const images = [...images1, ...images2];
    return <PortfolioCarousel images={images}/>;
}
