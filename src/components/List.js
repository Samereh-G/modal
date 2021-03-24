import React, { useEffect } from "react";
import { request } from "../config/api";

export default function List() {
  useEffect(() => {
    request("/profiles").then(([status, json]) => {
      console.log("json", json);
    });
  }, []);

  return <div>Liiiiist</div>;
}
