import MainCard from "../components/MainCard";
import englishData from "../englishData.json";

const Main = () => {
  return (
    <div className="bg-lime-100 container">
      <div className="flex justify-center ">
        <h1 className="rounded-full bg-lime-300 w-[12rem] h-10 flex justify-center items-center text-2xl font-semibold  ">
          Study English
        </h1>
      </div>
      <ul className="mt-12 px-[7rem] ">
        {englishData.map((v, i) => (
          <MainCard key={i} title={v.title} day={v.day} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
