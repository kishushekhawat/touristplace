import TouristPlace from "./Components/TouristPlace";
const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, lush greenery and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHwwfDB8fHww ",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHwwfDB8fHww",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://plus.unsplash.com/premium_photo-1661962387472-553d96ed01a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9ydHxlbnwwfDB8MHx8fDA%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];
function App() {
  return (
    <>
      <div className="flex gap-2 justify-center">
        {
          touristPlaces.map(place => <TouristPlace img={place.img} title={place.placeName} desc={place.desc} price={place.price} whenToVisit={place.whenToVisit} />)
        }
      </div>
    </>
  )
}
export default App;