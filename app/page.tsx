import Image from "next/image";
import localFont from "next/font/local";

import * as Icon from "./icons";

const myFont = localFont({
  src: "../public/Patriot.ttf",
  display: "swap",
});

const otherFont = localFont({
  src: "../public/Starstrp.ttf",
  display: "swap",
});

function csx(...cs: string[]) {
  return cs.filter((c) => Boolean(c)).join(" ");
}

const BIRDEYE_LINK =
  "https://birdeye.so/token/69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs?chain=solana";

function Button({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <a
      className={csx(
        "bg-[#c40c2e] rounded py-4 px-8 text-lg md:text-2xl font-bold tracking-wider"
      )}
      href={url}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className={`relative flex min-h-screen flex-col items-center`}>
      <header
        className={csx(
          "flex flex-col justify-center items-center bg-black pt-12 md:pb-0 md:pt-6 relative"
        )}
      >
        <h1
          style={{ zIndex: 30 }}
          className={`relative flex w-[50%] md:w-full gap-x-4 flex-wrap items-center my-0 text-[68px] md:text-[80px] lg:text-[120px] ${myFont.className} items-center justify-center`}
        >
          <div>
            <span style={{ color: "#195ba6" }}>AMER</span>ICAN{" "}
          </div>
          <span
            className="relative top-[-32px] md:top-0"
            style={{ color: "#c40c2e" }}
          >
            COIN
          </span>
        </h1>
      </header>
      <section
        className={csx(
          "relative h-[300px] md:h-[400px] lg:h-[600px] w-full overflow-hidden flex items-center justify-center",
          "bg-flag bg-[length:1000px_auto] md:bg-none"
        )}
      >
        <Image
          className="relative drop-shadow-2xl md:hidden"
          src="/apaches.png"
          height={400}
          width={600}
          alt="AMERICA"
        />
        <video
          className="hidden md:block h-[100%] w-[100%] object-cover"
          src="/patriots.webm"
          autoPlay
          loop
          muted
        ></video>
      </section>
      <section className="flex flex-col w-full items-center py-8 gap-y-8 bg-clearBlack">
        <div className="flex flex-col gap-y-4 md:flex-row justify-center items-center gap-x-4">
          <Button url={BIRDEYE_LINK}>BUY &#36;USA</Button>
          <div className="p-2 md:p-4 rounded-xl border bg-[#195ba6] border-[#195ba6] text-xs md:text-base">
            69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs
          </div>
        </div>
      </section>
      <section className="flex flex-row w-full justify-center items-center gap-x-8 pb-12 bg-clearBlack">
        <a
          href="https://t.me/AMERICACOINUSA"
          className="h-[50px] w-[50px] hover:text-[#c40c2e] cursor:pointer"
        >
          <Icon.Telegram />
        </a>
        <a
          href="https://twitter.com/USA_ON_CHAIN"
          className="h-[50px] w-[50px] hover:text-[#c40c2e] cursor:pointer"
        >
          <Icon.X />
        </a>
      </section>
      <section
        className={csx(
          "flex flex-row justify-center items-center gap-x-8 p-8 md:p-12",
          "bg-clearBlack border-t border-b border-clearWhite"
        )}
      >
        <a
          href="/whitepaper.pdf"
          target="_blank"
          className="text-xl md:text-3xl uppercase font-bold hover:text-[#c40c2e] cursor:pointer"
        >
          Read Our Whitepaper
        </a>
      </section>
      <section className="flex flex-col w-full items-center py-12 gap-y-4 px-8 bg-clearBlack relative">
        <div
          className={`text-3xl md:text-5xl font-bold uppercase ${myFont.className}`}
        >
          <span style={{ color: "#195ba6" }}>What</span> is{" "}
          <span style={{ color: "#c40c2e" }}>
            <span className="font-serif text-4xl md:text-6xl">&#36;</span>USA
          </span>
          ?
        </div>
        <p className="text-lg md:text-2xl md:w-[50%] text-center">
          &#36;USA is the greatest empire in the history of humanity brought
          on-chain by a strong community of god-fearing patriots. We will not
          stop until all other memes have been liberated.
        </p>
      </section>
      <section className="flex flex-col w-full items-center py-12 gap-y-4 px-8 bg-clearBlack">
        <div
          className={`text-3xl md:text-5xl font-bold uppercase ${myFont.className}`}
        >
          <span style={{ color: "#195ba6" }}>How</span> to{" "}
          <span style={{ color: "#c40c2e" }}>buy</span>?
        </div>
        <ol className="text-lg md:text-2xl md:w-[50%] text-center">
          <li>
            1. Download{" "}
            <a
              className="text-[#c40c2e] underline hover:no-underline"
              href="https://phantom.app"
            >
              Phantom wallet
            </a>
          </li>
          <li>2. Purchase some $SOL</li>
          <li>
            3. Head to{" "}
            <a
              className="text-[#c40c2e] underline hover:no-underline"
              href="https://jup.ag/swap/SOL-USA_69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs"
            >
              Jupiter Exchange
            </a>{" "}
            (use this link)
          </li>
          <li>4. Connect wallet and swap for $USA</li>
        </ol>
      </section>
      <section className="flex flex-col w-full items-center py-12 gap-y-4 px-8 bg-clearBlack">
        <div
          className={`text-3xl flex items-center justify-center gap-x-4 flex-wrap md:text-5xl font-bold uppercase ${myFont.className}`}
        >
          <span style={{ color: "#195ba6" }}>What</span> the{" "}
          <span style={{ color: "#c40c2e" }}>fuck</span> is a kilometer?
        </div>
        <p className="text-lg md:text-2xl md:w-[50%] text-center">
          We don&#39;t know and we don&#39;t care. Because we own a piece of the
          greatest country on earth.
        </p>
      </section>
      <footer className="pt-8 md:pt-16 pb-8 px-8 flex flex-col gap-y-2 items-center justify-center text-xs md:text-sm">
        <div className="text-center">
          American Coin ($USA) has no affiliation with the United States
          government.
        </div>
        <div>© 2024 American Coin $USA. All rights reserved.</div>
      </footer>
    </main>
  );
}
