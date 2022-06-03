
const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="p-4">
      <img src={src} alt={alt} className="max-w-5xl m-auto w-[calc(100vw-3rem)]" />
    </div>
  )
}

export default Image