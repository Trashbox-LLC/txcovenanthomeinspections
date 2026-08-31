import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ImageLightbox } from "./ImageLightbox";

describe("ImageLightbox", () => {
  it("renders the expanded image when open", () => {
    render(
      <ImageLightbox
        isOpen
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
        label="Drainage"
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /drainage and grading condition/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Drainage")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <ImageLightbox
        isOpen={false}
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
        label="Drainage"
        onClose={vi.fn()}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when the backdrop is clicked", () => {
    const onClose = vi.fn();

    const { container } = render(
      <ImageLightbox
        isOpen
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
        label="Drainage"
        onClose={onClose}
      />,
    );

    fireEvent.click(container.firstElementChild as HTMLElement);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", () => {
    const onClose = vi.fn();

    render(
      <ImageLightbox
        isOpen
        image="/images/services/structural_page/drainage.webp"
        imageAlt="Drainage and grading condition at a foundation corner"
        label="Drainage"
        onClose={onClose}
      />,
    );

    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });
});
