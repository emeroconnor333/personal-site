import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale-0 hover:grayscale"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        My Personal Site
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hey, I'm Emer, a software engineering student. Here, you’ll find my projects
           and blog posts on what I’m building and what I'm learning along the way.
        </p>
        <p>
          I post regularly about my experiences learning to code—the challenges, breakthroughs,
           and everything in between. I also love sharing thoughts on the other things that
           inspire me, from art and creativity to the books I’m reading and places I’m exploring.
        </p>
        <p>
          In the projects section you'll see what I've completed, along with a glimpse into
           what I’m currently working on.
        </p>
        <p>
          Check out my photo gallery for glimpses of the moments, places, and experiences that
          inspire me beyond the screen.
        </p>
      </div>
    </section>
  );
}
