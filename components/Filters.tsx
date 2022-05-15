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
    <section className="flex flex-col justify-between mx-6">
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
        <input
          type="text"
          placeholder="Select Category"
          list="categories"
          className="min-w-full h-10 p-3"
        />
        <datalist id="categories">
          {categories.map((category) => (
            <option value={category} className="min-w-full">
              {category}
            </option>
          ))}
        </datalist>
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
        <label htmlFor="Remote">
          <input type="checkbox" role="switch" className="mr-3 p-3" />
          Remote Friendly
        </label>
      </div>
    </section>
  )
}

export default Filters
