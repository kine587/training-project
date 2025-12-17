export default function Home({ onStartTraining }) {
  return (
    <div>
      <h1>Welcome to the Training site</h1>
      <p>Have fun with training</p>
      <button onClick={onStartTraining}>Start training</button>
    </div>
  );
}
