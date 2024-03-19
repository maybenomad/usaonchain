"use client";

import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";

import { useRef } from "react";

export default () => {
  const ref = useRef<FireworksHandlers>(null);
  return (
    <Fireworks
      ref={ref}
      className="hidden md:block"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.5,
      }}
    />
  );
};
