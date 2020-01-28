import React from "react";

export default function Users({ users }) {
  return (
    <div>
      {users.map((user, key) => {
        return <div key={key}> {user.fullName}</div>
      })}
    </div>
  );
}
