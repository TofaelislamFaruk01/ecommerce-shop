import React from "react";
import { Ban } from "lucide-react";
import { cn } from "@/lib/utils";
import { EmptyPlaceholderProps } from "@/types";

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = ({
  title = "No Data Found",
  message = "There iss nothing to display here right now.",
  icon = <Ban size={48} className="text-gray-400" />,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-12 text-center text-gray-600",
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyPlaceholder;
