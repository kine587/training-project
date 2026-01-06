import {  useState, useEffect } from "react";
import trainings from "../Data/TrainingData";

export default function TrainingLogg() {
    const [logs, setLogs] = useState([]);
    const [trainingId, setTrainingId] = useState("");
    const [date, setDate] = useState("");

    // Load logs from localStorage on component mount
    useEffect(() => {
        const storedLogs = localStorage.getItem("trainingLogs");    
        if (storedLogs) 
            try {
        const parsedLogs = JSON.parse(storedLogs);
        setLogs(parsedLogs);
            } catch (e) {
                console.error("Failed to parse training logs from localStorage", e);
                setLogs([]);
            }
    }, []);

    // Save logs to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("trainingLogs", JSON.stringify(logs));
    }, [logs]);

    // Handle form submission to add a new log
    function handleSubmit(e) {
        e.preventDefault();

        const trainings = trainings.find((t) => String(t.id) === trainingId);

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
                    onChange={(e) => setTrainingId(e.target.value)}
                    >
                        <option value="">Select training</option>
                        {trainings.map((t) => (
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