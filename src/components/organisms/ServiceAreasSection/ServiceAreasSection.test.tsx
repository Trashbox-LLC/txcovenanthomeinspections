import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ServiceAreasSection } from "./ServiceAreasSection";
import { SERVICE_AREAS } from "@/lib/service-areas";

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

describe("ServiceAreasSection", () => {
  it("lists every service area with links to city pages", () => {
    render(<ServiceAreasSection />);

    expect(
      screen.getByRole("heading", { name: /areas we serve/i }),
    ).toBeInTheDocument();

    for (const area of SERVICE_AREAS) {
      expect(
        screen.getByRole("link", { name: new RegExp(area.name, "i") }),
      ).toHaveAttribute("href", `/service-areas/${area.slug}`);
    }
  });

  it("invites callers when their city is not listed", () => {
    render(<ServiceAreasSection />);

    expect(
      screen.getByText(/can.?t find your city\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /\(832\) 470-5230/i }),
    ).toHaveAttribute("href", "tel:8324705230");
  });
});
