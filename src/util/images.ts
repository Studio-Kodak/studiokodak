import {getImages} from "@/lib/getImages";

export const IMAGE_URL_PORTFOLIO_QUERY_1 = "folder:studio_kodak/portfolio1 AND resource_type:image AND type:upload";
export const IMAGE_URL_PORTFOLIO_QUERY_2 = "folder:studio_kodak/portfolio2 AND resource_type:image AND type:upload";

export const getImagesUrl = async () => {
    const imagesObjectArray = await getImages(IMAGE_URL_PORTFOLIO_QUERY_1);
    const imagesObjectArray2 = await getImages(IMAGE_URL_PORTFOLIO_QUERY_2)
    const images1 = imagesObjectArray
        .map((img: { secure_url?: string }) => img.secure_url)
        .filter(Boolean);
    const images2 = imagesObjectArray2
        .map((img: { secure_url?: string }) => img.secure_url)
        .filter(Boolean);
    return [...images1, ...images2];
}