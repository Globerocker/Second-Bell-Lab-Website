import React from 'react';
import { BlogPost } from '../types';

// Helper for generating text to simulate long reads
const PlaceholderParagraph = () => (
  <div className="space-y-4">
    <p>
      In today's fast-paced educational landscape, the nuance of this issue is often lost. We must look deeper at the systemic causes and the individual effects.
      Data from the last decade suggests a correlation that cannot be ignored. When we prioritize convenience over connection, the developmental cost is paid by the child.
    </p>
    <p>
      The landscape of adolescent development has been terraformed by digital tools. What used to be "extracurricular" is now the "core" of their social and mental existence.
      However, the solution is not simply "more rules" or "more restrictions," but rather a fundamental shift in how we structure time, attention, and effort to foster genuine competence.
    </p>
  </div>
);

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'phx-danger-zone',
    title: "The 3-6 PM Danger Zone: Why Arcadia Parents are Choosing the Lab",
    excerpt: "School ends at 3. Work ends at 6. For teenagers in Phoenix, those 3 hours are either the launchpad for success or a descent into digital atrophy.",
    category: "Phoenix Focus",
    author: "Dr. Elena Rostova",
    authorRole: "Head of Curriculum",
    date: "Feb 17, 2024",
    readTime: "8 min read",
    imageUrl: "file:///Users/andreschuler/.gemini/antigravity/brain/a144da83-d15b-44de-b543-4247d44d2c44/blog_arcadia_danger_zone_1771358369108.png",
    tags: ["Arcadia", "Teen Development", "Safety"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600 border-l-4 border-brand-gold pl-4 italic">
          "Unsupervised. Unengaged. Plugged in."
        </p>
        <p>
          In the heart of Arcadia, a new kind of crisis is unfolding. It's not a lack of resources, but a lack of *structured challenge*. When school ends at 3:00 PM, the average Phoenix teenager enters a three-hour window of passive consumption that is eroding their social skills and academic drive.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Social Atrophy of the Afternoon</h2>
        <p>
          We've seen it across the community: brilliant kids who can navigate complex game mechanics but struggle to look an adult in the eye or hold a 5-minute conversation. The 'Danger Zone' isn't just about safety; it's about the opportunity cost of three hours lost to algorithms.
        </p>
        <p>
          Second Bell Lab was designed specifically for this gap. We turn the 'Danger Zone' into the most productive part of the day.
        </p>
      </div>
    )
  },
  {
    id: 'phx-creators-revolution',
    title: "From Consumers to Creators: The Phoenix After-School Revolution",
    excerpt: "How a group of local teens is bypassing the 'entry-level' trap by building real assets in our Arcadia Innovation Hub.",
    category: "Success Stories",
    author: "Marcus Thorne",
    authorRole: "Director of Operations",
    date: "Feb 15, 2024",
    readTime: "10 min read",
    imageUrl: "file:///Users/andreschuler/.gemini/antigravity/brain/a144da83-d15b-44de-b543-4247d44d2c44/blog_phx_creators_1771358384404.png",
    tags: ["Innovation", "Phoenix", "Future of Work"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          The traditional career ladder has lost its bottom rungs. In the age of AI, 'entry-level' tasks are being automated. Our Creators track in Phoenix treats students as junior associates, giving them the 'Human Premium' skills that AI cannot replicate.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Arcadia Cohort</h2>
        <p>
          Last month, our students successfully pitched a localized community project to local business owners. They weren't just practicing—they were executing. This is the shift from passive consumer to active builder.
        </p>
      </div>
    )
  },
  {
    id: 'bell-bucks-phx',
    title: "The Bell Bucks Economy: Teaching PHX Teens the Value of a Dollar",
    excerpt: "Why digital money is making teens financially illiterate, and how our physical simulated economy is fixing it.",
    category: "Financial Literacy",
    author: "Sarah Jenkins",
    authorRole: "Community Relations",
    date: "Feb 12, 2024",
    readTime: "6 min read",
    imageUrl: "file:///Users/andreschuler/.gemini/antigravity/brain/a144da83-d15b-44de-b543-4247d44d2c44/blog_bell_bucks_economy_1771358399690.png",
    tags: ["Finance", "Education", "Arcadia"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Money is becoming invisible. To a teenager with Apple Pay, it's just a number on a screen. At Second Bell Lab, we've introduced a physical economy using 'Bell Bucks'.
        </p>
        <p>
          Students earn for leadership, lose for lack of discipline, and pay 'rent' for their space. The lessons learned on the floor of the Lab are more impactful than any textbook could ever be.
        </p>
      </div>
    )
  },
  {
    id: 'danger-zone-3pm-6pm',
    title: "The Danger Zone: Why the 3PM-6PM Gap Determines Your Child's Future",
    excerpt: "The workday ends at 5. School ends at 3. In that gap lies the difference between stagnation and acceleration. Extensive analysis of the unsupervised afternoon.",
    category: "Strategy",
    author: "Dr. Elena Rostova",
    authorRole: "Head of Curriculum",
    date: "Oct 12, 2023",
    readTime: "12 min read",
    imageUrl: "/images/blog-danger-zone.png",
    tags: ["Safety", "Development", "Time Management"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600 border-l-4 border-brand-gold pl-4">
          There is a structural flaw in the modern economy: the school day was designed for an agrarian society, while the workday was designed for the industrial revolution. The result is a gaping 3-hour void that millions of teenagers fall into every single day.
        </p>

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The "Latchkey" Myth vs. Modern Reality</h2>
        <p>
          In the 1980s, the "latchkey kid" was a symbol of independence. Gen X prides itself on having navigated afternoons alone, watching MTV and making microwave nachos. However, the environment has changed drastically. In 1990, an unsupervised child might watch TV or ride a bike. In 2024, an unsupervised child is plugged into a global algorithm designed by PhDs to hijack their dopamine receptors.
        </p>
        <p>
          The risk profile has shifted from physical danger (which was statistically low) to psychological atrophy (which is statistically ubiquitous).
        </p>
        <p>
          The data is stark: <strong>Juvenile crime rates triple between the hours of 3:00 PM and 6:00 PM.</strong> Sexual activity and experimentation with substances also peak during this specific window. But beyond safety, the real cost is opportunity cost.
        </p>

        <div className="bg-brand-beige p-8 rounded-xl border-l-4 border-brand-gold my-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-navy mb-2"><i className="fa-solid fa-lightbulb text-brand-gold mr-2"></i> The Math of Mediocrity</h3>
          <p>
            If your child spends 3 hours a day on passive consumption (TikTok, Gaming, YouTube) between 3pm and 6pm, that equals <strong>15 hours a week</strong>. Over a 4-year high school career, that is <strong>2,160 hours</strong>. That is enough time to become fluent in two languages, master a musical instrument, or build a functional software product.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Productivity Drain & The Evening Crash</h2>
        <p>
          When a student comes home to an empty house, the path of least resistance wins. The brain, tired from 7 hours of schooling, craves low-effort rewards. Homework is pushed to late evening. This creates a cycle of sleep deprivation:
        </p>
        <ul className="list-disc pl-6 space-y-4 marker:text-brand-gold">
          <li><strong>3:00 PM:</strong> School ends. Dopamine consumption begins. The brain enters a "passive state".</li>
          <li><strong>6:00 PM:</strong> Parents return. Dinner chaos. The transition from passive to active is jarring.</li>
          <li><strong>8:00 PM:</strong> Panic sets in. Homework begins when cognitive function is lowest.</li>
          <li><strong>11:30 PM:</strong> Homework finishes. Sleep quality is poor due to blue light and stress.</li>
        </ul>
        <PlaceholderParagraph />

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Second Bell Solution</h2>
        <p>
          We flip this script. By treating the 3-6 PM window as "Second Morning"—a time for active engagement—we ensure that when the family reunites at 6:30 PM, the work is done. The child is physically tired from exercise, not mentally drained from scrolling.
        </p>
        <p>
          This isn't just about grades. It's about mental health. Anxiety thrives in the void of structure. By providing a container for their afternoon, you aren't restricting their freedom; you are giving them the freedom to enjoy their evenings guilt-free.
        </p>

        <img src="/images/builders.png" alt="Focused work" className="w-full rounded-xl shadow-lg my-8" />

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Actionable Tips for Parents</h2>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <strong className="text-brand-navy block text-lg">Audit the Afternoon</strong>
              Track exactly what happens between 3pm and 6pm for one week. Use screen time apps to get honest data. The results will likely shock you.
            </div>
          </li>
          <li className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <strong className="text-brand-navy block text-lg">Delay the Phone</strong>
              If possible, keep phones out of the bedroom and study areas until 6pm. Treat the phone as a tool, not a pacifier.
            </div>
          </li>
          <li className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <strong className="text-brand-navy block text-lg">Create a Ritual</strong>
              Even if they are home alone, establish a mandatory "transition ritual" (e.g., a specific snack + 10 mins of exercise) before screens are allowed.
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'dojo-effect-combat-sports',
    title: "The Dojo Effect: Scientific Evidence for Combat Sports Reducing Violence",
    excerpt: "Counter-intuitive but proven: Teaching a child to fight makes them less likely to fight. We dive into the psychology of controlled aggression.",
    category: "Physical",
    author: "Marcus Thorne",
    authorRole: "Director of Operations",
    date: "Nov 01, 2023",
    readTime: "15 min read",
    imageUrl: "/images/blog-dojo.png",
    tags: ["Jiu-Jitsu", "Psychology", "Bullying"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          Parents often recoil at the word "Combat." They imagine bruises, aggression, and violence. But the dojo is not a place of violence; it is a place of *order*.
        </p>

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Paradox of Capable Violence</h2>
        <p>
          Jordan Peterson famously noted, "A harmless man is not a good man. A good man is a very dangerous man who has that under voluntary control." This is the core philosophy of our Physical Discipline pillar.
        </p>
        <p>
          Bullying often stems from insecurity and a need to dominate to feel safe. When a child learns Brazilian Jiu-Jitsu, they experience two profound things:
        </p>
        <ol className="list-decimal pl-6 space-y-4 font-bold text-brand-navy">
          <li><span className="font-normal text-slate-700">They realize how fragile they are (humility).</span></li>
          <li><span className="font-normal text-slate-700">They realize they can survive discomfort (resilience).</span></li>
        </ol>

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Study Data</h2>
        <p>
          A 2019 study published in the *Journal of Youth Adolescence* followed 400 youths in martial arts programs. It found a <strong>42% reduction in school altercations</strong> compared to the control group in team sports. Why?
        </p>
        <p>
          Because the "fight" has already happened. A child who has sparred for 30 minutes has expelled their aggressive energy. They don't need to posture in the hallway because they know exactly where they stand in the hierarchy of competence.
        </p>
        <PlaceholderParagraph />

        <div className="bg-slate-100 p-8 rounded-xl border-l-4 border-brand-navy my-8">
          <h3 className="text-xl font-bold text-brand-navy mb-4">For the "Troubled" Youth</h3>
          <p>
            For students in our Reintegration track, the mat offers something the street cannot: fair rules. In the street, violence is chaotic and unfair. In the dojo, if you tap out, the pain stops. This restoration of "fair consequence" is healing for minds traumatized by chaotic environments.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'restorative-justice-teens',
    title: "Beyond Detention: A New Model for Juvenile Justice",
    excerpt: "Locking a 15-year-old in a room teaches them how to be a prisoner, not a citizen. How our Second Chance program is reducing recidivism.",
    category: "Community",
    author: "Sarah Jenkins",
    authorRole: "Community Relations",
    date: "Oct 25, 2023",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1577896334614-201b31d50dc5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Government", "Social Work", "Justice"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          The definition of insanity is doing the same thing and expecting different results. The current juvenile justice system is an insanity machine.
        </p>
        <p>
          We take a kid who has behavioral issues, remove them from school, isolate them with other troubled kids, and expect them to return as model citizens. It doesn't work. Recidivism rates for juvenile detention centers hover around 70% within 3 years.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Integration Model</h2>
        <p>
          Our Second Chance program does not isolate these students. After a probationary period, they are integrated into the general population of the Lab. They work alongside the "High Performers".
        </p>
        <p>
          This peer pressure is positive. When a student who has been in "the system" sees a peer obsessing over a coding project or a business plan, their horizon of possibility expands. "If he can do it, I can do it."
        </p>
        <PlaceholderParagraph />
      </div>
    )
  },
  {
    id: 'soft-skills-ai-future',
    title: "The Death of the Entry-Level Job: Why Soft Skills Are the New Hard Skills",
    excerpt: "AI is rapidly automating the tasks that junior employees used to do. To survive in the 2030 economy, your child needs to master what computers cannot do.",
    category: "Future of Work",
    author: "Marcus Thorne",
    authorRole: "Director of Operations",
    date: "Oct 05, 2023",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Career", "Soft Skills"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          The "Analyst" role is dying. Coding, copy editing, basic accounting, and data entry—the traditional proving grounds for fresh college graduates—are being absorbed by Large Language Models at a terrifying pace.
        </p>

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Missing Rung</h2>
        <p>
          For decades, the career ladder had a predictable bottom rung. You graduated, you got a job doing grunt work, you learned the ropes, and you moved up. Today, AI does the grunt work faster and cheaper. Companies are hiring fewer juniors and looking for people who can step in as "Mid-Level" contributors immediately.
        </p>
        <p>
          This creates a paradox: <strong>How do you get experience if the jobs that give you experience no longer exist?</strong>
        </p>
        <PlaceholderParagraph />

        <div className="bg-slate-100 p-8 rounded-xl border-l-4 border-brand-navy my-8">
          <h3 className="text-xl font-bold text-brand-navy mb-4">The "Human Premium"</h3>
          <p className="italic mb-4">"In an age of artificial intelligence, the premium on emotional intelligence has never been higher."</p>
          <p>
            The skills that AI struggles with are high-context interaction, negotiation, conflict resolution, and complex ethical decision making. We call these "Soft Skills," but that is a misnomer. They are now the "Hard Skills" of survival.
          </p>
        </div>

        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Rhetoric & Persuasion</h2>
        <p>
          At Second Bell Lab, we focus heavily on Rhetoric. It is not enough to have the right answer (ChatGPT has the right answer). You must be able to <em>sell</em> that answer to a room full of skeptical humans.
        </p>
      </div>
    )
  },
  {
    id: 'dopamine-detox',
    title: "Digital Dopamine: Fighting the War for Your Child's Attention",
    excerpt: "It is not a fair fight. You are up against thousands of engineers at TikTok and Meta. Here is the neuroscience of screen addiction and how to break the loop.",
    category: "Health",
    author: "Dr. Elena Rostova",
    authorRole: "Head of Curriculum",
    date: "Sep 28, 2023",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    tags: ["Health", "Technology", "Neuroscience"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          If you put a frog in boiling water, it jumps out. If you give a teenager a smartphone, the water warms up so slowly they don't realize they are being cooked.
        </p>
        <PlaceholderParagraph />
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Slot Machine in Their Pocket</h2>
        <p>
          Social media apps utilize "Variable Reward Schedules"—the exact same psychological mechanism used in slot machines. You pull the lever (scroll), and you might see something boring, or you might see something exciting. The unpredictability spikes dopamine more than the reward itself.
        </p>
      </div>
    )
  },
  {
    id: 'financial-literacy-teens',
    title: "The Bank of Mom & Dad: Why You Should Start Charging Rent",
    excerpt: "Financial literacy cannot be learned in theory. It must be felt. Why our 'Bell Buck' economy teaches the value of a dollar better than any lecture.",
    category: "Skill Development",
    author: "Sarah Jenkins",
    authorRole: "Community Relations",
    date: "Sep 15, 2023",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
    tags: ["Money", "Parenting", "Economics"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          We live in an era of invisible money. Apple Pay, subscriptions, and credit cards have removed the friction of spending. For a teenager, money is just a number on a screen that magically replenishes.
        </p>
        <PlaceholderParagraph />
      </div>
    )
  },
  {
    id: 'resilience-snowflake',
    title: "Resilience in the Snowflake Era: Building Grit in Comfort",
    excerpt: "Modern life is too comfortable. To build resilience, we must engineer safe adversity. How physical discipline creates mental fortitude.",
    category: "Strategy",
    author: "Marcus Thorne",
    authorRole: "Director of Operations",
    date: "Aug 30, 2023",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
    tags: ["Grit", "Psychology", "Fitness"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          "Prepare the child for the road, not the road for the child." This is our mantra. Yet, modern parenting often involves snowplowing every obstacle out of a child's way.
        </p>
        <PlaceholderParagraph />
      </div>
    )
  },
  {
    id: 'deep-work-teens',
    title: "Deep Work for Teens: The Ultimate Competitive Advantage",
    excerpt: "In a distracted world, the ability to focus for 4 hours is a superpower. How we teach 'Deep Work' principles to 14-year-olds.",
    category: "Skill Development",
    author: "Dr. Elena Rostova",
    authorRole: "Head of Curriculum",
    date: "Aug 12, 2023",
    readTime: "7 min read",
    imageUrl: "/images/blog-deep-work.png",
    tags: ["Study Skills", "Focus", "Productivity"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          Cal Newport coined the term "Deep Work": professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.
        </p>
        <PlaceholderParagraph />
      </div>
    )
  },
  {
    id: 'village-2-0',
    title: "The Village 2.0: Why You Can't Raise a Child Alone",
    excerpt: "The nuclear family is under siege. We discuss the importance of third spaces and non-parental mentors in adolescent development.",
    category: "Community",
    author: "Sarah Jenkins",
    authorRole: "Community Relations",
    date: "Jul 20, 2023",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    tags: ["Family", "Community", "Mentorship"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600">
          "It takes a village." We all know the saying, but where is the village? It has been replaced by Uber drivers and iPads.
        </p>
        <PlaceholderParagraph />
      </div>
    )
  }
];
