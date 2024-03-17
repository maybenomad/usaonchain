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
        "bg-[#c40c2e] rounded py-4 px-8 text-2xl font-bold tracking-wider"
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
          "flex flex-col justify-center items-center bg-black pt-6"
        )}
      >
        <h1
          style={{ zIndex: 30 }}
          className={`my-0 text-[48px] md:text-[80px] lg:text-[120px] ${myFont.className}`}
        >
          <span style={{ color: "#195ba6" }}>AMER</span>ICAN{" "}
          <span style={{ color: "#c40c2e" }}>COIN</span>
        </h1>
      </header>
      <section
        className={csx(
          "relative h-[200px] md:h-[400px] lg:h-[600px] w-full overflow-hidden flex items-center justify-center"
        )}
      >
        <video
          className="w-[100%] object-fill"
          src="/patriots.webm"
          autoPlay
          loop
          muted
        ></video>
      </section>
      {/* <div
        className={`absolute top-0 font-normal py-4 pb-12 w-full text-center bg-transparent`}
      >
        <Button url={BIRDEYE_LINK}>BUY &#36;USA</Button>
      </div> */}
      <section className="flex flex-col w-full items-center py-8 gap-y-8 bg-clearBlack">
        <div className="flex flex-row justify-center items-center gap-x-4">
          <Button url={BIRDEYE_LINK}>BUY &#36;USA</Button>
          <div className="p-4 rounded-xl border border-[#195ba6]">
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
      <section className="flex flex-col w-full items-center py-12 gap-y-4 bg-clearBlack">
        <div className={`text-5xl font-bold uppercase ${myFont.className}`}>
          <span style={{ color: "#195ba6" }}>What</span> is{" "}
          <span style={{ color: "#c40c2e" }}>
            <span className="font-serif text-6xl">&#36;</span>USA
          </span>
          ?
        </div>
        <p className="text-2xl w-[50%] text-center">
          &#36;USA is the greatest empire in the history of humanity brought
          on-chain by a strong community of god-fearing patriots. We will not
          stop until all other memes have been liberated.
        </p>
      </section>
      <section className="flex flex-col w-full items-center py-12 gap-y-4 bg-clearBlack">
        <div className={`text-5xl font-bold uppercase ${myFont.className}`}>
          <span style={{ color: "#195ba6" }}>How</span> to{" "}
          <span style={{ color: "#c40c2e" }}>buy</span>?
        </div>
        <ol className="text-2xl w-[50%] text-center">
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
      <section className="flex flex-col w-full items-center py-12 gap-y-4 bg-clearBlack">
        <div className={`text-5xl font-bold uppercase ${myFont.className}`}>
          <span style={{ color: "#195ba6" }}>What</span> the{" "}
          <span style={{ color: "#c40c2e" }}>fuck</span> is a kilometer?
        </div>
        <p className="text-2xl w-[50%] text-center">
          We don&#39;t know and we don&#39;t care. Because we own a piece of the
          greatest country on earth.
        </p>
      </section>
      <footer className="pt-16 pb-8 flex flex-col gap-y-2 items-center justify-center text-sm">
        <div>
          American Coin ($USA) has no affiliation with the United States
          government.
        </div>
        <div>© 2024 American Coin $USA. All rights reserved.</div>
      </footer>
    </main>
  );
}
