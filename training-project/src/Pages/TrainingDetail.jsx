import { useParams, Link } from "react-router-dom";
import  TrainingList from "../Pages/TrainingList.jsx";

export default function TrainingDetail() {
    const { Id } = useParams();
    const trainingList = TrainingList.find((t) => t.Id === Id);

    if (!trainingList) {
        return ( 
        <div>
        <h2>Training not found</h2>
        <Link to="/trainingList">Back to Trainings</Link>
        </div> 
        );
    }

    return (
        <div>
            <h2>{trainingList.Title}</h2>
            <p><strong>Duration:</strong> {trainingList.Duration}</p>
            <p><strong>Description:</strong> {trainingList.Description}</p>
            <Link to="/trainingList">Back to Trainings</Link>
        </div>
    );
}