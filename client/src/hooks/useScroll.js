import { useEffect, useState } from "react";

export default function useScroll() {
  const [state, setState] = useState({ y: 0 });

  const onScroll = () => {
    setState({ y: window.scrollY });
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return state;
} 