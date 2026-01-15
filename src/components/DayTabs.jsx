import Button from "./button";

 

export default function DayTabs({ itinerary, activeDay, setActiveDay }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      {itinerary.map((item, index) => (
        <Button
          key={index}
          variant={activeDay === index ? "default" : "outline"}
          onClick={() => setActiveDay(index)}
        >
          {item.day}
        </Button>
      ))}
    </div>
  );
}
