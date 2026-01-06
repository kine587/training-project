import { Link } from "react-router-dom";

export default function TrainingCard({ title, trainings }) {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/training/${trainings.id}`}>View Details</Link>
    </div>
  );
}
