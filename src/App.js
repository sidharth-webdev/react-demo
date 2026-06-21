import { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  const [view, setView] = useState('add');
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => setRefresh(!refresh);

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${view === 'add' ? 'active' : ''}`}
            onClick={() => setView('add')}
          >
            Add Note
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
          >
            View Notes
          </button>
        </li>
      </ul>

      {view === 'add' ? (
        <AddNote onNoteAdded={handleNoteAdded} />
      ) : (
        <NotesList key={refresh} />
      )}
      {/* Why this nav approach for simplicity: Simple state toggle for conditional rendering */}
    </div>
  );
}

export default App;