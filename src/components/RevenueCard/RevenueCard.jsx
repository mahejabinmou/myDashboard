import RevenuStatCard from "../RevenueStatCard/RevenueStatCard";

const RevenueCard = () => {
  const cards = [
    {
      title: "Upcoming Appointment",
      value: "150",
      rate: 1.3,
      percentage: 12,
      pathColor: "#FF8F00",
    },
    {
      title: "Past Appointment",
      value: "80",
      rate: 1.2,
      percentage: 11,
      pathColor: "#B400E0",
    },
    {
      title: "Total Appointment",
      value: "50",
      rate: 0.5,
      percentage: 15,
      pathColor: "#8C5FF7",
    },
  ];
  return (
    <div className="flex gap-6 mb-6">
      {cards.map((card, index) => (
        <RevenuStatCard
          title={card.title}
          value={card.value}
          percentage={card.percentage}
          trend={card.rate}
          pathColor={card.pathColor}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default RevenueCard;
