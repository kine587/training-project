import { useParams, Link } from "react-router-dom";
import { trainingList} from "../Pages/TrainingList";

export default function TrainingDetail() {
    const { Id } = useParams();
    const trainingList = trainingList.find((t) => t.Id === Id);

    if (!trainingList) {
        return ( 
        <div>
        <h2>Training not found</h2>
        <Link to="/trainingList">Back to Trainings</Link>
        </div> 
        );
    }
}