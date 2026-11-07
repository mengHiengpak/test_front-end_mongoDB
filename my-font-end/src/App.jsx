import { useProduct } from "./hook/useProduct";

function App() {
  const { data: products, loading } = useProduct();

  console.log("Data from useProduct hook:", products);

  if (loading) return <div className="text-green-600 bg-gray-200 px-5 py-5 font-bold text-center text-4xl shadow-xl shadow-gray-400 rounded-3xl mt-10 mx-25">Loading...</div>

  return (
    <div className="text-green-600 bg-gray-200 px-5 py-5 font-bold text-center text-4xl shadow-xl shadow-gray-400 rounded-3xl mt-10 mx-25">
      <h1>Hello, React!</h1>
      <div className="grid grid-cols-5 gap-4 mt-5 text-gray-800 text-2xl font-semibold border-t-2 border-black">
        <p>name</p>
        <p>category</p>
        <p>inventory</p>
        <p>price</p>
        <p>discount</p>
      </div>
      {products.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-5 gap-4 mt-5 text-gray-500 text-2xl font-semibold border-t-2 border-black"
        >
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.inventory}</p>
          <p>{item.price}</p>
          <p>{item.discount}</p>
        </div>
      ))}
    </div>
  )
}

export default App
