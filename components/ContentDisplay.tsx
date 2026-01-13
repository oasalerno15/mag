"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ContentDisplayProps {
  activeSection?: string;
}

export default function ContentDisplay({ activeSection }: ContentDisplayProps) {
  const [showStory, setShowStory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset story view when section changes
  useEffect(() => {
    setShowStory(null);
    setCurrentPage(1);
  }, [activeSection]);

  if (showStory === "beforeContact") {
    return (
      <motion.div
        className="min-h-screen px-8 py-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #E8D5B7 0%, #DBA968 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Story Container - Western Paper Style */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-50/80 backdrop-blur-sm border-4 border-amber-800 shadow-2xl p-8 md:p-12 relative">
            {/* Decorative Corner Elements */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-amber-900"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-amber-900"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-amber-900"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-amber-900"></div>

            {/* Story Title - Western Style */}
            <div className="text-center mb-8 border-b-2 border-amber-800 pb-6">
              <h2 
                className="text-5xl font-bold text-amber-950 mb-3 tracking-wider"
                style={{
                  textShadow: "2px 2px 0px rgba(217, 119, 6, 0.3)",
                  letterSpacing: "0.1em"
                }}
              >
                BEFORE CONTACT
              </h2>
              <p className="text-lg text-amber-800 italic">
                A Western Tale by Julian Kang
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-16 h-1 bg-amber-800"></div>
                <div className="w-2 h-2 bg-amber-800 rotate-45"></div>
                <div className="w-16 h-1 bg-amber-800"></div>
              </div>
            </div>

            {/* Story Text with Image */}
            <div className="relative">
              {/* Path Image on Left */}
              <div className="float-left mr-6 mb-4">
                <Image
                  src="/paths.png"
                  alt="Western path illustration"
                  width={250}
                  height={350}
                  className="object-contain"
                />
              </div>

              {/* Story Text wrapping around image */}
              <div className="text-amber-950 text-base leading-loose">
                <p className="mb-4 first-letter:text-6xl first-letter:font-bold first-letter:text-amber-900 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
                  When Cornelius was 14, he became enthralled by Clint Eastwood films. <em>A Fistful of Dollars</em> became a romanticized means of escape for him. He thought that sleeping under the stars, eating beans from a can, and burning his neck under the hot Texan sun would be a much better life than suburban Massachusetts…
                </p>

                <p className="mb-4">
                  He frequented the fences on his father's ranch, just so he could test the limits of his stead. Only when the Texas sun was forty-five degrees lower than it had been four to five hours before would he go. Only when the Texas sun bathed him in its warm light did he feel the comfort to journey out alone. When it was warmer than the cold of night, but colder than the mornings he spent as a slave to its heat.
                </p>
                
                <p className="mb-4">
                  It was awfully quiet, it was. He thought about jumping over the fence to go beyond the dry grasses of his father's land, but he wasn't tall enough at the time, so he didn't. The wind was too loud at that time of day, so he couldn't hear his mother calling him for supper. The food cooled, and then he walked back.
                </p>
              </div>
            </div>

            {/* Decorative End Marker */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-px bg-amber-800"></div>
                <div className="text-amber-800 text-xl">★</div>
                <div className="w-12 h-px bg-amber-800"></div>
              </div>
            </div>
          </div>

          {/* Back Button - Western Style */}
          <button
            onClick={() => setShowStory(null)}
            className="mt-8 px-6 py-3 bg-amber-900 text-orange-50 text-sm font-bold tracking-wider rounded border-2 border-amber-950 hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl"
          >
            ← BACK TO MAGAZINE
          </button>
        </div>
      </motion.div>
    );
  }

  if (showStory === "birchStreet") {
    const totalPages = 3;

    return (
      <motion.div
        className="min-h-screen relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/veer.png"
            alt="Birch Street illustration"
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center center" }}
            priority
          />
        </div>

        {/* Text Overlay - Positioned on Right Side */}
        <div className="relative z-10 min-h-screen flex items-center justify-end p-8">
          <div className="w-full max-w-2xl bg-white/95 backdrop-blur-sm p-10 shadow-2xl">
            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Birch Street
            </h2>
            <p className="text-lg text-gray-700 italic mb-8 border-b pb-4 border-gray-300">
              by Veer Malhotra
            </p>

            {/* Page 1 - Preface */}
            {currentPage === 1 && (
              <div className="text-gray-900 text-sm leading-relaxed space-y-4">
                <p className="font-semibold text-base">Preface</p>
                <p className="italic">
                  This narrative was fabricated on the account of the following sources: police fillings from October 10th, 1942, school transcripts from 1942 and 1943, MetLife performance evaluations and progress reports from 1957-1963, 4 restored pages from a half burned scrap journal scavanged from his abandoned NYC midtown apartment, recollections from an ex-lover whom he slept with for 7 weeks, and a ticket to Paris, France on January 18th, 1963.
                </p>
                <p>
                  He was a stoic, an unyielding man who carried himself with a dogmatic aura. He focused on his work, the gym, and piano jazz. He limited distractions, he limited enjoyment, he limited disruption in his easy, predictable life.
                </p>
                <p>
                  He kept no photos; he wrote no letters; he burned all his journals after the notebook's pages filled with ink; he would occasionally golf alone; he slept by 8:00 P.M.; he rose at 4:30 A.M.
                </p>
                <p>
                  It wasn't that isolation followed him into death; instead, isolation is what killed him.
                </p>
                <p className="italic">
                  What follows is an attempt to reconstruct and fabulate this stranger's death, so that he, too, doesn't become another vanishing face. Let this be his burial, his resting place, his memorial.
                </p>
              </div>
            )}

            {/* Page 2 - The Father & The Letter */}
            {currentPage === 2 && (
              <div className="text-gray-900 text-sm leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-base mb-2">The Father</p>
                  <p>
                    <strong>January 3rd, 1935</strong> He was born on Birch Street. His house, with an overcoat of pale blue, was a narrow two-story home that almost always smelled like yeast and old wooden boards on summer afternoons. His father worked at a steel plant; his mother taught piano lessons in the living room on their big Steinway piano. It was an anniversary gift for "10 of the most precious years of his life," the father would say. Every day after work, the father would bring home a little gift for the boy: a toy, candy, a little dessert, or a story. Every day after work, the boy and his mom would wait by the door at 7:00 P.M., hoping the father would knock. Every day at 7:01 P.M., the father would pick the boy up and playfully throw him into the air. Every night after dinner, the boy, his mother, and his father would sit around the piano. The father would enjoy a small glass of Old Forester and offer the boy a little sip when mom wasn't looking. The mom would immerse herself in the piano, playing blues, jazz, and classical. The boy would sit on his mom's lap, close his eyes, with a little, innocent smile on his face, and sway back and forth. Some nights would end in tears of happiness from the mother, and others would end in laughter as the boy purposefully messes up his mom's song.
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-base mb-2">The Letter</p>
                  <p>
                    <strong>September 16th, 1940</strong> the father opened a letter bearing a government seal. "You are hereby ordered for induction into the Armed Forces of the United States" were the only words he read. He couldn't read past the first line. His hands began to shake uncontrollably. He took a deep breath and, unexpectedly, felt a drip fall onto his shoulder. And then another. And then another. He turned around and saw his wife, breaking down, peering over his shoulder.
                  </p>
                </div>
              </div>
            )}

            {/* Page 3 - The Living Room */}
            {currentPage === 3 && (
              <div className="text-gray-900 text-sm leading-relaxed space-y-4">
                <p className="font-semibold text-base mb-2">The Living room on Birch Street</p>
                <p>
                  <strong>June 16th, 1941</strong> The house became quiet. The boy waited by the door every evening at 7:00 P.M., but his mom no longer followed. The boy would sit by the piano every night with his mom, but no notes were played.
                </p>
                <p>
                  <strong>September 16th, 1942</strong> Gradually, the liquor cabinet emptied. The living room became hollow. Pieces of furniture slowly began percolating out to a yard sale. First was the large oak chair, which sat awkwardly in the top-left corner of the room. Soon, the Victorian floral couch was paying for mom's bottles.
                </p>
                <p>
                  Every night, the boy would run upstairs and lock himself in his room. Strange noises would come from downstairs: screams, moans, cries, and then… silence. The boy never really understood what was going on, but he reacted the same every night. He pulled his blanket over his head and clenched his fists so tight that he cut into the flesh of his palms.
                </p>
                <p>
                  <strong>October 6th, 1942</strong> The mother would not let the boy go to his room. She made him sit by the piano every night while she talked to herself. She would laugh, which would quickly turn into screams, which ended in tears, and then silence, just like the boy heard every night from his room. The mother would taunt the boy as she took swigs of scotch, rum, or whatever alcohol she could steal from the store. The boy would cry, then beg for 'dad'. This just made things worse. It brought about uncontrollable laughter in his mother. But this wasn't like the laughter that used to arise from nights around the piano. This was a sadistic laughter. A laughter that would quickly turn into an aggressive slap across the face.
                </p>
                <p>
                  <strong>October 10th, 1942</strong> The moaning, the yelling, the crying, the bottle smashing, it all stopped. That night, she forced him to sit with her in the living room. She sat on a rocking chair, the last piece of furniture in the living room. A bottle of Jack Daniels was tucked into the crevice between her untensing bicep and the left curvature of her breast.
                </p>
                <p>
                  He sat on the patchy rug in his living room that night, looking up at her on the chair. Foam dripped from her mouth, and he watched as her eyes rolled to the back of her head.
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setShowStory(null)}
                className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded hover:bg-gray-700 transition-all"
              >
                ← BACK
              </button>
              
              <div className="flex gap-4 items-center">
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-6 py-3 bg-gray-700 text-white text-sm font-bold rounded hover:bg-gray-600 transition-all"
                  >
                    ← PREVIOUS
                  </button>
                )}
                <span className="text-gray-600 text-sm">Page {currentPage} of {totalPages}</span>
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded hover:bg-gray-700 transition-all"
                  >
                    NEXT →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "theCave") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/aws.png"
            alt="The Story of the Cave header"
            fill
            className="object-cover"
            style={{ objectPosition: "center 15%" }}
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              The Story of the Cave
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Ali Hamdard
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              At the Royal Academy, Alexander's brilliance shone brightest amongst the children of royals and diplomats. He spoke the old and new tongue fluently, solved equations before his teachers finished writing them, and recited history from memory. "He learns a page in a glance," his teachers whispered. Despite lagging their cousin, Adham and Samir were lavished in praise by the court heralds at every turn, while Alexander received silence. Angered daily by neglect from the courts and his family, Alexander journaled in the dairy his grandfather bestowed upon him.
            </p>

            <p>
              On weekends, Alexander traversed the bazaars with his father, who instilled in him a deep love for the people of Oigharstan and their traditions. With the arrival of the foreign diplomats, Alexander's weekend excursions became solitary, as his father was frequently called upon to meet with the royal courts. Walking alone, Alexander saw how the diplomats' merchants had tyrannized every market stall into a foreign ledger. The scent of Azarite dust filled the dry air—metallic and bitter. One afternoon, Alexander heard shouting in the square. An older man knelt beside a toppled cart of Oighar spices, his frail hands trembling as a foreign soldier struck him with the butt of his rifle. The man had refused to surrender his goods without payment.
            </p>

            <p>
              "Stop!" Alexander shouted, rushing forward. "That's enough. You have made your point." The soldier turned. "Ah, the prince without a throne," he sneered, shoving him backwards. "Run home before I teach you obedience." Alexander seethed with rage as he turned around, picking up his backpack from the sandy floor. Remembering the pale faces of the men frequenting his dining room, Alexander spun around and lunged for the rifle of the soldier. The metal felt alive in his hands, hot with ancient rage and destiny. The soldier screamed for help as the two struggled, then "Boom!" The weapon went off. The crack of the fire split the air like lightning. For a heartbeat, all was silent. Then the chaos ensued. The soldier fell, unstruck but terrified, calling for his compatriots. Alexander dropped the rifle and ran.
            </p>

            <p>
              Through alleys, dust, and shouting crowds, he fled the city's edge. As he bolted through alleys, he saw villagers cover for him and block the path of the two armed soldiers in active pursuit. He sprints all the way into the hills, lungs burning, until he finds the mouth of a cave. He stumbled, legs shaking, and the cave swallowed him whole. The air was cold, thick with eerie silence. He whispered a prayer with each step he took, the darkness enveloping him further. On his third step, his body falls into a bottomless abyss of blackness.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "thingsIKnow") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/sky.png"
            alt="Things I Know About Her header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Things I Know About Her
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Alex Moeder
            </p>
          </div>

          {/* Story Text - Fragmented Vignette Style */}
          <div className="text-black text-lg leading-relaxed space-y-8 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            {/* Vignette 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Humble Abodes</h3>
              <p>
                She remembers stories of her childhood dog. Childhood dog, trained to hunt, softened into family, breathing somewhere. Nights: brother splitting wood, dad coaxing fire. Sometimes I think we had little, but we had this, and that's a way to say we endured.
              </p>
            </div>

            {/* Vignette 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Dreamer</h3>
              <p>
                She dreamt of something in the sky. Sounds in place of heaven, music leaking from the sky.
              </p>
            </div>

            {/* Vignette 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">No</h3>
              <p>
                She says no to her boss aggressively.
              </p>
            </div>

            {/* Vignette 4 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Mechanic</h3>
              <p>
                There was once a man of small salvations: toilets, sinks. But then he disappeared. Maybe his boss didn't take a keen liking to him, but no one really knows. Used to be seen twice a day, now gone. That's how it usually goes.
              </p>
            </div>

            {/* Vignette 5 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">A Big Win</h3>
              <p>
                The excitement of the local teams' win fills the streets.
              </p>
            </div>

            {/* Vignette 6 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Warmth</h3>
              <p>
                The cabin feels warm while she makes dinner. A car starts off in the distance. Hearing her baby cry, she quickly shushed him.
              </p>
            </div>

            {/* Vignette 7 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">The Bars</h3>
              <p>
                At 4:00 AM, she ventured to a bar in search of friends and a man with a drink. Spoke about politics, a mayor with his head held up too high. The man is gone now, drink empty, night as well.
              </p>
            </div>

            {/* Vignette 8 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Rooster</h3>
              <p>
                The rooster crows, the baby wakes up, and the dog runs around. She is still nowhere to be found.
              </p>
            </div>

            {/* Vignette 9 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Politics</h3>
              <p>
                Today is the day that the mayor gives his political speech. Yet, where is he? His wife said he was taken out in the middle of the night, but maybe she was dreaming. Dreams do borrow real faces.
              </p>
            </div>

            {/* Vignette 10 */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Alone</h3>
              <p>
                A 14-year-old kid is forced to take care of his baby brother. The mom is still nowhere to be found.
              </p>
            </div>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "dearDiary") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/bed.png"
            alt="Dear Diary header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Dear Diary
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Lucas Ferreri
            </p>
          </div>

          {/* Story Text - Diary Entry Style */}
          <div className="text-black text-lg leading-relaxed space-y-8 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            {/* Entry 1 */}
            <div>
              <h3 className="text-4xl mb-4 text-gray-800 italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>1</h3>
              <p className="mb-4">
                It began in a hospital, as all great lives do. I was told I was naked, crying, covered in blood, and ****ing myself. The markers of a remarkable baby. Of any baby, really. My first memories were of sharp, fluorescent white lights and sterilized walls. I hated it. It was like a prison. A big, baby prison that smelled like rubbing alcohol and stale food. I was sick, I knew that. It was perhaps the worst-kept secret inside the walls of the hospital, but I was getting better! Soon, I would take on the world!
              </p>
              <p className="italic">
                Thus commenced the first step of my great life: my grand escape!
              </p>
            </div>

            {/* Entry 2 */}
            <div>
              <h3 className="text-4xl mb-4 text-gray-800 italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>2</h3>
              <p className="mb-4">
                Okay, fine. My escape wasn't so grand after all. I didn't dig a tunnel out with a spoon. My parents just… took me home.
              </p>
              <p className="mb-4">
                It was my first time seeing sunlight. Real sunlight. Not just through my blinds. I loved the sun and the outdoors. Many of my early years I spent running around in the grass with my parents and dog, Alfie. I loved that dog. He was small, brown, and fluffy—actually, he might have been a little bigger, I'm not sure. My parents never fought. I figured that meant we had the perfect family.
              </p>
            </div>

            {/* Entry 3 */}
            <div>
              <h3 className="text-4xl mb-4 text-gray-800 italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>3</h3>
              <p className="mb-4">
                School was great, too. Everyone seems to find school boring, but not my school. My school was fun. I always felt like I belonged. Sometimes, when we felt silly, we students would all throw glue sticks at the ceiling to see if they would stick.
              </p>
              <p>
                All our classrooms had a big globe in the corner, and all the teachers kept shiny red apples on their desks. I think that's just what school looks like. I had a best friend too, like you're supposed to. We always raced to lunch together!
              </p>
            </div>

            {/* Entry 4 */}
            <div>
              <h3 className="text-4xl mb-4 text-gray-800 italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>4</h3>
              <p className="mb-4">
                My first kiss happened behind the bleachers of the big game. I didn't know if I liked the girl at the time, but we quickly became a couple. People said we were perfect for each other, so I guess it must have been true. After high school, we got married, because that's what couples do. They go on dates and get married.
              </p>
              <p>
                Somewhere along the way, I had grown into a well-known painter, no, a businessman, or no, it was an astronaut! Yes, I became an astronaut. A real one, with countless medals.
              </p>
            </div>

            {/* Entry 5 */}
            <div>
              <h3 className="text-4xl mb-4 text-gray-800 italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>5</h3>
              <p className="mb-4">
                I went on many adventures, both as an astronaut and as a parent. I traveled the Earth and the stars, even becoming the first man to land on Mars. NASA gave me numerous awards, and I made a ****-ton of money.
              </p>
              <p className="mb-4">
                I lived in a large, beautiful home with a pool and a massive front yard that our kids and dog Willie would run around endlessly in. Eventually, I retired. We grew old in that house, sitting in the sun and reminiscing on everything we had done. It was a beautiful life.
              </p>
              <p className="italic">
                The perfect life.
              </p>
            </div>

            {/* Entry 6 - The Reveal */}
            <div className="border-t-2 border-gray-300 pt-8">
              <h3 className="text-4xl mb-4 text-gray-800 italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6</h3>
              <p className="mb-4">
                I'm sorry. I've been lying to you. I've never left the hospital. None of that ever happened. I never had the dog, or the best friend, or the girlfriend, or the family, or the career. My parents fight all the time. They're worried about me.
              </p>
              <p className="mb-4">
                I have been in this hospital for the twelve years of my life.
              </p>
              <p className="mb-4">
                The nurse says I have an operation soon. I'm a little scared.
              </p>
              <p className="italic">
                Goodbye, Diary. I'll write again soon!
              </p>
            </div>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "hiddenDetails") {
    return (
      <motion.div
        className="min-h-screen flex"
        style={{ background: "linear-gradient(to bottom, #c89666 0%, #d4a574 100%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left side - Image */}
        <div className="w-1/2 relative">
          <Image
            src="/gg.png"
            alt="The Hidden Details illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Text */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Title */}
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Georgia, serif" }}>
              The Hidden Details
            </h2>
            <p className="text-xl text-gray-800 italic mb-8">
              by Wil Davis
            </p>

            {/* Story Text - Page 1 */}
            {currentPage === 1 && (
              <div className="text-gray-900 text-base leading-relaxed space-y-4" style={{ fontFamily: "Georgia, serif" }}>
                <p>
                  My dad was a big dude. He always had a coldy in one hand, chew in the other, and a temper that no one could silence out. I inherited his traits more than I wanted: his size, his anger, his instinct to fight. When I was little, my dad signed me up for hockey, thinking it would "turn me into a man." It did, just not in the way he imagined. On the ice, I used my size to my advantage. No one messed with me, and if they did, they didn't twice.
                </p>
              </div>
            )}

            {/* Story Text - Page 2 */}
            {currentPage === 2 && (
              <div className="text-gray-900 text-base leading-relaxed space-y-4" style={{ fontFamily: "Georgia, serif" }}>
                <p>
                  We had a game tonight. I listened to my heavy metal playlist, eyes locked in place, in my dad's 2003 Chevy Silverado. It was game time. I played my usual game: big hits, chirps every chance I could get, intimidation. But this time, it didn't work. I stomped back to the locker room after a hard-fought 4-3 loss. The ref was fuckin terrible. His blind ass put me in the box for nothin. Before I could slam my shoulder into the locker room door, behind me, someone shouted: "Keep walkin', burger!" The words hit harder than any check I've taken. My mom always told me I was "big-boned," but deep down, I hated the way I looked. Hearing that for the first time—in front of everyone— shattered me. For the first time in my life, I had chosen to turn down a fight. I didn't turn around and sock this asswipe. I didn't flinch; I was hurt. I just kept walking, lowering my shoulder into the door like I always do.
                </p>

                <p>
                  I thought hockey would make me tough, just as my dad intended, but in that moment, I realized how fragile I actually am. One simple chirp ruined me. I couldn't inflict the same pain I had just felt on someone else, so I said to myself: "This isn't me." From then on, I changed my game. I played calmer and cleaner, while remembering to respect each and every player. That one insult turned me from a bully into a teammate.
                </p>
              </div>
            )}

            {/* Pagination Controls */}
            <div className="flex gap-4 mt-8">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
                >
                  ← PREVIOUS
                </button>
              )}
              {currentPage < 2 && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
                >
                  NEXT →
                </button>
              )}
              {currentPage === 2 && (
                <button
                  onClick={() => setShowStory(null)}
                  className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
                >
                  ← BACK TO MAGAZINE
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "clocks") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/city.png"
            alt="Clocks header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Clocks
            </h2>
            <p className="text-xl text-gray-600 italic">
              by William Regier
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            {/* Preface */}
            <div className="mb-8 border-b-2 border-gray-200 pb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Preface</h3>
              <p className="mb-4">
                In the earliest memories of the world—before history could tell its story, before man had a name, and when past and present were one—the earth trembled with uncertainty. There was no night and day; there were no clouds; there was only a blank canvas. Mountains were still choosing their size; rivers were still learning the dance of flow; and forests were still deciding where to begin their verdant immersion. It was as though the earth were dreaming, but not of a future, not of a past, not of a present: a momentless dream. As earth dreamt, it wavered between becoming and unbecoming. Hues of pink, red, grey, and blue bled throughout the sky; water froze and melted without warning; light began to percolate through the mystical sky. And yet, in the midst of this timeless dream, the earth formed its first determination: past, present, and future.
              </p>
              <p className="mb-4">
                Time passed. Mountains became the towers of the earth. Rivers flowed as an interconnected tapestry of silver threads, forming the patterns of eternity. Hot and cold both existed simultaneously. So did dark and light. The sky had still not settled on a single hue, but it gained the autonomy to choose its own color. But amid the earth's maturation, it lost interest in experimentation. It wanted to find more. To understand more about its powers. Forests grew uncontrollably, encroaching on the desert plains. Breezes turned into gales. Riverstreams began to overflow their banks. Ponds became oceans. As this entropy ensued, Earth had its first child to mourn. As Earth fell into an uncontrollable youth, it continued to take the lives of its own. Yet, as its children continued to die, death became a weakness, a check on its power.
              </p>
              <p>
                Instability reigned. Both brilliance and destruction emerged from the chaos. Power was valued over wisdom. Earth was in the throes of its own invention. If this chaos continued, darkness would envelop the world until all was gone. Just as Earth had been the guiding light for its children, it needed its own light, its own mentor.
              </p>
            </div>

            {/* Main Story */}
            <p>
              The city never slept. As the night wore on, power plants continued to generate electricity, and the faint hum of the spinning turbines played in the background. Night posed no roadblock; the city's industrial engine purred on. Having long replaced humans, robotic cranes never stopped in their toil. Beam after beam of steel was melted and then hammered into form while still red, the visible heat causing noxious fumes. The steel mill produced 2000 tons of steel a month if running optimally. In due time, this steel would be used to build huge towers, data centers, and the possibility of extraterrestrial settlements.
            </p>

            <p>
              In the heart of the city lay its main manufacturing industry. An eighty-story tower shot above the surrounding buildings. Inside was devoted solely to the making of clocks for the rest of the country. Throughout the night, humanoid robots moved clocks from conveyor belt to conveyor belt, and as the machinery moved from the 80th story to ground level, they began to take shape. Intricate, ornate, and imposing, these clocks varied drastically in appearance, but all had the same function. Ticking every second, the clocks kept precise time with the city's movements, giving a numerical value for when the morning or evening began.
            </p>

            <p>
              Surrounding the city lay miles and miles of uniform concrete buildings. These buildings were blocky and gigantic. Inside, data centers provided artificial intelligence with near-infinite computing power. The never-ending data centers enabled unprecedented research, as entire worlds could be simulated and tested within them. As long as the data centers purred, there was no need for human higher education and research, since data centers held the answers to any questions, even those people had never had.
            </p>

            <p>
              Soon, the sun rose over the city, marking the beginning of a new day and new possibilities. Anything could be done. Each sunrise brought new innovations, complex physics equations solved, and new elements synthesized. But as the morning came, no new sounds were coming except for the hum of the power plant. Inside the rows of steel high-tech skyscrapers, there was no movement. Although the day brought news of new research accomplishments and the spread of technology, no one benefited from them. The clocks kept ticking, but no one was there to wake up.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "artistWallStreet") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/flower.png"
            alt="The Artist on Wall Street header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              The Artist on Wall Street
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Oscar Salerno
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p className="italic">
              Click clack click clack click clack.
            </p>

            <p>
              My hands were getting numb from typing so many emails to my managing director at Goldman Sachs. I felt as if the keys on my computer were going to explode because I was typing so fast. It was 1 in the morning, and I was woken up by a ding from Mr. Keely. He was absolutely livid. I had miscalculated Toys' R ' Us' earnings when running a Discounted Cash Flow. I swear I crunched the numbers correctly, but Mr. Keely is known for being a stickler for this kind of thing.
            </p>

            <p>
              I was frantically rushing back to the office, and then I opened the doors to the trading room, and nothing. I was there alone; everything was so still and calm, except for the numbers displayed on the stock ticker. I sighed and thought to myself, there needs to be a better way to do this. Instead of mindlessly combing through the report I just did to find where I made a slight mistake, which probably wouldn't even affect my sentiment on the company, I simply started visualizing the numbers.
            </p>

            <p>
              I wanted a change, a way to make financial data more engaging and meaningful. Wouldn't it be better if the numbers actually told a story? I began painting on the walls of the firm; something inside of me was burning. I felt so alive, yet I don't necessarily hate working in finance either. This was not some sort of thing to get back at my boss or hurt the firm. I just want to show everyone that there can be different ways to look at things.
            </p>

            <p>
              After 4 hours of painting on the walls, the story was complete. The numbers that were once glowing on my screen were now in a different form. I turned the numbers into stories. For example, the company's revenue was now displayed as a seed in the ground. The debt was depicted as a tornado, and the profit was a flower.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "lettersToJavier") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/yo.png"
            alt="Letters to Javier header"
            fill
            className="object-cover"
            style={{ objectPosition: "center 48%" }}
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Letters to Javier
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Julian Kang
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              Javier immediately started explaining the sasquatch. "You know, it was never a lie, this beast. It was real. It still is. It preyed on us when the sky darkened. The first time I saw it, I didn't understand what was happening. I asked myself: Are they scaring me away? But it was real. I knew she was scared because she had an instinct guiding her sprint, more than just survival. As a man, I had to defend her. If I didn't, then who was she to me?"
            </p>

            <p>
              "One more," he asked. I opened the next letter. This time, it was from her father.
            </p>

            <p className="italic border-l-4 border-gray-300 pl-4">
              "Javier,<br/>
              I'll keep it brief. Mary was on her way to meet you, to my dismay. You were never the good part of her life, and you took her away from home. The only home she had. On her way, her passenger ship sank near Java. Whatever sank her ship may as well have been you. You, Javier, were the worst thing to ever happen to her.<br/><br/>
              Mr. Abernathee"
            </p>

            <p>
              Javier burst into a frenzy of tears, weeping louder than I thought a human ever could. He wept for what felt like forever. At some point, his wails were interrupted by his characteristic wheezes, and when his wheezes overpowered his tears, he punched himself in frustration. He wailed and wheezed, wailed and wheezed, crying that his sickness prevented him from even blaming himself. I held his arms to the bed, and with his limited lower body strength, he kept squirming. I don't know when these letters could've been written, but it didn't matter. He cried like a young boy, not even a young man.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "movers") {
    return (
      <motion.div
        className="min-h-screen flex"
        style={{ background: "#000000" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left side - Text */}
        <div className="w-1/2 p-12 flex flex-col justify-start overflow-y-auto">
          <div className="max-w-2xl">
            {/* Title */}
            <h2 className="text-6xl font-bold text-white mb-8 tracking-wider" style={{ fontFamily: "Georgia, serif" }}>
              MOVERS
            </h2>
            <p className="text-lg text-white/80 italic mb-8">
              by William Regier
            </p>

            {/* Story Text - Movie Trailer Style */}
            <div className="text-white text-sm leading-relaxed space-y-4" style={{ fontFamily: "Georgia, serif" }}>
              <p className="italic">
                <span className="font-semibold">Wide shot of white Ford F-250 on I-40.</span> Our car's tires angle to the right, grinding into the tar-black pavement, and we slide into the rightmost lane of I-40, the truck feeling more like a container ship. Jack is at the helm, guiding our boat towards the exit, not pushing on the brakes, just guiding the car around the dull curve of the off-ramp.
              </p>

              <p className="italic">
                <span className="font-semibold">Close-up of truck logo: "Waypoint Moving."</span> I've been working on this job for two weeks, and he still hasn't let me drive his "beauty". A white Ford F-250 with the logo he spent days designing stickered onto the front two doors and the hood: A stylized compass with bold white letters spelling out "Waypoint Moving." The truck has put on more miles in the last couple months as part of his new moving business than it had in its three year tenure sitting on an asphalt lot at a car dealership.
              </p>

              <p className="italic">
                <span className="font-semibold">Interior shot, windows down, Lynyrd Skynyrd blasting.</span> Life was good: Just out of school, it was summer, I had some money to spend, the windows were down, we had a job, Lynyrd Skynyrd playing on Jack's second pride and joy: a speaker complete with a subwoofer that visibly vibrates the seats and windows with every note.
              </p>

              <p>
                "You seen this job posting?" <span className="italic">Jack's southern drawl interrupts the moment.</span> "Mr. Orange, right?"
              </p>

              <p className="italic">
                <span className="font-semibold">"Free Bird" solo begins.</span> I can't changeeee... <span className="font-semibold">The minutes-long solo of Skynyrd's "Free Bird" starts as Jack navigates the truck onto a manicured street that has tall hedges obstructing the view of what I imagined to be huge mansions.</span>
              </p>

              <p>
                "Pretty strange name, huh, and the description got me too."
              </p>

              <p>
                "What is it, another piano that needs to be sold?" <span className="italic">I ask, familiar with the usual wives getting rid of junk that littered their house.</span>
              </p>

              <p>
                "Naw, something different. He's moving to one of those, uh, old folks homes."
              </p>

              <p className="italic">
                <span className="font-semibold">Truck slows down, passing horse fences. Tires crunch on gravel. Giant villa with fountain appears.</span>
              </p>

              <p>
                "I wouldn't want to leave this place," <span className="italic">I mutter.</span>
              </p>

              <p className="italic">
                <span className="font-semibold">Cut to: Courtyard scene.</span> I went to the courtyard again, expecting Javier to be there, but he wasn't. I started scrambling for him until I heard his voice echo from his room, "Colin! I'm only right here." <span className="font-semibold">I ran to his room, worried, but he was just looking at a picture of Mary.</span> She was indeed skinny, but she was pretty, in that classic 1950s American style. "I may not know how to read, but I can see," <span className="italic">he chuckled.</span>
              </p>

              <p className="italic">
                <span className="font-semibold">He told me to take another letter and read it.</span> I picked the one at the top this time, as he didn't instruct me to do otherwise.
              </p>

              <p className="border-l-4 border-white/50 pl-4 text-sm">
                "My love, Javier,<br/>
                How are you doing, my love? I hope you're enjoying home and the company of your brothers. Since I know you're wondering, my siblings are doing well. Curtis is walking again, although with a limp, and Dwight's almost finished with his vocational training. My father has grown more irritated recently; he talks to himself about a humongous man. I think he's talking about the sasquatch. How amusing! I wish to tell him about your fight with the sasquatch and how the sasquatch knew to speak, but I can't figure out a good time. Everything's been a lot better, though. You were so brave for fighting it, the beast. Write back soon. My mailbox is empty.<br/>
                Love,<br/>
                Mary Anne"
              </p>

              <p className="text-xs mt-8 text-white/60">
                Found by GCLS
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setShowStory(null)}
              className="mt-8 px-6 py-3 bg-white text-red-900 text-sm font-bold rounded hover:bg-gray-200 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 relative">
          <Image
            src="/drive.png"
            alt="Movers illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    );
  }

  if (showStory === "cityOfCircles") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/light.png"
            alt="City of Circles header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              City of Circles
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Veer Malhotra
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              There were no straight lines in this city; there were no alleys or corners; there was nowhere to turn left or right. Every path returned to itself. A set of concentric circles, with the lamp posts getting brighter as the city moved inward.
            </p>

            <p>
              The city was perfectly uniform. Houses were identical within each circle. There was no desire to move towards the inner ring, and no one ever tried to move outward. There were no guards stopping them, no laws inscribed in stones saying they couldn't, but no one drifted, even slightly, from their path.
            </p>

            <p>
              When children reach their day of blossoming, their site in the ring is revealed to them. These moments of revelation are ominous, abstract. No one knows who decides these 'sites' or how they are revealed, but no one questions it. These revelations become the map to individual duty in the city. Each person is burdened with a purpose. The baker must make a loaf of bread for each home in their ring. The actor must produce enough entertainment for their ring.
            </p>

            <p>
              In the first couple of years following the day of blossoming, the individual is watched by an overseer. No one has a clue where these overseers come from or who they are. They wear black, metallic shades, have full beards, and always carry a cigarette or toothpick between the crevices of their right canines.
            </p>

            <p>
              They do exactly as their name suggests: they oversee. The new philosopher is watched while he thinks. The new politician is watched while he explores the structures of policy. If work does not live up to the standard, the overseer does his second job: he disciplines. However he disciplines, the people still have a vague idea. Around halfway through the time with their overseers, new workers begin receiving revelations of their type in outer circles. The images are not vivid; most of the time, they are dark, abstracted signals. The strength of outer lampposts grows weaker, and in the last circle, no city dweller has ever seen a vision with light. But even without sight in these visions, dwellers are left with a feeling of something more, something they want.
            </p>

            <p>
              When these visions begin, the individual starts being rewarded for their good work. The token of their labor is visions of the inner ring life. These visions become more decrepit the closer towards the center one looks. These visions remind them of their prosperity, their dominance. By the end of their time with the overseers, the bakers have achieved maximum efficiency, the philosophers are thinking correctly, and their duty is functioning as it should.
            </p>

            <p>
              For years, people turned the rings of the city without interruption. No one was told to do so, but everyone knew they had to do it.
            </p>

            <p>
              But one morning, a little boy, who had just begun to receive revelations of the outer rings, tried to step out of his curve.
            </p>

            <p className="italic">
              "Light, guide me. I am your true follower," the boy repeated over and over again.
            </p>

            <p>
              His body was no longer his, and, in a moment, he jerked his leg off the path. The rings stopped turning: the people had stopped moving. All in his ring sat idle, watching, and all others received visions of the disruption. The overseer immediately pinned him to the ground. Blindfolded him and brought him into the punishment room. In the next moment, the boy was seen fulfilling his labor. The wheels kept spinning. Life continued the same way it always did.
            </p>

            <p>
              But the next morning, the boy was gone without a trace. His bedroom looked untouched. His place of work was identical to the way it was the day before. There was no break-in at night. No strange sounds came from the boys' room.
            </p>

            <p>
              His parents sat inert. Their anger did not have the words or the vehicle to express itself. A tear did not drip down the sides of their cheek. A hug and a word were not exchanged between either of them. They just sat on his little twin bed, the mother staring with the palm of her hands and the father with his eyes closed.
            </p>

            <p>
              Overwhelmed by the loss of her boy, the mother got up and left the house in the middle of the morning. Her husband got up and followed her. Even then, no words were exchanged. Just like their son, they too broke the circular path, but they both walked in instead of outwards. They broke the first barrier of their ring. No one stopped them. They kept walking, passing through the barriers of each inner ring until they reached the brightest circle, the place of dead souls. Even then, they did not speak; they were barely breathing.
            </p>

            <p>
              Then, they began walking. Not in a straight line or in a zigzag manner, but in circles. The same circular path that everyone walked. The city watched. 8 days. They walked for 8 days before their legs dropped, and they both fell to their final moment. Their son was not brought back.
            </p>

            <p>
              Their bodies remained there throughout the day, but by dawn, their corpses had disappeared. Maybe they had been reunited with their lost son, but maybe not. All that is certain is that no one broke off the path ever again.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "lounge") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/plane.png"
            alt="Lounge header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Lounge
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Ali Hamdard
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              The lounge is quieter than usual. Not silent, but heavy in that early-morning way airports sometimes get. The Emirates driver picked him up from the marina, led him through the side door, up the thickly carpeted elevator, and into the private corridor. The staff knew his name by heart. Then again, who doesn't? The staff ushered him into the exclusive Skywards line, empty at this hour. Skywards Premium. Always Premium.
            </p>

            <p>
              He sits by the windows that look out on the tarmac. Dubai's skyline sits faint in the haze—dunes just within sight, close enough without arresting the naked eye. The armchair is wide, with tan leather that complements his tanner-than-usual skin. His trunks—navy and cream Goyard—wait by his side. He does not check them. He never does.
            </p>

            <p>
              The staff greets him with a glass of bubbly champagne. He waves it off and asks for a Diet Coke. The manager sighs. "Always have a Diet Coke ready—light ice," she had told the staff. The glass comes quickly, cold, fizz spilling up the sides of the ornate, round glass. The next round is a farrago of goods: white dishes of dates, salted almonds, and saffron tea, too. He leaves them untouched. His eyes are laser-focused on the glass panels above the bar, watching numbers switch from one flight to another. Dubai to Mecca, on time. Dubai to Jeddah, on time. Dubai to Muscat, on time. Dubai to Aden…delayed. What a shame, he thought. Both about the flight and the place.
            </p>

            <p>
              His phone rested in the palm of his right hand. All of it sits inside: the voices he needs to hear, the ones he didn't write just before leaving, the boundless opportunities at his command. Squeezing his wrist, tucked just under the cuff of his long-sleeved shirt, a strip of worn leather that had lost its color. It came from a time long before this room. He has never explained it; no one dares to ask.
            </p>

            <p>
              His phone buzzes, loud enough for heads to turn. The call comes without warning. Civil unrest. Roads shut down. A city burning and divided, far away but close enough to matter. He leans back, eyes on the white behemoth outside—the A380 laden with gold writing. The lounge goes on as if nothing changed: glasses polished, pastries lined up, wheels dragging softly across the red-carpeted floor. The only thing different is how still he holds the phone, as if time stood still. He listens.
            </p>

            <p>
              The voice lists routes, closures, and possible exits. Wired transfers, blockchain payments. He gives no instructions. The man on the other end already knows what to do.
            </p>

            <p>
              When the line goes dead, he doesn't move. Outside, a silver jet climbs into the haze, fading into the sky. He lets out a large sigh of relief as he slowly places his phone on the table next to him. His cuff slips down enough for him to catch a glance at his bracelet—his <em>raison d'être</em>. He surveys the lounge another time before taking his circular glasses off and placing them directly above his phone. Only then does he lift the glass, the three ice cubes clicking against each other. The lounge is quieter than usual.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "quietHands") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/hand.png"
            alt="Quiet Hands header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Quiet Hands
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Ali Hamdard
            </p>
          </div>

          {/* Story Text - Clean, Simple Format with Section Titles */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              He learned to hold instruments before he learned to seize power. In classes, lecture halls, and clinics, he practiced steadiness. In London, patients came and opened their eyes; they were met with his methodical, anchored hands.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-3">A Quiet Summons</h3>
              <p>
                The phone call was formal, the voice even. It beckoned him home. He packed a passport and a stethoscope, alongside an amalgamation of notes and other clusters of papers. He departed a defeated man, leaving his short-lived anglocentric life.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">The smile that was practiced</h3>
              <p>
                They taught him to stifle his expression just as he controlled his hands as a surgeon. A smile for the cameras must not tremble. He practiced before mirrors; later, he had rehearsals with handlers who suggested a slight tilt of the head, and modest pauses between words.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Chants in the square</h3>
              <p>
                The songs were small liturgies of belonging: easy to learn, difficult to undo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Graffiti on a Wall</h3>
              <p>
                A single inscription on stucco became proof that the people's speech still mattered amidst the democratic reforms. The state replied with detentions that amplified the moment rather than extinguishing it.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">The Streets Unravel</h3>
              <p>
                Protests multiplied like echoes: first chants, then a volley of stones. In the old quarters of Homs and Hama, shops shut down at noon as smoke permeates from tires that burned longer than the protests. Barricades appeared in place of fruit stands and bazaars. Soldiers faced neighbors; boys clutched rifles nearly as big as they were. In confusion, his mercy thinned.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Maps on a Table</h3>
              <p>
                Ministers spread charts like surgical schematics. Names become pins; districts; liabilities to be contained. Options arrived as flat accompli, and he learned to choose between calibrated damage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Hospitals at Night</h3>
              <p>
                Corridors smelled of antiseptic and fatigue. Physicians moved in practiced circuits, medicine would not be transmuted into safety when sirens queued along the bloody curbs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Neighbors Leaving</h3>
              <p>
                Curtains stayed drawn and thresholds emptied. People departed with suitcases and with silence tucked neatly into pockets. The neighborhood resolved itself into a geography of absence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">The Messaging Room</h3>
              <p>
                Speechwriters flattened sentences until they fit a teleprompter. Repetition functioned as governance. Words were shaped to bear weight and to deflect inquiry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Children on Screens</h3>
              <p>
                Airport lounges displayed classrooms vacated, playgrounds conscripted for aid. Loss became an image the eye could not relinquish.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Snow on a New Street</h3>
              <p>
                In another city, the light on snow resembled a clean page. His friend gifted him a room with thick curtains; his view boasts the beloved view of St. Basil's Cathedral. Outside, the blistering cold granted privacy; distance became absolute.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">A quiet End, for Now</h3>
              <p>
                He kept lists and names and a line about the light. Biography, at its most honest, is an accumulation rather than a verdict. The future of Syria remains a page not yet inscribed.
              </p>
            </div>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "eventually") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/field.png"
            alt="Eventually header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Eventually
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Bennet Choi
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              Today is the eighth day of the eighth month of the eighth year. The sky is white. The air still.
            </p>

            <p>
              My father stands at the window. He looks smaller somehow, as if preparing to disappear.
            </p>

            <p>
              Out by the field, mist gathers again. Something moves through it.
            </p>

            <p>
              The child, whom the elders said was the gift, takes my hand. "It's time," it says.
            </p>

            <p>
              I look to my father. He doesn't turn around.
            </p>

            <p>
              "Eventually," he says.
            </p>

            <p>
              And the word finally makes sense.
            </p>

            <div className="border-t-2 border-gray-300 my-8"></div>

            <p>
              I take a deep breath. I know now that some things in life are not meant to be understood, only endured. Yet, even in the darkest of times, courage is a gift as powerful as fear.
            </p>

            <p>
              I step forward, and the field welcomes us both.
            </p>

            <p>
              A simple, weathered wood table stands in the middle of the field, wheat rustling around it. A dagger rests on top. I know what this is: the place where all offerings are weighed and remembered.
            </p>

            <p>
              The wind whispers through the wheat, carrying voices of past gifts and sacrifices.
            </p>

            <p>
              A shape forms in the mist. Taller than any man, its limbs thin and waving like reeds. Its face is but a shadow, yet I feel its eyes upon me.
            </p>

            <p>
              "You have come," it says, firm and ancient. "Do you know what is demanded?"
            </p>

            <p>
              I squeeze the gift's hand. "I know," I say. "And I know what I must do."
            </p>

            <p>
              The shape moves closer, mist coiling around its body. "Place it on the table. Offer what is required. Only then may the village go on."
            </p>

            <p>
              Carvings along the table emerge, glowing softly, spilling from inscriptions I can't decipher. I set the gift down on the table and kneel before it. Its eyes meet mine, unafraid. Only resigned.
            </p>

            <p>
              The shape impatiently hisses, wind through dead branches. "A sacrifice is needed. One life for many."
            </p>

            <p>
              I feel the weight of centuries pressing on me. I see the other gifts, pale and quiet, vanished into the mist. I hear my father whisper <em>eventually</em>.
            </p>

            <p>
              And then I understand. The child is not the gift. The gift is me.
            </p>

            <p>
              I reach for the dagger and close my eyes. The gift's small fingers brush mine. I lift the blade and press it into my heart.
            </p>

            <p>
              My last thought is hope. Hope that the waiting will end, that someone, someday, when faced with the same choice, will choose courage over fear.
            </p>

            <div className="border-t-2 border-gray-300 my-8"></div>

            <p>
              When I open my eyes, I am no longer on the earth. I am the wind through the wheat, the sunlight on the morning mist, and the faint hum in the child's voice.
            </p>

            <p>
              The curse is gone, its power broken by a life freely given.
            </p>

            <p>
              From that day forward, no child ever vanished again. The villagers learned that courage and willingness to act can undo even the oldest magic. And waiting for eventually is never enough.
            </p>

            <p>
              The child, finally named, laughs and runs through the wheat. The village breathes, as if waking from a deep, long slumber. Freed from fear, because one choice was stronger than centuries of terror.
            </p>

            <p>
              And I am there in every soft gust, every sunbeam, every whisper of wind. Unseen, but always felt.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "indignities") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/mouse.png"
            alt="Indignities header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Indignities
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Julian Kang
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              After a day of meetings with the HR department, they finally let me off. And I say finally because I honestly have no desire to work; it just pains me to ride the subway with people snickering and sneering at my preppy work uniform, and then going to the office, where people whisper about my lack of showers. It's not even like I'm making a ton of money at this point; getting released from this job probably gave me more money than I would have made this month anyway. On my way home, I decided to go to one of the second-floor mind readers on the Lower East Side. It smelled rancid. Like, rancid-rancid. Some mysterious and obviously mentally ill woman was sitting in a fetal position, facing away from me. Despite this, she called out my name, "Come forth, Mr. Alfee Tuss." It couldn't have gotten worse from that point, so I listened to her like a puppy.
            </p>

            <p>
              Sitting in front of her, or rather to her back, felt oddly peaceful. It was the perfect culmination to a pretty unfortunate day. I let out a heavy sigh, and she immediately interjected with "The powers have told me that your day has been filled with misfortune." This couldn't have been too prophetic. How many happy people has she seen in her whole career? But then she said, "If I could grant you one wish to ease your pains, what would that wish be?" I replied, saying I wished to fit in and be unnoticed. She then quaintly asked for $20 and a cigarette, and my wish would be fulfilled by the end of the business week.
            </p>

            <p>
              I would have been fine with a practical solution to my problem. I wouldn't have been surprised if nothing had happened, or even better, if by some chance I had become a deranged street performer, but she did somehow surprise me; I woke up as a giant rat.
            </p>

            <p>
              I think I heard about this one before, somewhere in my bookshelf. I think I read it during company hours. Nevertheless, I just remember people definitely noticed him. Wanting some way to feign death, I took the subway to the spot where my drug dealer usually was. However, this time, no one looked at me condescendingly, and no one acknowledged me. Even better, I found a whole community of rats just like me on the subway, eating away at some homeless man's toe. This is me, and I am this, I thought.
            </p>

            <p>
              After saying goodbye to my new friends, I went to my dealer. The only problem was that he couldn't see me. I tried to touch him to get his attention, but he cursed me out and stomped on me. My hind legs were completely broken, and I was left in the alley for dead. My so-called "friends" came nearby after sunset. Foolishly, I extended my paw for help, but they immediately started to gnaw at my joints and eventually my flesh. I heard the voice of my evil mind reader call out to me in these dying moments, "Is this the wish that satiated your ills?" I think not, at this point, where there wasn't any more for me going forward. Maybe I just ought to stop having friends.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "psychiatrist") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/spider.png"
            alt="The Man and His Psychiatrist header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              The Man and His Psychiatrist
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Lucas Ferreri
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              He hated spiders.
            </p>

            <p>
              Dr. Haas said that they weren't real—not most of the time, at least—but that modicum of reassurance did little to quell his irrational fear.
            </p>

            <p className="italic">
              Let's try something new, David.
            </p>

            <p>
              The doctor placed a jar of various spiders on the desk in front of him.
            </p>

            <p className="italic">
              I think that a little exposure therapy would work wonders for you.
            </p>

            <p>
              He continued, a small chuckle escaping his lips—the beginnings of a wry smile creeping its way onto his face.
            </p>

            <p className="italic">
              I don't think that––
            </p>

            <p className="italic">
              Just let me do my thing, David. You want to get over these hallucinations you're having? Just trust me.
            </p>

            <p>
              The doctor's gloved hand made its way to the jar, and with a deliberate, agonizing slowness, began to unscrew the lid.
            </p>

            <p>
              With bated breath, David watched as it came loose.
            </p>

            <p>
              Inside, the spiders twitched, curling their legs until they formed an amalgamation of hair and dangling limbs, the largest of which feasted on their subordinates—if such a denotation of order could even apply to the writhing conglomerate of flesh that lay before him.
            </p>

            <p className="italic">
              They're beautiful, aren't they?
            </p>

            <p>
              No, they were not beautiful.
            </p>

            <p>
              Without hesitation, the doctor promptly reached for one of the larger spiders; there was an almost giddy presence in his movements that had entirely lacked before, as if he couldn't go one moment longer without one of the creatures inhabiting the palm of his hand.
            </p>

            <p>
              He raised the spider toward David, its freakish abdomen pulsating in an unnatural rhythm.
            </p>

            <p className="italic">
              They're harmless, David, really. They remind me a lot of you.
            </p>

            <p>
              Before David could even begin to unpack that comment, Haas placed the spider onto the back of David's hand. David sat frozen, his breath shallow, as the tingling sensation slowly spread throughout his body. After what seemed like hours, David, in one fell swoop, flung the spider off his hand. The sound of the spider splatting against the wall carried through the room.
            </p>

            <p>
              After a moment of silence between the two men, Haas burst out laughing.
            </p>

            <p className="italic">
              Well, I guess that's it for this session. You're paying online, right?
            </p>

            <div className="text-center my-8">
              <span className="text-2xl">* * *</span>
            </div>

            <p>
              David made the habit of using his other hand when he got home. He could think of nothing but the weight of the spider on his hand—that prickling, scratching feeling. He hated Haas, that fucking shrink. If he had half the self-confidence of that smug doctor, he would have had the mind to tell him off, or at least find the least bit decent of a psychiatrist.
            </p>

            <p>
              He kept seeing Haas, however. Some masochistic part of his brain was determined to do so. And, as much as he hated to admit it, Haas had managed to reduce the frequency of his hallucinations.
            </p>

            <p>
              As he washed his face in the sink, he caught sight of a curiously shaped black spot in the corner of his vision.
            </p>

            <p>
              David turned, expecting nothing. Soon, however, the spot unfurled, its eight spiny legs protruding in the most unnatural of ways.
            </p>

            <p>
              For a long while, there was a standstill between David and his unwelcome intruder.
            </p>

            <p>
              David stared, his heart pounding in his ears, trying to determine if the spider was real. Haas would have told him to calm down, to breathe.
            </p>

            <p>
              So he did.
            </p>

            <p className="italic">
              I'm not afraid.
            </p>

            <p>
              The spider crawled toward him, making its way to his feet, and then his legs, and soon his torso.
            </p>

            <p className="italic">
              I'm not afraid. You're not real.
            </p>

            <p>
              More and more spiders soon pooled into the bathroom, as if a living tsunami.
            </p>

            <p>
              David closed his eyes and began to smile. It felt good to confront his fears, like a tingling, prickling sensation that coursed through his body.
            </p>

            <p>
              He stood tall and, louder this time, repeated:
            </p>

            <p className="italic">
              I'm not afraid. You're not real.
            </p>

            <p>
              Soon, he broke out into a full, hysterical laugh as the first spider reached his throat.
            </p>

            <p className="italic">
              I'm not afraid.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "bureaucracyBlues") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/lovin.png"
            alt="Bureaucracy Blues header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Bureaucracy Blues
            </h2>
            <p className="text-xl text-gray-600 italic">
              by William Regier
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              I'm fourth in line at the Department of Motor Vehicles, counting the creases on the back of the neck of the incapacitated whale of a man in front of me. 14,15…his head leans back, exposing more valleys like a piece of flesh origami…21,22. I trail off as my mom's sharp voice rings through my head with her greatest piece of advice. Whatever you do, never set foot in that place.
            </p>

            <p>
              I've been here for hours, or days, I can't tell. My phone died right as I was about to get a "Terrific!" double match in Candy Crush, and I haven't been able to check the time since. I was 20th in line then, according to my ticket number, 67, the only connection I have left to a sense of time or identity. My eyes wander to the board, neon yellow letters on a bright blue background confirm that nothing has changed, the number 63 still shines on the screen. Calling this bureaucratic purgatory Kafkaesque would be giving it an undeserved compliment. Kafkaesque implies some sort of malice; this is just sad.
            </p>

            <p>
              Trying to find any help, I look to the broken clock from Five Below on the cream gray wall for the 12th time. Believe it or not, it's still not working.
            </p>

            <p>
              At least my attention span is getting some R&R. Maybe I should try to start a conversation with one of my fellow inmates. Find some sort of entertainment in our shared shittery. For some reason, I don't think the Elixir Golem in front of me is in the mood to talk. Behind me is a woman in a hoodie staring at her phone.
            </p>

            <p>
              "Riveting stuff?" I ask, pitching my voice to its perfected frequency of condescension and charm. "Watching civilization crumble in one-minute increments?"
            </p>

            <p>
              She doesn't respond. Instead, she keeps staring at her phone, her finger moving at an irritatingly slow pace, swiping onto the next video.
            </p>

            <p>
              "I guess that's what I get for trying to make conversation in this place. Dante's Inferno is more hospitable than this place."
            </p>

            <p>
              She still hasn't responded to me, but that doesn't matter. I chuckle to myself at my own wit. No one else does. The large man in front of me shifts his weight, the smell of stale sweat and the latest Arby's $5 meal deal wafting backwards. I crinkle my nose. Disgusting, what a lack of self-respect.
            </p>

            <p>
              Suddenly, the primeval speaker mounted on the ceiling above me crackles, like a stone grinding across pavement.
            </p>

            <p>
              "Number 67," a voice croaks. I double-take. They skipped the three people in front of me.
            </p>

            <p>
              "Finally," I huff, pushing past the U-Haul in front of me, "Excuse me. Some of us actually have places to be."
            </p>

            <p>
              I walk up to the counter. A smeared plexiglass window with a speaker in the middle separates me from a woman who was probably old enough to live on Pangea. Her skin sags off her face, milky-white eyes not set on me but staring blankly at something on her desk. A dusty black namecard spells out her name.
            </p>

            <p>
              "Mildred. I'm here to renew my license, I shout so that her probably clouded mind can understand what's going on, and I slide my prefiled paperwork to her under the partition. "You really need to renew your system. I've been here an eternity."
            </p>

            <p>
              "An eternity?" she breathes in a raspy voice. "It's been forty-one minutes."
            </p>

            <p>
              My eyes widen. "How would you know that?"
            </p>

            <p>
              "I know a lot about you, Arthur," the woman says, heaving a leather-bound ledger onto the desk. "I've been watching you. I heard your thoughts about the man in front of you, something about an elixir golem, and your dismissal of the woman behind you."
            </p>

            <p>
              I freeze. "I... I just thought those things."
            </p>

            <p>
              "You identified their sins correctly. That man was a glutton, consuming everything he came across. The woman was a sloth, wasting 40 years of her life staring at her phone, not doing anything meaningful," she says. "But you still haven't realized your own cardinal sin. You sat among them and thought you were a king."
            </p>

            <p>
              "Listen, lady," I laugh nervously. "I'm just here for my license."
            </p>

            <p>
              "Arthur," she says softly, pity in her white eyes. "You had a stroke in the parking lot. You never made it inside."
            </p>

            <p>
              The following silence envelopes me like a lasso, knocking me off my high horse. The "Whale" and the girl are my peers, not my inferiors.
            </p>

            <p>
              "Pride separates," Mildred says, raising a red stamp. "So your hell is simple. You stay with them."
            </p>

            <p>
              "Wait! I'm the protagonist!"
            </p>

            <p>
              "Renewal Denied," Mildred says, bringing the stamp down. PRIDE.
            </p>

            <p>
              "Next number."
            </p>

            <p>
              "For how long?" I scream.
            </p>

            <p>
              "Forever."
            </p>

            <p>
              The counter dissolves into an infinite beige corridor. My ticket morphs into a sideways 8.
            </p>

            <p>
              Infinity.
            </p>

            <p>
              "Number 68," the speaker drones.
            </p>

            <p>
              I turn around. The line stretches forever. And the man in front of me... counting the creases on his neck is the only thing left to do.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "shadowMarket") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/tree.png"
            alt="The Shadow Market header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              The Shadow Market
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Oscar Salerno
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              The fire in the hearth had burned down to just embers as the wealthy hobbit is in his grand mushroom house and begins to contemplate life. He was sitting in his red velvet armchair, staring into the fire with eyes that saw nothing.
            </p>

            <p>
              Around him, his wealth glittered in every corner. The expensive watches, the diamond table that was custom-made for him, none of it really mattered to him. This house is what he had been working for his entire life, and it was completely silent. He thought to himself that he had all of this wealth, but nobody was around him to share any memories with. The idea of dying lonely daunts him as he stumbles into the kitchen after drinking half a bottle of whiskey. He lights a cigarette on the gas-powered stove almost as if he were calling out for help.
            </p>

            <p>
              "What was the point of all those sleepless nights trying to get rich if I can't even love or feel anything?" The house did not answer him; it never did.
            </p>

            <p>
              He thought back to when he was young and had all of his close friends and family around him. He would spend his evenings at the tavern with not a care in the world, laughing until his sides hurt. Back then, he was poor but never lonely. Where did all of those people go? Did they leave him, or has he left them? He simply could not remember.
            </p>

            <p>
              The grandfather clock in the living room let out a sophisticated chime signaling that it was midnight. "Great, another day gone by for the wealthy and miserable." He shuffled to the bedroom with his golden robe on, silk, and his initials woven in the finest thread.
            </p>

            <p>
              This time, the feeling that was brought with the thought was delivered as if it were a physical blow. His legs gave out, and his stomach felt hollow as he clutched the side of his bedpost. A crash silenced the contemplation. Junip knocked over vintage teacups that were given to him by his grandmother. This was the only thing in the house that had real memory attached to it. He watched as they hit the floor one by one, and there was nothing he could do about it. He needed air, he needed a way out.
            </p>

            <p>
              Junip puts on his robe and, in a drunken stupor, leaves his house. The cool air slaps him awake. Surrounded by the woods, Junip knows these parts like the back of his hand. He played here when he was a child, climbed every tree, splashed in every creek.
            </p>

            <p>
              A massive hole in the earth that is covered by vines. The locals called it the hallows. The legend that was told was that anything that went down there did not come back up. This time, in his inebriated state, Junip sees the dark green vines in all of their glory and thinks, "Why not?"
            </p>

            <p>
              Junip stood at the edge of the hole, swaying back and forth, nervously chewing his cuticles as he saw darkness below him. "Maybe there's something down there… anything." In that moment, whether by drunken mistake or deliberate choice, Junip took a steep forward and fellll11.
            </p>

            <p>
              He dropped through the darkness, surprised to see that it was not empty but layered. First, he saw himself an hour ago when he was alone in the mushroom house, surrounded by expensive things that meant nothing to him. He was now in his thirties, signing another contract, shaking hands with strangers who smiled with their mouths but not their eyes. He was in a suit that was more expensive than his childhood house.
            </p>

            <p>
              He fell deeper. This time, he's twelve years old, playing with his guitar and the edge of the river bank, making up melodies that sound angelic. The smile on Junip's face soon faded as he saw his father emerge, shaking his head. "Music won't make you respectable, music won't put food on the table."
            </p>

            <p>
              Finally, the last layer, Junip's seven-year-old grandmother's teacups perfectly aligned on her shelf. His grandmother said, "Junip, my dear, all I want for you is to be happy in life; if you love yourself, you can throw away any superficial approval of others." When did he forget that?
            </p>

            <p>
              Then everything went black. Junip picked himself up off the floor and stood upright. The dizziness from the whiskey was gone, and the numbness had vanished.
            </p>

            <p>
              Junip felt like he was in a fever dream. He saw stalls that looked like they were endless all across this strange environment he was in. Glass bottles held sparkly dust that was labeled Childhood Wonder. In the center of the market stood the merchant. She was unrealistically tall, skin made up of river stones, and eyes tarnished with silver coins reflecting his own face at him.
            </p>

            <p>
              "Junip," she said. "I have been waiting for you."
            </p>

            <p>
              A single tear fell from his cheek as he realized that his entire life, his father wanted him respectable, and his mother wanted him successful. Everyone wanted something, and he'd given it all away.
            </p>

            <p>
              The merchant said, I'm allowing you to trade for what you have lost. She showed him three items: his childhood guitar, his journal of dreams, and a vial labeled the capacity to feel. "These are what you gave up."
            </p>

            <p>
              Junip thought of his empty mansion, the silence, the numbness. "I'll trade," he said.
            </p>

            <p>
              He drank from the vial, and he could suddenly feel again. He woke up in the forest at dawn, wearing simple clothes and a few coins in his pocket. He walked to an abandoned cottage, took a deep breath, and on his guitar played a melody from his childhood. Some people would call it a failure, but Junip had finally learned that the only thing worth trading for is yourself.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (showStory === "alzheimer") {
    return (
      <motion.div
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Image */}
        <div className="w-full h-48 relative overflow-hidden border-b-4 border-gray-300">
          <Image
            src="/mind.png"
            alt="Alzheimer's header"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Story Container - Harvard Lampoon Style */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h2 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Alzheimer's
            </h2>
            <p className="text-xl text-gray-600 italic">
              by Bennett Choi
            </p>
          </div>

          {/* Story Text - Clean, Simple Format */}
          <div className="text-black text-lg leading-relaxed space-y-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
            <h3 className="text-2xl font-bold mb-3">Aftermath</h3>

            <p>
              The first time he stumbled into the living room—eyes wide, shaking, breathless—I knew it was going to be another long night. It always starts the same way, with wild panic etched into his ashen face. The fear in his eyes always unsettles me. Once, those same eyes were steady and sure, calm under pressure. Now, the man I married lives only in memory, and an empty shell stands before me.
            </p>

            <p>
              "There's a man in my room," he gasps.
            </p>

            <p>
              My heart sinks. Not again.
            </p>

            <p>
              I set my iPad down slowly on the coffee table. It's dementia, not him. I make a mental note to ask Dr. Wolk if the sertraline dosage needs to be adjusted because the delusions after sundown are slowly creeping back.
            </p>

            <p>
              "Come on," I say, gently. "Show me."
            </p>

            <p>
              I try to be patient, but this disease has worn me down to a nub. He would do this for me, I remind myself. He would. But after the seventh episode in a single night, there's nothing left to give. I'm exhausted, and I've never been someone who does well without sleep. I wish the floor would open and swallow me whole, but I won't abandon our kids. I won't saddle them with him.
            </p>

            <p>
              He shuffles down the hallway, brushing his shoulder against the frames lining the walls. Remnants of the life we once shared.
            </p>

            <p>
              "There," he says, pointing. "Tell that man to leave, or we'll call the police."
            </p>

            <p>
              I follow his trembling finger. Nothing. Just the mirror again.
            </p>

            <p>
              Forcing a bitter smile, I'm grateful he didn't hit the panic button this time, summoning uniformed strangers to our home. At least I was spared scrambling for words and apologetically explaining, again, that he has Alzheimer's. Worried he might hear the truth as he stood beside me.
            </p>

            <p>
              "Honey," I whisper, taking his arm and gently guiding him toward the bed, doing my best not to sigh. "That man is you."
            </p>

            <p>
              He stiffens. "No!"
            </p>

            <p>
              "GET OUT OF MY HOUSE," he shouts to no one, face flushed with rage, violently shaking his head.
            </p>

            <p>
              I don't argue. What's the point? I've tried so many times, only to be met with anger and disbelief. "Come on," I coax, trying to lead him back to bed. He pushes me away, his breath quick and shallow.
            </p>

            <p>
              I wrap my arm around him. "Lie down. I'll stay with you."
            </p>

            <p>
              But he's transfixed by his reflection in the mirror, reaching out to touch the glass. He doesn't recognize himself. Sometimes, he doesn't recognize me.
            </p>

            <p>
              I feel sorry for him. I do. But I feel sorry for myself too.
            </p>

            <p>
              In the cheeriest voice I can muster, I say, "Let's wave to ourselves in the mirror," exaggerating a forced laugh as I lift his hand with mine. "See? Nothing to be scared of, right?"
            </p>

            <p>
              I catch his smile in the mirror. A fleeting twinkle in his eyes crushes my heart. For a brief moment, he's back, Then, just as quickly, he's faded again. I don't know whether to laugh or cry. This is my life now—until one of us dies. I never wanted to live long. I just want peace. And sleep.
            </p>

            <p>
              I think of quiet mornings, together, walking along Narragansett Bay, the crisp air on my face, the gentle swish of waves in water in the background. We used to reminisce about how far we'd come—from having nothing to building a good, settled life. Our three children and four grandchildren, all happy and healthy. This was never part of the plan.
            </p>

            <p>
              He was a good man, a great husband and loving father. The kids saved the notes he left in their lunchboxes—bad jokes, silly drawings, and wishes of good luck on a test. On weekends, he kept them occupied by making stacks of heart-shaped pancakes for breakfast so I could sleep in, and he quietly fixed what was broken before I had the chance to ask. That was the man he was.
            </p>

            <p>
              Now he needs care, and I'm trying. But I often close my eyes and dream of silence. Just one full night of sleep. One morning to rest without being woken.
            </p>

            <p>
              I tuck him in and crawl into bed. I need to sleep while he sleeps because there's no telling when he'll wake again, asking about the man in the room. Last time it was barely two hours. I wish I hadn't left my iPad in the living room. I want to look up the stages of Alzheimer's and see how much longer I'll remain captive in this prison.
            </p>
          </div>

          {/* Back Button - Clean Style */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowStory(null)}
              className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all"
            >
              ← BACK TO MAGAZINE
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Header - Browning Magazine Title (Larger, Like Harvard Lampoon) */}
      <div className="mb-8">
        <h1 
          className="text-7xl text-black mb-2 border-b-2 border-black inline-block"
          style={{ 
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          The Browning Magazine
          {activeSection && (
            <span className="text-5xl text-gray-700"> : {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span>
          )}
        </h1>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl">
        {/* Youth Section Stories */}
        {activeSection === "youth" && (
          <>
        {/* Story Card 1 - Birch Street */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => { setShowStory("birchStreet"); setCurrentPage(1); }}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/newgirl.png"
              alt="Birch Street cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Birch Street
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Veer Malhotra
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A somber tale of loss, isolation, and the quiet tragedy of a life lived in the shadows
            </p>
          </div>
        </div>

        {/* Story Card 2 - Before Contact */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("beforeContact")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/ranch.png"
              alt="Before Contact cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info - Harvard Style Layout */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Before Contact
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Julian Kang
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A story of youth, escape, and the longing for something beyond the fences of suburban Massachusetts
            </p>
          </div>
        </div>

        {/* Story Card 3 - The Story of the Cave */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("theCave")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/cave.png"
              alt="The Story of the Cave cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              The Story of the Cave
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Ali Hamdard
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A tale of brilliance, rebellion, and the dark mysteries that await in the depths
            </p>
          </div>
        </div>

        {/* Story Card 4 - Things I Know About Her */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("thingsIKnow")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/kid.png"
              alt="Things I Know About Her cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Things I Know About Her
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Alex Moeder
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A fragmented portrait told through fleeting moments, memories, and absences
            </p>
          </div>
        </div>

        {/* Story Card 5 - Dear Diary */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl"
          onClick={() => setShowStory("dearDiary")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/bed.png"
              alt="Dear Diary cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Dear Diary
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Lucas Ferreri
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A child's innocent dreams collide with a heartbreaking reality in this poignant tale
            </p>
          </div>
        </div>
          </>
        )}

        {/* Apocalypse Section Stories */}
        {activeSection === "apocalypse" && (
          <>
        {/* Story Card 1 - Clocks */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("clocks")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/city.png"
              alt="Clocks cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Clocks
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by William Regier
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              In a city that never sleeps, clocks tick on while humanity has vanished—a haunting meditation on progress without purpose
            </p>
          </div>
        </div>

        {/* Story Card 2 - City of Circles */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("cityOfCircles")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/light.png"
              alt="City of Circles cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              City of Circles
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Veer Malhotra
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A dystopian tale of conformity and control, where circular paths bind a society and one family's rebellion reveals the cost of breaking free
            </p>
          </div>
        </div>

        {/* Story Card 3 - Lounge */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("lounge")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/plane.png"
              alt="Lounge cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Lounge
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Ali Hamdard
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              In a Dubai airport lounge, privilege and crisis intersect—a moment of stillness before the world outside shifts
            </p>
          </div>
        </div>

        {/* Story Card 4 - Quiet Hands */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("quietHands")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/hand.png"
              alt="Quiet Hands cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Quiet Hands
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Ali Hamdard
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              From surgeon to leader—a fragmented portrait of transformation, power, and the cost of control
            </p>
          </div>
        </div>

        {/* Story Card 5 - Eventually */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl"
          onClick={() => setShowStory("eventually")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/field.png"
              alt="Eventually cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Eventually
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Bennet Choi
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A mystical tale of sacrifice and courage—where one life breaks an ancient curse and transforms fear into hope
            </p>
          </div>
        </div>
          </>
        )}

        {/* Becoming a Man Section Stories */}
        {activeSection === "becoming a man" && (
          <>
        {/* Story Card 1 - The Hidden Details */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => { setShowStory("hiddenDetails"); setCurrentPage(1); }}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/hh.png"
              alt="The Hidden Details cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              The Hidden Details
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Wil Davis
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A hockey player's journey from intimidation to integrity, discovering that true strength lies in vulnerability
            </p>
          </div>
        </div>

        {/* Story Card 2 - Movers */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("movers")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/car.png"
              alt="Movers cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Movers
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by William Regier
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A moving job becomes a journey through time and memory, revealing unexpected connections
            </p>
          </div>
        </div>

        {/* Story Card 3 - Letters to Javier */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("lettersToJavier")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/guy.png"
              alt="Letters to Javier cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Letters to Javier
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Julian Kang
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A man confronts his past through letters that reveal love, loss, and the weight of blame
            </p>
          </div>
        </div>

        {/* Story Card 4 - The Artist on Wall Street */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl"
          onClick={() => setShowStory("artistWallStreet")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/street.png"
              alt="The Artist on Wall Street cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              The Artist on Wall Street
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Oscar Salerno
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A Goldman Sachs analyst transforms cold numbers into art, discovering a new way to tell stories
            </p>
          </div>
        </div>
          </>
        )}

        {/* Collapse Section Stories */}
        {activeSection === "collapse" && (
          <>
        {/* Story Card 1 - Indignities */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("indignities")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/mouse.png"
              alt="Indignities cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Indignities
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Julian Kang
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A darkly absurdist tale of transformation and isolation—where a wish to be unnoticed takes a sinister turn
            </p>
          </div>
        </div>

        {/* Story Card 2 - The Man and His Psychiatrist */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("psychiatrist")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/spider.png"
              alt="The Man and His Psychiatrist cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              The Man and His Psychiatrist
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Lucas Ferreri
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A chilling psychological thriller about confronting fears—where exposure therapy takes a nightmarish turn
            </p>
          </div>
        </div>

        {/* Story Card 3 - Alzheimer's */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("alzheimer")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/mind.png"
              alt="Alzheimer's cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Alzheimer's
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Bennett Choi
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A heartbreaking portrait of love and loss as a caregiver navigates the aftermath of dementia
            </p>
          </div>
        </div>

        {/* Story Card 4 - The Shadow Market */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl mb-12"
          onClick={() => setShowStory("shadowMarket")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/tree.png"
              alt="The Shadow Market cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              The Shadow Market
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by Oscar Salerno
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A wealthy hobbit's journey through darkness to rediscover what truly matters—himself
            </p>
          </div>
        </div>

        {/* Story Card 5 - Bureaucracy Blues */}
        <div 
          className="flex gap-6 cursor-pointer hover:opacity-70 transition-opacity max-w-4xl"
          onClick={() => setShowStory("bureaucracyBlues")}
        >
          {/* Cover Image */}
          <div className="flex-shrink-0 w-48 h-64 border-2 border-gray-400 overflow-hidden bg-white shadow-lg">
            <Image
              src="/lovin.png"
              alt="Bureaucracy Blues cover"
              width={192}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Story Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-black mb-2">
              Bureaucracy Blues
            </h3>
            <p className="text-xl italic text-gray-600 mb-4">
              by William Regier
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              A darkly comedic tale of pride and punishment at the DMV—where waiting forever takes on a whole new meaning
            </p>
          </div>
        </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

