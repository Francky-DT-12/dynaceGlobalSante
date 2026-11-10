"use client";

export default function PickLink({ name }: { name: string }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("pick-product", { detail: name }));
    const formElem = document.getElementById("commander");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      className="btn-order-select"
      onClick={handleClick}
      aria-label={`Commander ${name}`}
    >
      <span>Commander</span>
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
