import React from 'react';
import { BlogPost } from '../types';

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
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    tags: ["Arcadia", "Teen Development", "Safety"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p className="text-xl font-light text-slate-600 border-l-4 border-brand-gold pl-4 italic">
          "The hours immediately after school are the prime time for juvenile crime."
        </p>
        <p>
          In the heart of Arcadia, a hidden crisis unfolds every afternoon. Statistics reveal a stark reality: nationwide, over <span className="font-bold text-brand-navy">11 million children</span> leave school for an environment without adult supervision. This 3-hour window is not just a gap in the schedule; it's a structural flaw in the modern family rhythm that juvenile justice experts call the "Danger Zone."
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Peak of Risk</h2>
        <p>
          Data confirms that juvenile crime peaks precisely when the school bell rings. Violent crimes by juveniles frequently peak between <span className="text-brand-gold font-bold">3:00 PM and 4:00 PM</span> on school days. Without a structured challenge, boredom becomes a catalyst for risk. A cited study found that bored teenagers are 50% more likely to engage in risky behavior—not because they are "bad kids," but because the developing adolescent brain is desperate for stimulation that the modern unsupervised afternoon doesn't provide.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Turning the Tide in Arcadia</h2>
        <p>
          Second Bell Lab was designed to reclaim this territory. We turn the 'Danger Zone' into a high-performance environment. Our curriculum isn't "homework help"; it's an immersive system that treats the afternoon as a professional development window. By the time parents return from work at 6:00 PM, our students haven't just stayed safe—they've built assets, mastered physical discipline, and gained intellectual momentum.
        </p>
        <p>
          In Phoenix, the choice is clear: leave the afternoon to chance and algorithms, or invest it in a structured village that demands excellence.
        </p>
      </div>
    )
  },
  {
    id: 'academic-autonomy',
    title: "Beyond Tutoring: Building Academic Autonomy in Phoenix",
    excerpt: "Why most tutoring fails to create lasting change and how we teach students to manage their own intellectual inventory.",
    category: "Academic",
    author: "Dr. Elena Rostova",
    authorRole: "Head of Curriculum",
    date: "Feb 10, 2024",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    tags: ["Study Habits", "Phoenix", "Excellence"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Standard tutoring is often a "crutch" model. It addresses the symptom (a low grade) without fixing the underlying pathology: a lack of student agency. At Second Bell Lab, we focus on <span className="italic font-semibold">Academic Autonomy</span>—the transition from being "helped" to being "self-regulated."
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Science of Agency</h2>
        <p>
          Research into Self-Regulated Learning (SRL) consistently shows that supporting a student's basic psychological needs—competence, autonomy, and relatedness—is the only way to develop deep, lifelong learners. Tutoring that simply provides answers can actually increase dependency. Our model treats students as "Knowledge Managers" who must track their own cognitive load and deadlines.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Intellectual Inventory</h2>
        <p>
          In the competitive Phoenix landscape, the students who win aren't those who spend the most hours at a desk, but those who operate with the highest <span className="text-brand-gold font-bold">Intensity of Focus</span>. We teach "Deep Work" principles, allowing students to accomplish in two hours what their peers struggle to do in five.
        </p>
        <p>
          We aren't just helping them pass the next test; we are teaching them how to build a production system for their thoughts. This is the difference between a student who survives high school and a leader who dominates it.
        </p>
      </div>
    )
  },
  {
    id: 'martial-arts-discipline',
    title: "The Mat as a Mirror: Why Martial Arts is Mandatory at the Lab",
    excerpt: "Emotional regulation cannot be taught in a lecture. It must be felt under pressure. The neuroscience of discipline.",
    category: "Physical",
    author: "Marcus Thorne",
    authorRole: "Director of Operations",
    date: "Feb 08, 2024",
    readTime: "11 min read",
    imageUrl: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?q=80&w=1974&auto=format&fit=crop",
    tags: ["Jiu Jitsu", "Resilience", "Discipline"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Resilience is not a concept; it's a biological adaptation. You cannot "think" your way to emotional regulation—you must experience safely managed adversity. This is why Brazilian Jiu-Jitsu (BJJ) is a foundational pillar of the Second Bell experience.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Biological Stress Response</h2>
        <p>
          Engaging in martial arts does more than build muscle; it retools the nervous system. Training increases endorphin production while actively lowering cortisol—the primary stress hormone. On the mat, teenagers learn to stay calm while being physically pressured. This practice translates directly to the real world: a student who can keep their breath steady while sparring is a student who can keep their mind clear during a high-stakes exam.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Building Mental Fortitude</h2>
        <p>
          The mat serves as a "truth machine." It offers immediate, objective feedback that a screen cannot replicate. We see Arcadia teens who formerly struggled with impulsive reactions develop a profound sense of self-control. Through the tiered success of our BJJ program, they learn that grit is the bridge between commitment and achievement.
        </p>
        <p>
          In our Lab, every student learns that power is meaningless without the discipline to master oneself first.
        </p>
      </div>
    )
  },
  {
    id: 'phx-creators-revolution',
    title: "From Consumers to Creators: The Phoenix After-School Revolution",
    excerpt: "How local teens are bypassing the 'entry-level' trap by building real assets in our Arcadia Innovation Hub.",
    category: "Success Stories",
    author: "Marcus Thorne",
    authorRole: "Director of Operations",
    date: "Feb 15, 2024",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    tags: ["Innovation", "Phoenix", "Future of Work"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          The traditional career ladder has lost its bottom rungs. In the age of pervasive AI, 'entry-level' tasks are being automated at an unprecedented rate. Our "Creators" track treats students as junior associates, giving them the "Human Premium" skills that algorithms cannot replicate: high-stakes negotiation, creative synthesis, and ethical leadership.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Portfolio Economy</h2>
        <p>
          In tomorrow's economy, a college degree is the floor, not the ceiling. The real differentiator will be: "What have you built?" At Second Bell Lab, we ensure our students graduate with a portfolio of proof. Whether it's a functioning software prototype, a published research paper, or a managed investment strategy, they leave with tangible evidence of their competence.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Arcadia Innovation Hub</h2>
        <p>
          Our students recently executed a market research strategy for a local Phoenix non-profit, delivering insights that outperformed traditional consultants. They weren't "playing business"—they were solving real problems. This shift from passive consumer to active builder is the core of the Second Bell revolution.
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
    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Finance", "Education", "Arcadia"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Money is becoming invisible. To a teenager with Apple Pay and Venmo, currency is just an abstract number on a glass pane. The friction of the "hand-to-hand" transaction is gone, and with it, the psychological weight of spending.
        </p>
        <p>
          At Second Bell Lab, we've introduced a physical economy using <span className="font-bold text-brand-navy italic">'Bell Bucks'</span>. This isn't just a reward system; it's a rigorous micro-economy that simulates the real world.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Earn, Save, Invest... or Lose</h2>
        <p>
          Students earn Bell Bucks for leadership roles, punctuality, and high-quality work. Conversely, they "pay rent" for their workspace and "access fees" for premium equipment. This makes financial literacy visceral. When a student chooses between a luxury snack and "investing" their bucks in a collaborative project to earn a higher return, they are learning economics in their bones.
        </p>
        <p>
          The goal is simple: ensure that when they receive their first real paycheck in the outside world, they know exactly what to do with it.
        </p>
      </div>
    )
  },
  {
    id: 'restorative-justice',
    title: "Beyond Detention: A New Model for Juvenile Justice in AZ",
    excerpt: "Locking a 15-year-old in a room teaches them how to be a prisoner, not a citizen. Our Second Chance integration model.",
    category: "Community",
    author: "Sarah Jenkins",
    authorRole: "Community Relations",
    date: "Oct 25, 2023",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1577896334614-201b31d50dc5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Government", "Social Work", "Justice"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          The current juvenile justice system is often an "insanity machine." We take kids with behavioral issues, isolate them with other troubled peers, and expect them to return as model citizens. It simply doesn't work.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Integration Model</h2>
        <p>
          Our <span className="italic">Second Chance</span> program does not isolate; it integrates. After a probationary period, students are mentored by our high-performers. They experience positive peer pressure for perhaps the first time in their lives. By shifting their horizon of possibility, we provide the ultimate antidote to recidivism.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Reducing Recidivism</h2>
        <p>
          In Arizona, where traditional detention methods struggle to produce lasting change, our pilot results show that when a child is given a role of responsibility and a community that demands it of them, they rarely return to their old patterns.
        </p>
      </div>
    )
  },
  {
    id: 'dopamine-loop',
    title: "Digital Dopamine: Fighting the War for Your Child's Attention",
    excerpt: "It is not a fair fight. You are up against thousands of engineers at TikTok and Meta. The neuroscience of screen addiction.",
    category: "Health",
    author: "Dr. Elena Rostova",
    authorRole: "Head of Curriculum",
    date: "Sep 28, 2023",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    tags: ["Health", "Technology", "Neuroscience"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          Social media apps utilize "Variable Reward Schedules"—the same mechanism used in slot machines to create addiction. You pull the lever (scroll), and you might see something exciting. This unpredictability spikes dopamine more than the reward itself.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">Breaking the Loop</h2>
        <p>
          At Second Bell Lab, we teach students the neuroscience of their own urges. When they understand <span className="italic">how</span> they are being manipulated, they gain a degree of agency. Coupled with our "No-Phone" policy during Lab hours, they begin to rewire their brains for sustained, analog focus.
        </p>
        <p>
          The weapon in this war is not parental restriction, but adolescent awareness.
        </p>
      </div>
    )
  },
  {
    id: 'mentorship-village',
    title: "The Village 2.0: Why You Can't Raise a Child Alone",
    excerpt: "The nuclear family is under siege. The importance of 'Third Spaces' and non-parental mentors in adolescent development.",
    category: "Community",
    author: "Sarah Jenkins",
    authorRole: "Community Relations",
    date: "Jul 20, 2023",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    tags: ["Family", "Community", "Mentorship"],
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          "It takes a village." But the modern village has been replaced by Uber drivers and digital devices. Teenagers biologically need "Third Spaces"—places that are neither home nor school—where they can interact with high-caliber adults who aren't their parents.
        </p>
        <h2 className="text-3xl font-heading font-bold text-brand-navy mt-8 mb-4">The Non-Parental Mentor</h2>
        <p>
          An adolescent is programmed to pull away from their parents to find their own identity. If they don't have a structured village to pull *towards*, they pull towards the peer group or the internet. Second Bell Lab provides that village—an environment of adults who demand excellence while providing unconditional support.
        </p>
        <p>
          By restoring the village, we restore the bridge to successful adulthood.
        </p>
      </div>
    )
  }
];
