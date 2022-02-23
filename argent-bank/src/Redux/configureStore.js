import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function configureStores() {
  return configureStore({ reducer });
}
