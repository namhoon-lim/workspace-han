import { BackSubHeader } from "@/components/BackSubHeader";
import { InfoIcon, MoreHorizontalIcon, PlusIcon, TargetIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export const OverseasremitScreen = () => {
  return (
    <div
      className="flex flex-col min-h-screen items-center bg-white"
      data-model-id="2674:65882"
    >
      <BackSubHeader backTo="/" />
    </div>
  );
};
