import type { HomeContent } from "@/types/content";

const PARTNER_LOGOS = [
  "ib-world-school.png",
  "collegeboard-ap.png",
  "cis-accredited.png",
  "cognia.png",
  "wasc.png",
];

const SOCIAL_ICON_COUNT = 6;

export function Footer({ content }: { content: HomeContent["footer"] }) {
  return (
    <footer className="bg-white pt-16">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-border">
          <img
            src="/images/logo/cis-logo-color.png"
            alt="CIS"
            className="h-20 object-contain"
          />
          <div className="flex items-center gap-6 flex-wrap">
            {PARTNER_LOGOS.map((logo, index) => (
              <div key={logo} className="flex items-center gap-6">
                <img
                  src={`/images/partners/${logo}`}
                  alt=""
                  className="h-12 object-contain"
                />
                {index < PARTNER_LOGOS.length - 1 && (
                  <span className="w-px h-10 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="font-heading uppercase text-lg md:text-xl font-bold mt-8 mb-8">
          {content.schoolFullName}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12">
          <div>
            <h3 className="text-primary font-heading uppercase text-2xl mb-4">
              {content.contactHeading}
            </h3>

            <div className="flex gap-2 items-center mb-3">
              <img
                src="/images/asset/ic-footer-phone.svg"
                alt=""
                className="w-5 h-5 inline mr-2"
              />
              {content.phone}
              <span className="ml-4 text-sm text-muted-foreground">
                {content.hotlineLabel}: {content.hotlineNote}
              </span>
            </div>

            <div className="flex gap-2 items-start mb-3">
              <img
                src="/images/asset/ic-footer-mail.svg"
                alt=""
                className="w-5 h-5 inline mr-2"
              />
              {content.emails}
            </div>

            <div className="flex gap-2 items-start mb-6">
              <img
                src="/images/asset/ic-footer-location.svg"
                alt=""
                className="w-5 h-5 inline mr-2"
              />
              {content.address}
            </div>

            <div className="flex gap-3">
              {Array.from({ length: SOCIAL_ICON_COUNT }, (_, i) => i + 1).map(
                (n) => (
                  <a
                    key={n}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-cis-red-dark hover:shadow-md"
                  >
                    <img
                      src={`/images/asset/ic-footer-social-${n}.svg`}
                      alt=""
                      className="w-5 h-5"
                    />
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps?q=07+Duong+So+23,+Tan+My,+Ho+Chi+Minh+City&output=embed"
              className="w-full h-[300px] rounded-lg border-0"
              loading="lazy"
              title="CIS location map"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary text-white py-4 mt-4">
        <div className="max-w-[1170px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">
          <p>{content.companyName}</p>
          <a href="#" className="underline">
            {content.privacyPolicy}
          </a>
        </div>
      </div>
    </footer>
  );
}
