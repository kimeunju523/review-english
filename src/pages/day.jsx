import { useParams } from "react-router-dom";
import englishData from "../englishData.json";
import { useEffect, useState } from "react";

console.log(englishData);

const Day = () => {
  const [dailyData, setDailyData] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const { day } = useParams();

  const onClickNext = () => {};

  useEffect(() => {
    englishData.forEach((v) => {
      if (v.day === +day) {
        setDailyData(v);
      }
    });
  }, [day]);

  useEffect(() => console.log(dailyData), [dailyData]);

  if (!dailyData) return <div>Loading...</div>;

  return (
    <div className="bg-red-100 container">
      <h1 className="text-center text-xl font-semibold">
        Day {dailyData.day}-{dailyData.title}
      </h1>
      <div className="mt-12">
        <div>{dailyData.sentences[currentPage].english}</div>
        <button
          className={`${!isVisible && "bg-black"}`}
          onClick={() => setIsVisible(!isVisible)}
        >
          {dailyData.sentences[currentPage].korean}
        </button>
        <div className="mt-4">
          <button className="btn-style">Prev</button>
          <button className="btn-style ml-2" onClick={onClickNext}>
            Next
          </button>
          <button className="btn-style ml-2">Sound</button>
        </div>
      </div>
    </div>
  );
};

export default Day;
