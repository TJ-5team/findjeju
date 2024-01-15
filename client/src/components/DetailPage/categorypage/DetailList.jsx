import React from "react";

export default function DetailList({ name, list }) {

  const changeText = (e) => {
    if (!e) {
      return
    }

    // console.log(e);
    if (e.includes("<br>")) {
      return e.split('<br>').map(line => <>{line}<br /></>);
    } else if (e.includes("<br/>")) {
      return e.split('<br/>').map(line => <>{line}<br /></>);
    } else if (e.includes("<br />")) {
      return e.split('<br />').map(line => <>{line}<br /></>);
    } else {
      return e
    }
  }
  if (list === "") {
    return
  }

  return (
    <li key={name}>
      <strong>{name}</strong>
      <span>{changeText(list)}</span>
    </li>
  )
}