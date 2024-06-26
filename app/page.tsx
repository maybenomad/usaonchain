import Image from "next/image";
import localFont from "next/font/local";
import Fireworks from "./fireworks";

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
    <main
      className={`relative flex min-h-screen flex-col items-center overflow-x-hidden`}
    >
      <header
        className={csx(
          "flex flex-col justify-center items-center bg-black pt-12 md:pb-0 md:pt-6 relative"
        )}
      >
        <h1
          style={{ zIndex: 30 }}
          className={`z-40 relative flex w-[50%] md:w-full gap-x-4 flex-wrap items-center my-0 text-[68px] md:text-[80px] lg:text-[120px] ${myFont.className} items-center justify-center`}
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
        <Image
          className={csx(
            "w-auto absolute z-10",
            "h-[150px] left-[-20px] top-[200px]",
            "md:h-[160px] md:left-[-140px] md:top-[0px]",
            "lg:h-[280px] lg:left-[-220px] lg:top-[0px]"
          )}
          src="/eagle.png"
          width={350}
          height={350}
          alt="AMERICA"
        />
        <Image
          className={csx(
            "w-auto absolute z-10 rotate-12",
            "h-[150px] right-[-40px] top-[170px]",
            "md:h-[180px] md:right-[-180px] md:top-[-20px]",
            "lg:h-[300px] lg:right-[-240px] lg:top-[-40px]"
          )}
          src="/cheeseburger.png"
          width={300}
          height={300}
          alt="AMERICA"
        />
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
        <Fireworks />
        <Image
          className={csx(
            "w-auto absolute z-40",
            "h-[200px] right-[-30px] bottom-0",
            "md:h-[270px]",
            "lg:h-[450px] lg:right-0"
          )}
          src="/model1.png"
          width={600}
          height={600}
          alt="AMERICA"
        />
      </section>
      <section className="flex flex-col w-full items-center py-8 gap-y-8 bg-clearBlack z-10 relative">
        <div className="flex flex-col gap-y-4 md:flex-row justify-center items-center gap-x-4">
          <Button url={BIRDEYE_LINK}>BUY &#36;USA</Button>
          <div className="p-2 md:p-4 rounded-xl border bg-[#195ba6] border-[#195ba6] text-xs md:text-base">
            69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs
          </div>
        </div>
        <Image
          className={csx(
            "w-auto absolute z-40 rotate-[-12deg]",
            "h-[150px] left-[-60px] top-[-100px]",
            "md:h-[180px] md:right-[-190px] md:top-[-140px]",
            "lg:h-[300px] lg:top-[-220px]"
          )}
          src="/pickup.png"
          width={500}
          height={500}
          alt="AMERICA"
        />
      </section>
      <section className="flex flex-row w-full justify-center items-center gap-x-8 pb-12 bg-clearBlack">
        <a
          href="https://t.co/8npD0Li1E9"
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
      <section className="flex flex-row w-full justify-center items-center gap-x-8 pb-12 bg-clearBlack pt-6">
        <a href="https://capitalism.americancoin.xyz">
          <Image
            className={csx(
              "w-auto z-40 rotate-[8deg]",
              "h-[150px]",
              "md:h-[180px]",
              "lg:h-[240px] transition duration-150 hover:scale-125 cursor-pointer"
            )}
            src="/dollar.png"
            width={500}
            height={500}
            alt="AMERICA"
          />
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
      <section className="flex flex-col w-full items-center py-12 gap-y-4 px-8 bg-clearBlack relative">
        <div
          className={`text-3xl md:text-5xl font-bold uppercase ${myFont.className}`}
        >
          <span style={{ color: "#195ba6" }}>Our</span> road
          <span style={{ color: "#c40c2e" }}>map</span>
        </div>
        <Image
          className="w-full md:w-auto md:h-[400px]"
          src="/usaroadmap.png"
          height={600}
          width={600}
          alt="AMERICA"
        />
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
          <span style={{ color: "#195ba6" }}>WTF</span> IS
          <span style={{ color: "#c40c2e" }}>A</span> KILOMETER?
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
        <div>
          Video content by{" "}
          <a
            className="text-[#c40c2e] underline hover:no-underline"
            href="https://www.youtube.com/@callsignrice1785"
          >
            CallsignRice
          </a>
          .
        </div>
      </footer>
    </main>
  );
}
