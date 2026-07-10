export default function ProjectGallery({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="w-full border-y border-stroke bg-surface">
      <img
        src={image}
        alt={alt}
        className="mx-auto h-[55vh] max-h-[560px] w-auto object-contain md:h-[65vh]"
      />
    </div>
  );
}
