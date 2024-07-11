import { useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import EditPage from "./Components/Edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import MakePost from "./Components/Post/MakePost";
import Posts from "./Components/Post/Posts";

function App() {
  const [isEdit, setEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  const [isOpenPost, setOpenPost] = useState(false);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="posts-container">
            <Posts />
          </div>
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpenPost={setOpenPost} />
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      )}
      {pending && <p className="loading"> Loading... </p>}
      {!isEdit && error && (
        <p className="error">Error fetching data from server!!!</p>
      )}
    </div>
  );
}

export default App;
