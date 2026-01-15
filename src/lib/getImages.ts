import {v2 as cloudinary} from "cloudinary";
import {IMAGE_URL_PORTFOLIO_QUERY_1} from "@/util/images";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function getImages(query: string = IMAGE_URL_PORTFOLIO_QUERY_1) {
    const res = await cloudinary.search
        .expression(query)
        .sort_by("public_id", "asc")
        .max_results(100)
        .execute();

    return res.resources;
}

