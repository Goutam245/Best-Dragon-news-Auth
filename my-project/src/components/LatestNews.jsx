import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 border border-blue-400 items-center bg-base-200 p-2">
      <p className="bg-[blue] border border-red-400 text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={80} className="space-x-10">
        <Link to="/news">
        <span className="font-semibold">The End of World War II (1945):</span> The victory of the Allied forces and the subsequent end of World War II marked a major turning point in global peace and stability, leading to the formation of the United Nations and an era of reconstruction and cooperation.
        </Link>
        <Link to="/news">
        <span className="font-semibold">The Moon Landing (1969):</span> When NASA’s Apollo 11 mission landed humans on the moon for the first time, it showcased human ingenuity and inspired global cooperation and interest in space exploration.
        </Link>
        <Link to="/news">
        The Universal Declaration of Human Rights (1948): Adopted by the United Nations General Assembly, this document laid down the international standards for human rights and became a milestone for global advocacy for individual freedoms and equality
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
