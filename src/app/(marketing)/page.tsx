import AccentLink from "@/components/ui/accent-link";
import WorkList from "@/features/work-list/work-list";
import config from "@/lib/site-config";
import { work } from "@/content/work";
import { education } from "@/content/education";
import { stack } from "@/content/stack";

const Home = () => {
  return (
    <div className="space-y-14">
      <header className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-xl font-medium">{config.userData.name}</h1>
          <span className="font-mono text-xs text-muted">Kochi, IN</span>
        </div>
        <p className="leading-7 text-foreground">
          Software engineer based in India, currently at{" "}
          <AccentLink href="https://google.com">
            Google
          </AccentLink>
          . Previously worked at{" "}
          <AccentLink href="https://www.victoriassecret.com">
            Victoria&apos;s Secret & Co
          </AccentLink>
          and consulted for{" "}
          <AccentLink href="https://github.com">GitHub</AccentLink> on projects
          serving millions of developers. I care about fast, accessible web
          experiences — clean UIs backed by solid code.
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="relative mr-1.5 inline-flex h-1.5 w-1.5 -translate-y-px align-middle">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          available for freelance & consulting
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          Experience
        </h2>
        <p className="text-sm">
          <AccentLink
            className="text-sm"
            href="https://drive.google.com/file/d/1JfuaeO1OjC9YX4PWDryFwZJrrZIPBaaO/view?usp=sharing"
          >
            Resume
          </AccentLink>
        </p>
        <p className="text-xs italic text-muted">Tap a row to expand.</p>
        <WorkList entries={work} />
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          Education
        </h2>
        <ul className="space-y-3">
          {education.map((e) => (
            <li key={e.title} className="space-y-0.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-foreground">{e.title}</span>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-muted">
                {e.school} · <span className="text-foreground">{e.score}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          Stack
        </h2>
        <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted">
          {stack.map((s, i) => (
            <span key={s}>
              {s}
              {i < stack.length - 1 && (
                <span className="ml-2 text-subtle">·</span>
              )}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
