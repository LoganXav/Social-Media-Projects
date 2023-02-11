import "./share.scss";
// import Image from "../../assets/img.png";
// import Map from "../../assets/map.png";
// import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";


const Share = () => {
  const [file, setFile] = useState(null);     // we're using useState hook because we will be updating the UI state by adding comments. The setFile is for the media we want to post
  const [desc, setDesc] = useState("");       // the setDesc is for text portion of the post

  const upload = async () => {   // creating an upload function for our file
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);    // the formData will be used as the body of a post request to our api endpoint using axios
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(  // This constant is an object that contains properties and methods related to the mutation, such as a function to execute the mutation (mutation.mutate) and the current state of the mutation (mutation.isLoading, mutation.isError, etc.).
    (newPost) => {              //the function newPost(our desc and file) is the actual mutation that will be performed
      return makeRequest.post("/posts", newPost);  // a post request to our api is made with axios(with the /posts endpoint). where newPost is the data for the new post passed in as an argument
    },
    {
      onSuccess: () => {   // This is a callback function that is executed when the mutation has successfully completed.
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);  // the callback function  invalidates the cached data for the posts query(["posts"] is the name of our query), so that the updated data can be refetched from the API the next time the query is executed.
      },
    }
  );  // after this we use the defined mutation function when the post event is triggered. we install multer.js middleware to help us file uploads on the server side. check the index.js in the api

  const handleClick = async (e) => {   // this function handles what happens when we click on the share button
    e.preventDefault();
    let imgUrl = "";   // our image post url is initialized as an empty string
    if (file) imgUrl = await upload(); // if a file has been selected, the code will call the upload(defined above) function to handle the upload process and store the result in the imgUrl(res.data) variable
    mutation.mutate({ desc, img: imgUrl });  // this handles the actual mutation of the newPost that we've destructred to just desc and img(with imgUrl as the value). this is the actual mutation to our db 
    setDesc("");  // returns out desc to an empty field when the post has been made
    setFile(null); // same for the file
  }; // the next thing is to handle how the image will render in post.jsx

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}    // on typing into the input field, the description part of the post is updated in state
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />   // the src creates a fake url of the file that renders the image if the file has been created like a mini preview of the uploaded file
            )}  
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}    // on adding a single image file... hence the files[0], the setFile state is then updates. 
            />
            <label htmlFor="file">
              <div className="item">
                {/* <img src={Image} alt="" /> */}
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              {/* <img src={Map} alt="" /> */}
              <span>Add Place</span>
            </div>
            <div className="item">
              {/* <img src={Friend} alt="" /> */}
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
