"use client";

import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sun, Moon } from "lucide-react";

import { State } from "@/redux/store";
import { toggleTheme } from "@/redux/themes/themeSlice";
import { Button } from "@/components/ui/button";
import { COLOR_MODE } from "@/enums";

const DarkModeToggle: FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: State) => state.theme.mode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle Theme"
      className="rounded-full"
    >
      {mode === COLOR_MODE.DARK ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-800" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
