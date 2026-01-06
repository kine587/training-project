import trainings from "../Data/TrainingData";

export default function TrainingList() {
  
  return (
    <div>
      <h1>Training</h1>

      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            <h2>{training.title}</h2>
            <p>{training.description}</p>
            <p>{training.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
