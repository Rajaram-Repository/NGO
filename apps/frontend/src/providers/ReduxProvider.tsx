// src/providers/ReduxProvider.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import configureStore from "../store/store"; // Adjust this path to your actual Redux store

interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={configureStore}>{children}</Provider>;
}
