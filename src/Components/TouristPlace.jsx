function TouristPlace({ img, title, desc, price, whenToVisit }) {
    return (
        <>
            <div className="border mt-2 w-[500px] rounded-lg p-2 ">
                <div className="relative">
                    <img src={img} className="rounded-lg" alt="" />
                    {
                        price >= 15000 ? <div className="absolute bottom-0 m-2 bg-orange-100 text-orange-800 font-bold rounded-lg p-1" > Expensive </div> : <div className="absolute bottom-0 m-2 bg-green-100 text-green-800 font-bold rounded-lg p-1" > Cheaper </div>
                    }

                </div>

                <h1 className="font-bold text-neutral-900 mt-2">{title}</h1>
                <p>{desc}</p>
                <p className="font-semibold mt-2 text-gray-500 ">{whenToVisit}</p>



            </div>
        </>
    )
}
export default TouristPlace;