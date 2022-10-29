import { Button, Tooltip } from "@material-tailwind/react";
import React from "react";

function ReuseAbleButton({
  children = null,
  onClick = null,
  color = "",
  tooltip = "",
}) {
  return (
    <Tooltip
      content={tooltip}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button
        className={`px-3 py-3 rounded from-blue-400 to-indigo-900 ${color}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

export default ReuseAbleButton;
