import { useCallback, useEffect, useRef, useState } from "react";

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
    let startX = null;

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
  }, [isOpen]);
}

function useLightbox() {
  const containerRef = useRef(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0 });

  const openLightbox = useCallback((images, index) => {
    setLightbox({ isOpen: true, images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const goToNext = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  }, []);

  const goToPrev = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  }, []);

  useScrollLock(lightbox.isOpen);
  useKeyboardControls(lightbox.isOpen, closeLightbox, goToNext, goToPrev);
  useSwipeGestures(lightbox.isOpen, goToNext, goToPrev);
  useFocusTrap(containerRef, lightbox.isOpen);

  return { lightbox, openLightbox, closeLightbox, goToNext, goToPrev, containerRef };
}

export { useLightbox };
