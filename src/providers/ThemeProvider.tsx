"use client";
import React, { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "@/redux/store";
import { COLOR_MODE } from "@/enums";

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const mode = useSelector((state: State) => state.theme.mode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove(
        COLOR_MODE.LIGHT,
        COLOR_MODE.DARK
      );
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  return <>{children}</>;
};

export default ThemeProvider;
