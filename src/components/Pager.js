import React from "react";

export default function Pager({data}) {
  return (
    <div>
    {data.count / 50}
    </div>
  );
}
