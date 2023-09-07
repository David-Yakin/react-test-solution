import {
  CSSProperties,
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";

interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type UserProps = {
  user: UserInterface;
  onClick: Dispatch<SetStateAction<number | null>>;
  userId: number | null;
};

const User: FC<UserProps> = ({ user, onClick, userId }) => {
  const {
    name,
    email,
    address: { city },
    id,
  } = user;

  const userStyle: CSSProperties = {
    border: "solid black 3px",
    padding: "12px",
    borderRadius: "10px",
    margin: "2px",
    backgroundColor: "yellow",
  };

  const userStyleNotPicked: CSSProperties = {
    border: "solid black 3px",
    padding: "12px",
    borderRadius: "10px",
    margin: "2px",
  };

  return (
    <div
      style={userId === id ? userStyle : userStyleNotPicked}
      onClick={() => onClick(id)}
    >
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>city: {city}</p>
    </div>
  );
};

const UserCards = () => {
  const [users, setUsers] = useState<null | UserInterface[]>(null);
  const [userId, setUserId] = useState<null | number>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (userId) {
      setCount((prev) => prev + 1);
    }
  }, [userId]);

  return (
    <div>
      <p>Count:{count}</p>
      {!users && <p>Getting Users...</p>}
      {users && !users.length && <p>No Users in the DB!</p>}
      {users &&
        !!users.length &&
        users.map((user, i) => (
          <User user={user} key={i} onClick={setUserId} userId={userId} />
        ))}
    </div>
  );
};

export default UserCards;
