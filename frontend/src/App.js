
import { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage'
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';

function App() {
  const [isEdit, setEdit] = useState(false)
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {pending && <p className='loading'> Loading... </p>}
      {!isEdit && error && (
        <p className='error'>Error fetching data from server!!!</p>
      )}
      <Footer />
    </div>
  );
}

export default App;
