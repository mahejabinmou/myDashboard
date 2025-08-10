// components/StatCard.tsx
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const StatCard = ({ title, value, percentage, trend, pathColor, isFirst }) => {
  const isPositive = trend && trend >= 0;

  return (
    <div
      className={`rounded-xl p-4 shadow-lg flex flex-wrap items-center justify-between min-w-[250px] ${
        isFirst ? "bg-[#070706]" : "bg-[#373737]"
      }`}
    >
      <div>
        <p
          className={`text-sm ${isFirst ? "text-[#F6F6F6]" : "text-gray-300"}`}
        >
          {title}
        </p>
        <p
          className={`text-3xl font-bold mt-1 ${
            isFirst ? "text-[#F6F6F6]" : "text-white"
          }`}
        >
          {value}
        </p>

        {trend !== undefined && (
          <div className="flex items-center mt-2">
            {isPositive ? (
              <ArrowUpRight size={16} className="text-green-500" />
            ) : (
              <ArrowDownRight size={16} className="text-red-500" />
            )}
            <span
              className={`ml-1 text-sm font-medium ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {isPositive ? "+" : ""}
              {trend}%
            </span>
          </div>
        )}
      </div>

      <div className="w-12 h-12">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "32px",
            textColor: "#fff",
            pathColor: `${pathColor}`,
            trailColor: hexToRgba(pathColor, 0.23), // ২৩% opacity
          })}
        />
      </div>
    </div>
  );
};

export default StatCard;
