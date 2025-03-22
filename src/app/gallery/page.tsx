// import { Flex } from "@/once-ui/components";
// import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery} from "@/app/resources/content";

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/gallery`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function GalleryPage() {
  const data = await fetch("https://api.example.com/gallery")
    .then((res) => res.json())
    .catch(() => null); // Prevents crashes if fetch fails

  // ✅ Fix: Ensure `data` is an array before mapping
  if (!data || !Array.isArray(data)) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div>No images found</div>;
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      {data.map((item) => (
        // eslint-disable-next-line react/react-in-jsx-scope
        <img key={item.id} src={item.imageUrl} alt={item.title} />
      ))}
    </div>
  );
}


// export default function Gallery() {
  // return (
    // <Flex fillWidth>
    //   <script
    //     type="application/ld+json"
    //     suppressHydrationWarning
    //     dangerouslySetInnerHTML={{
    //       __html: JSON.stringify({
    //         "@context": "https://schema.org",
    //         "@type": "ImageGallery",
    //         name: gallery.title,
    //         description: gallery.description,
    //         url: `https://${baseURL}/gallery`,
    //         image: gallery.images.map((image) => ({
    //           "@type": "ImageObject",
    //           url: `${baseURL}${image.src}`,
    //           description: image.alt,
    //         })),
    //         author: {
    //           "@type": "Person",
    //           name: person.name,
    //           image: {
    //             "@type": "ImageObject",
    //             url: `${baseURL}${person.avatar}`,
    //           },
    //         },
    //       }),
    //     }}
    //   />
    //   <MasonryGrid />
    // </Flex>
  // );
// }
