import image from "~/assets/vow/symbol_names.jpg"

const SymbolNames = () => {
  return (
    <div className="p-4">
      <img src={image} alt="VOW symbol names" className="max-w-5xl w-[calc(100vw-2rem)] m-auto" />
    </div>
  )
}

export default SymbolNames