import "./post.scss";
import { useState } from "react";
import Input from "../InputFields/Input";
import { useDispatch } from "react-redux";
import {createPost} from "../../redux/postSlice";


const MakePost = (props) => {
  const { setOpenPost } = props;
  const [title, setTitle] = useState("Add a title");
  const [description, setDescription] = useState("Add some descriptions");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [selectedIdx, setSelectedIdx] = useState(true);
  const dispatch = useDispatch();
  const handleSavePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: description,
      tag: selectedIdx
    };
    dispatch(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handleSavePost}>
          Post
        </p>
      </div>
      <Input
        inputType="textarea"
        label="Title"
        className="makepost-title"
        data={title}
        setData={setTitle}
      />
      <Input
        inputType="textarea"
        label="Description"
        className="makepost-desc"
        data={description}
        setData={setDescription}
      />

      <label htmlFor="">Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setSelectedIdx(idx);
              }}
              className={
                selectedIdx === idx
                  ? "makepost-tags-selected"
                  : "makepost-tags-" + tag
              }
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
