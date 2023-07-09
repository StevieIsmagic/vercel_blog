export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Most folks online know me as <b>Stevie IsMagic</b>.
        The pseudonym is a remnant from a time when it was unnatural to share personal details with strangers on the internet. Times do change..
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I find writing to be one of the kindest forms of artistic expression.
          And through this blog I wish to share the knowledge I've aquired on my human journey.
          Sir Isaac Newton famously said if today we see further, it is because we stand on the shoulders of giants.
          In my hunble opinion, we each owe it to the future to contribute our unique bits of experience, however small they may seem.

        </p>
        <hr />
        {/* <p>
          I'm passionate about many creative pursuits, including music, writing, painting, and of course, thinking!
          This combination of interests is what ultimately led me to my current professional role writing software.
          I've always felt a deep desire participate in the process of building the future.
          And I feel honored to live in an age where the tools to positively impact a generation are readily at my fingertips.
          
        </p>
        <hr /> */}
        <p>
          I'm currently working on a handful of projects that I'll slowly share with you soon as I build out this site.
          My most important ones involve helping my parents actualize their life dreams.
          It's the least I can do for the two people who have literally given me their everything.
          Stay tuned for more details..
        </p>
        <p className="mb-8">
          Outside of creative pursuits, I'm an aspiring <b>beach bum yogi</b>.
          The sea is a source of great peace and inspiration for me. I am, after all, a water sign Y'all. ~
        </p>
      </div>
    </section>
  );
}
