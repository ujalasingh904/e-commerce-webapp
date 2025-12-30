"use client";

import { WixClientContext } from "@/src/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};