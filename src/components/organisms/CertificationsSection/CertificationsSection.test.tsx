import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { SITE } from "@/lib/constants";
import { CertificationsSection } from "./CertificationsSection";

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

describe("CertificationsSection", () => {
  it("renders the professional certifications heading", () => {
    render(<CertificationsSection />);

    expect(
      screen.getByText(/professional certifications/i),
    ).toBeInTheDocument();
  });

  it("shows the TREC ID below the certification badges", () => {
    render(<CertificationsSection />);

    const trecLicensed = screen.getByText(/trec licensed/i);
    const trecId = screen.getByText(`TREC ID: ${SITE.trecId}`);

    expect(
      trecLicensed.compareDocumentPosition(trecId) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
