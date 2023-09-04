import React from "react";

export const Item = ({ item, selected }) => {
  return (
    <tr
      style={{
        color: selected.includes(item) ? "green" : "black",
        fontWeight: selected.includes(item) ? "bold" : "normal",
      }}
    >
      <td>{item.icon}</td>
      <td>{item.type}</td>
    </tr>
  );
};
