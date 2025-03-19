import './App.css';
import axios from "axios";

const API_URL = "http://10.138.240.15:5000/api/data";//might need to change based on what it looks like on the pi

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setData(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
      });
  }, []);

  return (
    <div>
      <h1>MySQL Data</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;//probably goint to return errors rn