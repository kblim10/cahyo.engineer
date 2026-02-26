"use client";

import { FadeIn } from "./animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              <span className="text-accent">~/</span>cahyo.engineer
            </span>
          </div>

          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-muted-foreground/50">/*</span> designed &
            built by cahyo{" "}
            <span className="text-muted-foreground/50">*/</span>
          </p>

          <p className="text-xs text-muted-foreground">
            &copy; {year}
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
