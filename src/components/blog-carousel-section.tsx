import { Carousel } from "@/components/carousel";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title:
      "Art Nurtures the Soul: A Creative Journey at International Preschools",
    excerpt:
      "At TAS, art bridges emotion and thinking for young learners. Through a multi-sensory program, inspiring creative spaces, and supportive teachers, art becomes a daily part of preschool life—helping children express themselves, develop emotional awareness, and explore the world with confidence from an early age.",
  },
  {
    title:
      "Why Preschoolers Should Be Introduced to Technology with Purpose and Guidance",
    excerpt:
      "At TAS, technology is thoughtfully integrated into early childhood learning to support cognitive, language, and emotional development. It's never overused or a replacement for real interaction – but a guided, balanced tool that enriches your child's journey of growth.",
  },
  {
    title:
      "Choosing an International Preschool: Should You Prioritize Facilities or Curriculum?",
    excerpt:
      "At TAS, parents don't have to choose between facilities and academics. Our school offers both: a modern American-standard campus and a holistic early years program combining play-based learning, STEAM, language, and emotional development – ensuring children grow with balance and joy from the very start.",
  },
  {
    title:
      "Facilities vs. Curriculum – Which Matters Most When Choosing an International Preschool?",
    excerpt:
      "When looking for an international preschool, many parents often find themselves choosing between two options: a school with modern facilities but an unclear curriculum, or one with a strong academic program but less inspiring spaces. So, which should take priority? In reality, the best choice lies in a balance of both and to truly understand, we must first look at the role each plays in a child's development.",
  },
  {
    title:
      "How Parents and Schools Can Collaborate to Support Holistic Child Development",
    excerpt:
      "At TAS, the bond between teachers and parents goes beyond daily updates – it's a true partnership rooted in empathy, trust, and shared purpose. Because in early childhood, what matters most isn't just what a child learns, but how consistently they are loved and guided through every step of their journey.",
  },
  {
    title: "The Benefits of Small Class Sizes in Early Childhood Education",
    excerpt:
      "With only 10–15 students per class, a native lead teacher and a bilingual assistant, TAS ensures personalized attention, timely feedback, and a nurturing learning space where each child is seen, heard, and supported to grow at their own pace – right from the very beginning",
  },
  {
    title:
      "Learning Through Play – A Globally Recognized Trend in Modern Early Childhood Education",
    excerpt:
      "At TAS, learning through play is not just a global trend but a daily practice. With thoughtfully designed open spaces, multi-sensory materials, and nurturing teachers, young learners thrive in an engaging international environment that fosters creativity, confidence, and holistic development from the very start.",
  },
  {
    title:
      "What Does a Typical Day Look Like at TAS International Preschool?",
    excerpt:
      "A day in the Preschool Division at The American School (TAS) is a journey of holistic growth, where children learn through play in a nurturing bilingual environment. With a well-balanced schedule of movement, creativity, emotional development, and life skills, every moment is thoughtfully designed to support each child's mind and heart from the very first years.",
  },
  {
    title:
      "How to Prepare Your Child for Their First Day at an International Preschool",
    excerpt:
      "Starting preschool is an emotional milestone for both children and parents. At TAS, this important transition is gently supported—with emotional preparation and life skills training—so every child feels safe, happy, and ready to thrive, while parents feel reassured every step of the way.",
  },
  {
    title:
      "Why International Preschools Are the Ideal Choice for Multinational Children and Expat Families",
    excerpt:
      "For expat and multicultural families, choosing an international preschool is more than a beginning—it's a strategic step for a global future. At TAS, children thrive in a bilingual, open-minded, and diverse environment that prepares them to transition smoothly into any international education system, anywhere in the world.",
  },
  {
    title: "The Role of Motor Skills in Modern Early Childhood Education",
    excerpt:
      "Motor skills are essential for children to grow in body, mind, and emotion. At TAS, movement is not just playtime — it is integrated into the core of the learning experience. With multi-sensory playgrounds, creative movement-based lessons, and an early swim program, every activity is designed to help children build confidence, coordination, and a joyful learning attitude.",
  },
  {
    title: "Should Preschoolers Join Talent Development Classes Early?",
    excerpt:
      "From 18 months to 5 years old is a golden stage for children to explore their abilities through art, music, movement, and more. At TAS, talent is nurtured naturally through daily experiences — not pressured by competition. Children are free to express emotions, build essential skills, and grow confidence in a warm, inspiring international environment designed just for their age.",
  },
  {
    title: "Why Emotional Intelligence (EQ) Matters in Early Childhood Education",
    excerpt:
      "Emotional intelligence (EQ) lays the foundation for young children to grow with empathy, confidence, and positive behavior. At TAS, EQ is thoughtfully integrated into daily classroom experiences such as emotional circles, storytelling, and role-play activities — creating a nurturing, safe, and human-centered environment where children can develop naturally and meaningfully.",
  },
  {
    title: "How to Help Your Child Feel Confident on Their First Day of School",
    excerpt:
      "For children aged 18 months to 3 years, the first day of school can bring tears and anxiety as they separate from their parents. At TAS, young learners are gently introduced to the classroom through a settling-in week, with no pressure to stay the whole day. A warm, welcoming environment, caring teachers, and a life skills–based approach help children feel safe, confident, and happy from their very first day",
  },
  {
    title: "Checklist for Choosing the Ideal Preschool for Your 3-Year-Old",
    excerpt:
      "Age 3 marks a major milestone as children begin exploring the world independently. Choosing the right preschool at this stage lays a strong foundation for well-rounded development. At TAS, children from 18 months to 5 years old learn in a United States–standard environment with qualified international teachers, a program that nurtures cognitive, emotional, and physical growth, along with comprehensive care in nutrition, health, and safety.",
  },
  {
    title:
      "Do International Preschools Ensure Safety, Nutrition, and Health for Young Children?",
    excerpt:
      "Safety, nutrition, and health care are top priorities when choosing a preschool for your child. This article helps parents understand the essential criteria of a high-quality international preschool — from hygiene procedures and well-balanced meal plans to psychological support and on-campus health care services.",
  },
  {
    title:
      "United States – Standardized International Kindergarten – The Ideal Start for Natural English Proficiency",
    excerpt:
      "The ages from 2 to 6 are a golden period for children to acquire a foreign language naturally and effectively. Enrolling your child in a United States–standard international kindergarten from an early age helps develop their language thinking, communication skills, and confidence — essential foundations for successful learning in the future.",
  },
  {
    title:
      "International vs. Vietnamese Preschool Programs: What Parents Should Know",
    excerpt:
      "Should you choose an international preschool or a Vietnamese preschool for your child? This article helps parents understand the key differences in curriculum, teaching methods, and developmental environments — enabling them to make the best choice for their child right from the early years.",
  },
  {
    title: "Why Enroll Your Child in an International Preschool from the Early Years?",
    excerpt:
      "Choosing a school for their child is always a significant decision for parents, especially during the early years — the \"golden\" stage for developing awareness, character, and foundational skills.",
  },
];

