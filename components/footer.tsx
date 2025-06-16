import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-4 border-t-[1px]">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by{" "}
        <Link
          href="https://github.com/happybear-21"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          happybear-21
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/happybear-21/airdoc"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  )
}