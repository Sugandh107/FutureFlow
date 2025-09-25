import { Metadata } from "next";

export const generateMetadata = ({
    title = "FutureFlow - Crafting Digital Solutions with Precision and Creativity",
    description = "FutureFlow - Where ideas come to life with precision and creativity. Explore our innovative projects and services.",
    image = "/FutureFlow_meta_data_picture.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/FutureFlow_Logo.png"
        },
        {
            rel: "svg",
            sizes: "32x32",
            url: "/FutureFlow_Logo.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/FutureFlow_Logo.png"
        }
    ]
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
} = {}): Metadata => {
    return {
        title,
        description,
        icons,
        openGraph: {
            title,
            description,
            ...(image && { images: [{ url: image }] })
        },
        twitter: {
            title,
            description,
            ...(image && { card: "summary_large_image", images: [image] }),
            creator: "@ImmortalSul"
        },
        robots: {
            index: true, 
            follow: true 
        },
        metadataBase: new URL("https://FutureFlow.tech")
    };
};
