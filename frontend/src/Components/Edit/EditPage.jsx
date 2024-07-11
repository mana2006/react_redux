import { useState } from "react";
import "./editpage.scss";
import Input from "../InputFields/Input";
import { useDispatch, useSelector } from "react-redux";
import { updatedUser } from "../../redux/apiRequests";
const EditPage = (props) => {
  const { setEdit } = props;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const avaUrl = [
    "https://cdn.pixabay.com/photo/2018/01/13/22/14/peacock-3080897_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/05/13/17/27/flowers-765781_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/19/16/02/beautiful-woman-8074997_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/23/10/45/girl-8012460_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/08/31/03/21/girl-5531217_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_1280.png",
    "https://cdn.pixabay.com/photo/2023/08/03/00/19/peony-8166078_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/04/23/11/01/flowers-6201439_1280.jpg",
  ];
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [image, setImage] = useState(user.avaUrl);
  const [themeColor, setThemeColor] = useState("#ff0091");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: image,
      themeColor: themeColor,
    };
    updatedUser(updateUser, dispatch);
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className="edit-container">
        <button className="close">SAVE</button>
        <div className="edit-title">Edit Profile</div>
        <div className="input-container">
          <Input
            inputType="text"
            label="Display name"
            className="edit-displayname"
            data={name}
            setData={setName}
          />
          <Input
            inputType="text"
            label="Age"
            className="edit-age"
            data={age}
            setData={setAge}
          />
          <Input
            inputType="textarea"
            label="About"
            className="edit-about"
            data={about}
            setData={setAbout}
          />
        </div>
        <div className="image-container">
          <label> Profile Picture </label>
          {avaUrl.map((image) => {
            return (
              <>
                <img
                  src={image}
                  alt=""
                  onClick={(e) => setImage(e.target.src)}
                  className="image"
                  width="100"
                  height="140"
                />
              </>
            );
          })}
        </div>
        <div className="theme-container">
          <Input
            inputType="color"
            label="Theme"
            className="theme-color"
            data={themeColor}
            setData={setThemeColor}
          />
        </div>
      </section>
    </form>
  );
};

export default EditPage;
