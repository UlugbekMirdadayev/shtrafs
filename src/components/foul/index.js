import { useParams } from "react-router-dom";

const FoulData = [
  {
    id: 1,
    name: "Процедура признания недобросовестного лица",
    description: "Процедура признания недобросовестного лица description",
    link: "/foul/1",
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "Процедура признания недобросовестного лица 2",
    description: "Процедура признания недобросовестного лица description 2",
    link: "/foul/2",
    img: "https://images.hindustantimes.com/auto/auto-images/bmw/3series/1593162288016_2019-bmw-3-series-1024x576.jpg",
  },
  {
    id: 3,
    name: "Процедура признания недобросовестного лица 3",
    description: "Процедура признания недобросовестного лица description 3",
    link: "/foul/3",
    img: "https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984__340.png",
  },
  {
    id: 4,
    name: "Процедура признания недобросовестного лица 4",
    description: "Процедура признания недобросовестного лица description 4",
    link: "/foul/4",
    img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=75&wm=1",
  },
];
function Foul() {
  const location = useParams();
  const { id } = location;
  return (
    <>
      {FoulData.filter((fouls) => Number(fouls.id) === Number(id)).map(
        (__res) => {
          return (
            <div className="foul" key={__res?.id}>
              <h1>{__res?.name}</h1>
              <p>{__res?.description}</p>
              <img src={__res?.img} alt="foul" />
            </div>
          );
        }
      )}
    </>
  );
}

export default Foul;
