import image from "~/assets/vow/symbol_locations.jpg"

const SymbolLocations = () => {
  return ( 
    <div className="p-4">
      <img src={image} alt="VOW symbol locations" className="max-w-5xl w-[calc(100vw-2rem)] m-auto" />
    </div>
  )
}

export default SymbolLocations