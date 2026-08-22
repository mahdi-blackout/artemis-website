import Knob from "@/components/studio/Knob";
import Fader from "@/components/studio/Fader";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export default function ConsolePanel() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading
        eyebrow="Get a Feel for It"
        title="Console controls, right in the browser."
        description="A small taste of the tactile gear behind every session — drag the knobs and faders."
        align="center"
        className="mx-auto"
      />
      <Reveal delay={0.15}>
        <div className="glass glow-border mt-14 flex flex-wrap items-end justify-center gap-10 rounded-3xl p-10 backdrop-blur-[20px] backdrop-saturate-[1.4] md:gap-14 md:p-14">
          <Knob label="LOW" defaultValue={62} color="electric" />
          <Knob label="MID" defaultValue={48} color="emerald" />
          <Knob label="HIGH" defaultValue={70} color="amber" />
          <Fader label="MASTER" defaultValue={78} color="electric" />
          <Fader label="AUX" defaultValue={55} color="emerald" />
          <Knob label="DRIVE" defaultValue={35} color="amber" />
        </div>
      </Reveal>
    </section>
  );
}
