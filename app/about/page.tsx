import { Metadata } from "next";
import Timeline from "@/components/about/Timeline";
import TeamBios from "@/components/about/TeamBios";
import MissionStatement from "@/components/about/MissionStatement";

export const metadata: Metadata = {
  title: "About Us | Our Story, Team & Mission",
  description: "Learn about our journey, meet our talented team, and discover our mission to transform your vision into reality.",
};

export default function AboutPage() {
  return (
    <>
      <Timeline />
      <MissionStatement />
      <TeamBios />
    </>
  );
}

