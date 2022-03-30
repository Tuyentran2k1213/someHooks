import { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { Form, Comment } from "./Component";

export default function Fakebook() {

  useEffect(() => {
    document.title = 'Fakebook chat app using useSelector and use Dispatch'
  }, [])

  const cmts = useSelector(state => state.reducer.comments);

  return (
    <div className='p-10 border-solid border-2 border-gray-200 rounded'>
        {cmts.map((cmt, index) => (
            <Comment
            key={index}
            name={cmt.name}
            content={cmt.content}
            />
        ))}
        <Form/>
    </div>
  );
}

// const mapStateToProps = state => ({
//     cmts: state.reducer.comments,
// })

// export default connect(mapStateToProps)(Fakebook);