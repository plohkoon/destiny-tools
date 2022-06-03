import IFrame from "~/components/iframe"

const Chalice = () => {
  return (
    <>
      <h2 className="text-center text-2xl text-red-500 font-bold">WARNING: This IFrame still points at the original source however it redirects weirdly. Click at your own risk. (If anything loads)</h2>
      <IFrame src="https://www.d2chalice.com" title="D2 Chalice" />
    </>
  )
}

export default Chalice