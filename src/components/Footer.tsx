import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

interface Campus {
  name: string;
  address: string;
  vpAddress?: string;
  telephone?: string;
  hotline: string;
  email: string;
  socials: SocialLink[];
}

const linkColumns: string[][] = [
  ["Về chúng tôi", "Học thuật", "Tuyển sinh"],
  ["Đời sống học đường", "Liên hệ", "Chính sách bảo mật"],
  ["Thư viện", "Tuyển dụng"],
];

const socialIconSrc: Record<string, string> = {
  Facebook: "/images/social/facebook.svg",
  YouTube: "/images/social/youtube.svg",
  LinkedIn: "/images/social/linkedin.svg",
  Zalo: "/images/social/zalo.svg",
};

function socialLink(name: string): SocialLink {
  return { name, href: "#", icon: socialIconSrc[name] };
}

const campuses: Campus[] = [
  {
    name: "TRƯỜNG QUỐC TẾ CANADA (CIS)",
    address: "07 Đường Số 23, Phường Tân Mỹ, TP. Hồ Chí Minh",
    telephone: "1900 255 636",
    hotline: "1900 255 636",
    email: "enquiry@cis.edu.vn",
    socials: ["Facebook", "YouTube", "LinkedIn", "Zalo"].map(socialLink),
  },
  {
    name: "TUYỂN DỤNG CIS",
    address: "07 Đường Số 23, Phường Tân Mỹ, TP. Hồ Chí Minh",
    hotline: "(028) 54 123 456",
    email: "recruitment@admin.cis.edu.vn",
    socials: ["Facebook", "LinkedIn"].map(socialLink),
  },
];

function FooterLinkColumn({ links }: { links: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {links.map((label) => (
        <a
          key={label}
          href="#"
          className="text-white/90 transition hover:text-white hover:underline"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function CampusContact({ campus }: { campus: Campus }) {
  return (
    <div>
      <h5 className="mb-3 font-bold">{campus.name}</h5>
      <p className="mb-1 text-sm text-white/80">Địa chỉ: {campus.address}</p>
      {campus.vpAddress && (
        <p className="mb-1 text-sm text-white/80">
          <span className="font-semibold">VP Đại diện:</span> {campus.vpAddress}
        </p>
      )}
      {campus.telephone && (
        <p className="mb-1 text-sm text-white/80">Telephone: {campus.telephone}</p>
      )}
      <p className="mb-1 text-sm text-white/80">Hotline: {campus.hotline}</p>
      <p className="mb-3 text-sm text-white/80">Email: {campus.email}</p>
      <div className="flex gap-3">
        {campus.socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            className="h-8 w-8 transition hover:opacity-80"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#941B1A] pt-16 pb-8 text-white">
      <div className="mx-auto max-w-[1272px] px-7">
        <ScrollReveal
          stagger
          y={20}
          className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 md:grid-cols-3"
        >
          {linkColumns.map((links, index) => (
            <FooterLinkColumn key={index} links={links} />
          ))}
        </ScrollReveal>

        <div className="pt-12">
          <h4 className="mb-8 text-sm font-bold uppercase tracking-wide">
            Liên hệ CIS
          </h4>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {campuses.map((campus) => (
              <CampusContact key={campus.name} campus={campus} />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          © Copyright 2026 Canada International School (CIS). All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
