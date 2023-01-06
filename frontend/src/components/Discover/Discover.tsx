function Discover() {
  return (
    <div className="flex flex-col gap-4 mx-4 md:w-3/5 md:mx-auto">
      <div>
        <h3>Discovering Rolex</h3>
      </div>
      <div className="grid grid-cols-2 my-2 gap-1">
        <div className="col-span-2">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="discover/New-watches-2022.webp"
              alt="New Watches 2022"
              className="hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col my-2">
            <p className="font-bold tracking-widest">NEW WATCHES 2022</p>
            <p className="text-primary-600 -mt-1">Rolex Collection</p>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="discover/Rolex-and-cinema.jpg"
              alt="New Watches 2022"
              className="hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col my-2">
            <p className="font-bold tracking-widest">NEW WATCHES 2022</p>
            <p className="text-primary-600 -mt-1">Rolex Collection</p>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="discover/Rolex-and-the-arts.jpg"
              alt="New Watches 2022"
              className="hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col my-2">
            <p className="font-bold tracking-widest">NEW WATCHES 2022</p>
            <p className="text-primary-600 -mt-1">Rolex Collection</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover