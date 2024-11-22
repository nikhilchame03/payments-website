import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const [user, setUser] = useState([]);
  const [filter,setFilter]=useState('');
  

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter).then((res) => {
      setUser(res.data.user);
    });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
        onChange={e=>{
            setFilter(e.target.value)
        }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {user.map((user) => (
          <Users key={user._id} user={user}></Users>
        ))}
      </div>
    </>
  );
};

function Users({ user }) {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between my-2 p-2 border rounded shadow-sm">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className=" w-40 text-center   flex flex-col justify-center h-full p-2">
        <Button   onClick={e=>{
            navigate(`/send?id=${user._id}&name=${user.firstName}`);

        }} label={"Send Money"} />
      </div>
    </div>
  );
}