// Real downloaded TAS campus / student-life photos, cycled across the 19
// slides (the live site reuses similar stock-style photography this way).
const BLOG_IMAGES = [
  "/images/685215c9cc7bbfe9dfcc8045_Kindergarten-B1---Vi-sao-nen-cho-con-hoc-truong-mam-non-quoc-te-ngay-tu-doi-dau-p-1600.webp",
  "/images/695f1f62ea892bfc6d4fe958_530297734_1345925877542087_225820365755328426_n-p-1600.jpg",
  "/images/6923fc1cd003b8bd6f06cefd_edit.webp",
  "/images/67fcc4c227107c324a8ef63b_474813387_1166484215486255_908178808445388952_n-p-1600.jpg",
  "/images/67fcd0cd9a931fab282c4410_482027480_1200836082051068_6484038801733099194_n-p-1600.jpg",
  "/images/67e362a88b825905e8fc7811_471719340_1143911234410220_8761678441710839873_n-p-1600.jpg",
  "/images/67ea14dbefc741b78f28889d_474800444_1163867852414558_1287744250052738853_n-p-1600.jpg",
  "/images/68d6081cb33ead41c718f704_Graduation-Grade-12-5843-min.jpg",
  "/images/68de4a293203dc4779ccbb98_z7073928320959_6552c3e211a94ef43cd5fe761a7cb7e1-p-1600.jpg",
  "/images/68ac12a71356a15cc6956b56_Screenshot-2025-08-25-143626.webp",
  "/images/67d3d14a91e70f15828cf659_Annotation-2025-03-14-134835-p-1600.png",
  "/images/67fcc659a4ddcea0246f3368_480921510_1194711619330181_720746479259154074_n-p-1600.jpg",
  "/images/6a21466cbe40efaf26428190_611241047_1484328890368451_5706714832769279403_n-p-1600.jpg",
];

export function BlogCarouselSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-6 text-sm font-bold uppercase tracking-wide text-tas-navy">
        Latest from TAS
      </p>
      <Carousel
        arrowVariant="circle"
        slides={BLOG_POSTS.map((post, index) => {
          const image = BLOG_IMAGES[index % BLOG_IMAGES.length];
          return (
            <article
              key={post.title}
              className="relative aspect-[16/7] w-full overflow-hidden rounded-lg bg-tas-navy"
            >
              <Image
                src={image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority={index === 0}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <h3 className="max-w-3xl text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {post.excerpt}
                </p>
              </div>
            </article>
          );
        })}
      />
    </section>
  );
}
