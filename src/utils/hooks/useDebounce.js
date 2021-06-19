import { useState } from "react";

export default function useDebounce() {
  const [typingTimout, setTypingTimout] = useState();

  function debounce(fn, wait = 1000) {
    clearTimeout(typingTimout);

    const timeOut = setTimeout(() => {
      fn();
    }, wait);

    setTypingTimout(timeOut);
  }
  return debounce;
}
