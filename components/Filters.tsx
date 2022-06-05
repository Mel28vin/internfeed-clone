const Filters = () => {
  const categories = [
    "Engineering",
    "Design",
    "Marketing",
    "Sales",
    "Customer Support",
    "Product",
    "Analytics",
    "Finance",
    "Data",
    "Other",
  ]

  return (
    <div className="flex flex-col justify-between mx-6">
      <div className="mt-4">
        <div className="my-2 font-bold">Keywords</div>
        <input
          type="text"
          placeholder="Enter Keywords"
          className="min-w-full h-10 p-3"
        />
      </div>
      <div className="mt-4">
        <div className="my-2 font-bold">Category</div>
        <div>
          <select
            id="categories-select"
            className="my-select bg-white h-10 min-w-full px-3 text-gray-400"
            onChange={() => {
              const id = document.getElementById("categories-select")
              id.style.color = "black"
              // if (id.value === "Select Category") id.style.color = "gray"
            }}
          >
            <option value="" className="" selected>
              Select Category
            </option>
            {categories.map((category) => (
              <option value={category} className="min-w-full">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <div className="my-2 font-bold">Location</div>
        <input
          type="text"
          placeholder="Enter Location"
          className="min-w-full h-10 p-3"
        />
      </div>
      <div className="my-4">
        <label
          htmlFor="toggle-button"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black">
            {" "}
          </div>
          <span className="ml-3">Remote Friendly</span>
        </label>
      </div>
    </div>
  )
}

export default Filters
