"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

    // Small delay to ensure the new DOM is completely rendered after navigation
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal:not(.visible)");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
