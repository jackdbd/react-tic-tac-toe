/**
 * Square module.
 * Even if Square is a functional component, React stil needs to be available in
 * scope, so we need to import it.
 * @module /components/Square
 */
import React from "react";

export function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
