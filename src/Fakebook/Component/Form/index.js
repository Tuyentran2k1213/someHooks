import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addMess } from "../../redux/action";

export default function Form() {

  const dispatch = useDispatch();
  
  const [userComment, setUserComment] = useState({
    name: '',
    content: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserComment(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

    const handleSubmit = e => {
      e.preventDefault();
      // props.sendMess(userComment);
      if(userComment.name === ''){
        alert('please enter your name');
      } else if(userComment.content === ''){
        alert('please say something');
      } else {
        dispatch(addMess(userComment));
        setUserComment({
        name: '',
        content: '',
      });
      }
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-t-8 border-slate-500"
        onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
            Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="name"
              value={userComment.name}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="comment"
            >
              Comment
            </label>
            <input
              className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              type="text"
              name="content"
              value={userComment.content}
              placeholder="type your comments here"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
    )
}

// const mapDispatchToProps = dispatch => ({
//   sendMess: value => {
//     dispatch(addMess(value));
//   },
// })

// export default connect(null, mapDispatchToProps)(Form);