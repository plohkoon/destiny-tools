
const IFrame = ({ src, title }: { src: string; title: string }) => {
  return <iframe src={src} title={title} className="w-full h-[80vh] p-4" />
}

export default IFrame