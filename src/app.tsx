import { useEffect } from "preact/hooks"
import { Logo } from './logo'

export function App() {
  useEffect(() => {
    const acontroller = new AbortController();
    fetch("/data.json", { headers: { "x-authorization": "test" }, signal: acontroller.signal }).then(console.log.bind(console));
    return () => acontroller.abort();
  }, []);
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
