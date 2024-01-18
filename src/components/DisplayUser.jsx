import styled from "styled-components";
import { useSelector } from "react-redux";
import {MdDeleteForever } from "react-icons/md";
import {useDispatch} from "react-redux";
import { removeUser } from "../Store/SLices/UserSlice";
const DisplayUser = () => {

    const users = useSelector((state) => state.users.users);
    console.log(users);
    const dispatch = useDispatch();

    const deleteUser = (user) => {
        dispatch(removeUser(user.id));
    }

  return <Wrapper>
    {users?.map((user) => (
        <li key={user.id}>
             {user.name}
             <button className=" btn-delete"
             onClick={() => deleteUser(user)}
             >
                <MdDeleteForever className="delete-icon"/>
             </button>
        </li>
    ))}
  </Wrapper>;
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUser;
