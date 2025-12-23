import {  useState, useEffect } from "react";
import TrainingList from "./TrainingList.jsx";

export default function TrainingLogg() {
    const [logs, setLogs] = useState([]);
    const [trainingId, setTrainingId] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        localStorage.setItem("trainingLogs", JSON.stringify(logs));
    }, [logs]);

    function handleSubmit(e) {
        e.preventDefault();

        const trainings = trainings.find((t) => t.id === trainingId);

        if (!trainings || !date) return;

        setLogs((prevLogs) => [
            ...prevLogs,
            {
                id: Date.now(),
                trainingId: trainings.id,
                title: trainings.title,
                date,
            },
        ]);

        setTrainingId("");
        setDate("");
    }

    return (
        <div>
            <h1>Training Log</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Training:
                    <select value={trainingId}
                    onChange={(e) => trainingId(e.target.value)}
                    >
                        <option value="">Select training</option>
                        {TrainingList.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.title}
                            </option>
                        ))}
                    </select>
                </label>
                <br/>
                <label>
                    Date:
                    <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                     />
                </label>
                <br/>
                <button type="submit">Add Log</button>
            </form>
        </div>
    );
}