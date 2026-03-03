import { useEffect } from "react";

function useScrollLock(isOpen) {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
}

function useKeyboardControls(isOpen, onClose, onNext, onPrev) {
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.repeat) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);
}

function useSwipeGestures(isOpen, onNext, onPrev) {
  useEffect(() => {
    if (!isOpen) return;
    const startX = null;

    function handleTouchStart(e) {
      startX = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
      if (startX === null) return;
      const dX = e.changedTouches[0].clientX - startX;
      if (dX > 50) onPrev();
      if (dX < -50) onNext();
      startX = null;
    }

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, onNext, onPrev]);
}

function useFocusTrap(containerRef, isOpen) {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const focusable = Array.from(containerRef.current.querySelectorAll("button"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleTab(e) {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) { e.preventDefault(); return; }

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [containerRef, isOpen]);
}

function useLightbox(isOpen, containerRef, onClose, onNext, onPrev) {
  useScrollLock(isOpen);
  useKeyboardControls(isOpen, onClose, onNext, onPrev);
  useSwipeGestures(isOpen, onNext, onPrev);
  useFocusTrap(containerRef, isOpen);
}

export { useLightbox };
