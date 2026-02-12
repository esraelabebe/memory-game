import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root');

// Type guard: Check if container is not null
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  // Handle the error if the root element is missing
  console.error("Failed to find the root element in the DOM.");
  // Optional: throw an error to stop execution
  // throw new Error("Root element '#root' not found");
}
