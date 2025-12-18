export default function TrainingList() {
  const trainings = [
    {
      id: 1,
      title: "cow, cat exersise",
      description:
        "be on you hands and knees and bend your back upwards and downwards",
    },
    {
      id: 2,
      title: "Superman hold",
      description:
        "lay down on your stomach and hold your hands and legs up while lying down",
    },
    {
      id: 3,
      title: "doorway rows",
      description:
        "stand in a doorway put your hands on each side of the dorway, stand in an angle and pull yourself up then return to starting posision",
    },
  ];
  return (
    <div>
      <h1>Training</h1>

      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            <h2>{training.title}</h2>
            <p>{training.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
