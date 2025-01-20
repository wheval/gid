
const Curriculum = () => {
  const weeks = [
    { week: "Week 1", title: "Getting Started With The Starknet Ecosystem" },
    { week: "Week 2", title: "Deep Dive Into Cairo Programming" },
    { week: "Week 3", title: "Building On Starknet" },
    { week: "Week 4", title: "StarkNet Development Tools And Frameworks" },
    { week: "Week 5", title: "Advanced Starknet Contract Development" },
    { week: "Week 6", title: "Testing In Starknet" },
    { week: "Week 7", title: "Frontend Integration With Starknet" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Curriculum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weeks.map((item, index) => (
          <div key={index} className="bg-yellow-500 text-black p-4 rounded-md shadow-md">
            <h2 className="font-bold">{item.week}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
