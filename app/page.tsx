import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid min-h-dvh place-content-center">
        <section className="shadow-card w-[327px] overflow-hidden rounded-[1.25rem] md:w-[450px]">
          <div className="bg-hero-pattern h-40 w-full bg-contain bg-no-repeat md:h-[220px]" />
          <div className="bg-white px-6 py-8 md:px-12">
            <div className="mb-6 space-y-4 px-2 md:mb-5 md:space-y-[17px]">
              <h1 className="text-center text-[1.375rem] font-black leading-normal text-[#1F2E55]">
                Order Summary
              </h1>
              <p className="text-center text-[.9375rem] font-medium leading-[1.5625rem] text-[#717FA6]">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </div>
            <div className="mb-6 flex items-center rounded-[.6875rem] bg-[#F7F9FF] p-4 md:mb-8">
              <div className="bg-music-pattern mr-5 h-12 w-12 rounded-3xl bg-[#DFE6FB] bg-center bg-no-repeat" />
              <div>
                <span className="block text-sm font-black leading-normal text-[#1F2E55]">
                  Annual Plan
                </span>
                <span className="block text-sm font-medium leading-normal text-[#717FA6]">
                  $59.99/year
                </span>
              </div>
              <Link
                href="#"
                className="ml-auto text-[.8125rem] font-bold leading-normal text-[#382AE1] underline transition-colors hover:text-[#766CF1] hover:no-underline"
              >
                Change
              </Link>
            </div>
            <button className="shadow-button mb-6 block h-[50px] w-full rounded-[11px] bg-[#382AE1] text-[.9375rem] font-black leading-normal text-white transition-colors hover:bg-[#766CF1] md:mb-8">
              Proceed to Payment
            </button>
            <button className="mx-auto block text-[.9375rem] font-black leading-normal text-[#717FA6] transition-colors hover:text-[#1F2E55]">
              Cancel Order
            </button>
          </div>
        </section>
      </main>

      <footer className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <p className="whitespace-nowrap text-sm font-semibold text-[#717FA6]">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-[#1F2E55] transition-colors hover:text-[#766CF1]"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="#"
            className="text-[#1F2E55] transition-colors hover:text-[#766CF1]"
          >
            Arda Eker
          </a>
          .
        </p>
      </footer>
    </>
  );
}
