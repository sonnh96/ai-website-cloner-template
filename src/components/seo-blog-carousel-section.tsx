import { Carousel } from "@/components/carousel";
import Image from "next/image";

interface SeoBlogPost {
  title: string;
  excerpt: string;
  image: string;
}

const SEO_BLOG_POSTS: SeoBlogPost[] = [
  {
    title:
      "TAS - 16 Years of Whole-Child Education with a Seamless Learning Pathway",
    excerpt:
      "Looking for an international school for your child? TAS offers a clear learning journey from IB PYP to AP, helping students grow academically and make confident university choices. The school is built on four whole-child pillars and is expanding toward the IB Diploma Programme.",
    image:
      "/images/68f98e0a1e0e678a04a36e03_study-abroad-pathway-at-TAS-p-800.jpg",
  },
  {
    title:
      "2025 | A Year of Innovation, Upgrading, and Growth at TAS International School",
    excerpt:
      "2025 marks a major milestone for TAS International School with strong academic achievements, campus upgrades, IB PYP authorization, and IB DP Candidate status, reinforcing a sustainable education strategy for Mustangs.",
    image:
      "/images/67d3d14a91e70f15828cf659_Annotation-2025-03-14-134835-p-800.png",
  },
  {
    title:
      "IB PYP at TAS – Learning Through Inquiry, Nurturing Future-Ready Skills",
    excerpt:
      "The IB Primary Years Programme (PYP) is one of the world's most advanced educational frameworks for elementary students. At The American School (TAS), the PYP is offered from Grade 1 to Grade 5, providing an active, holistic, and experience-rich learning journey that helps children develop essential thinking skills, core values, and the mindset of global citizens from their early years.",
    image: "/images/68ac12a71356a15cc6956b56_Screenshot-2025-08-25-143626-p-800.webp",
  },
  {
    title:
      "TAS Students Earn Over USD 200,000 in Scholarships from Top Universities Worldwide",
    excerpt:
      "For many consecutive years, students of The American School (TAS) — widely recognized as one of the best international schools in Ho Chi Minh City — have collectively earned more than USD 200,000 in scholarships from prestigious universities around the world.",
    image: "/images/68ac1b263153ae0584b01785_Screenshot-2025-08-25-151128-p-500.webp",
  },
  {
    title: "Toplist International Schools in District 2",
    excerpt:
      "Explore international schools in District 2: curriculum, facilities, faculty, and why many parents choose TAS for their child's holistic development.",
    image:
      "/images/68f98e0a1e0e678a04a36e03_study-abroad-pathway-at-TAS-p-1080.jpg",
  },
  {
    title: "TAS International School Curriculum - Full U.S. Learning Path",
    excerpt:
      "Explore TAS's international school curriculum: Common Core, AP, and Candidate IB PYP & IBDP. A seamless, personalized U.S. pathway led by experienced international teachers.",
    image:
      "/images/67d3d14a91e70f15828cf659_Annotation-2025-03-14-134835-p-1080.png",
  },
];

export function SeoBlogCarouselSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Carousel
        arrowVariant="square"
        arrowClassName="justify-end"
        slides={SEO_BLOG_POSTS.map((post) => (
          <article
            key={post.title}
            className="flex flex-col gap-6 sm:flex-row sm:items-start"
          >
            <div className="relative aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold leading-snug text-tas-navy">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      />
    </section>
  );
}
