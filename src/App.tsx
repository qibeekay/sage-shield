import Homepage from "./components/Homepage";
import { ThemeProvider } from "./theme/ThemeProvider";
import { ThemeToggle } from "./theme/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-darkBg font-neue">
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
