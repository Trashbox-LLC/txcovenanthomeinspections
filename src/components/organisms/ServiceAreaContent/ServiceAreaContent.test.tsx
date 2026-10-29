import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ServiceAreaContent } from "./ServiceAreaContent";
import { getServiceAreaBySlug } from "@/lib/service-areas";

beforeAll(() => {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin = "";
    readonly thresholds: readonly number[] = [];

    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("ServiceAreaContent", () => {
  it("renders city copy, neighborhoods, and schedule CTAs", () => {
    const area = getServiceAreaBySlug("humble");
    expect(area).toBeDefined();

    render(<ServiceAreaContent area={area!} />);

    expect(
      screen.getByRole("heading", {
        name: /home inspections in humble/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(area!.paragraphs[0]!)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /neighborhoods we serve/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/fall creek/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /schedule your inspection/i }),
    ).toHaveAttribute("href", "/contact");
  });
});
