import styled from "styled-components"
import {useDispatch} from "react-redux"
import { removeAllUsers } from "../Store/SLices/UserSlice";


const DeleteAllUsers = () => {

  const dispatch  = useDispatch();
  const clearAllUsers = () => {
    dispatch(removeAllUsers())
  }
  return (
    <Wrapper>
      <button className="btn clear-btn"
      onClick={clearAllUsers}
      >Clear All</button>
    </Wrapper>
  )
}

const Wrapper = styled.section
// eslint-disable-next-line no-unexpected-multiline
`.clear-btn{
text-transform: capitalize;
background-color: #db338a;
margin: 2rem 0 0 0;
}`

export default DeleteAllUsers