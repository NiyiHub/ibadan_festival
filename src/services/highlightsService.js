import api from './api'
import { API_CONFIG } from '@/constants'

// Mock data for development - replace with real API calls when backend is ready
const mockHighlights = [
  {
    id: 1,
    title: "“We Have No Country Yet!” — Niyi Osundare Stirs Ibadan at Invocations of the Word",
    excerpt: "In a stirring prelude to the inaugural Ibadan Book and Arts Festival (IbaFest), the city of Ibadan played host to a remarkable literary gathering tagged Invocations of the Word: A Day of Poetry and Conversations with Niyi Osundare. Held on Saturday, August 16, 2025, at RovingHeights Bookstore, Bodija, Ibadan, the event brought together book lovers, creatives, scholars, and cultural leaders across the Cultural and Creative Industries (CCI) to celebrate the power of storytelling and reflect on the state of the nation.",
    content: `
      <p>In a stirring prelude to the inaugural Ibadan Book and Arts Festival (IbaFest), the city of Ibadan played host to a remarkable literary gathering tagged Invocations of the Word: A Day of Poetry and Conversations with Niyi Osundare. Held on Saturday, August 16, 2025, at RovingHeights Bookstore, Bodija, Ibadan, the event brought together book lovers, creatives, scholars, and cultural leaders across the Cultural and Creative Industries (CCI) to celebrate the power of storytelling and reflect on the state of the nation. <br>
      The three-hour event, rich in poetic performances and intellectual exchange, honoured the legendary poet, essayist, and public intellectual, Professor Niyi Osundare. It featured live readings, spirited conversations, and audience engagement that left attendees both inspired and introspective.
      </p>
      
      <img src="/images/highlights/osundare/1.jpg" alt="Participants at IbaFest pilot event" class="w-full h-100 object-cover rounded-lg my-6" />
      
      
      <p>The event welcomed literary dignitaries including Prof. Femi Osofisan, Dr. Ayodeji Shittu, Prof. Mark Osama Ighile, Prof. Nelson Fashina, Prof. Adeshina Afolayan, Prof. Doyin Agoru, Dr. Folasade Anita Ajao, Mr. Steve Shaba of Kraft Books, and Comrade Adewumi Olowoniyi, Coordinator of the Centre for Change, Oyo State chapter. <br> 
      The gathering featured some of Nigeria’s fast rising poets including, Pamilerin Jacob, Obafemi Thanni, Sodiq Oyekanmi, Olajuwon Opeyemi Folashayo, Asan, Flourish Joshua, and Oluwatomisin Olorunfemi who read from a wide range of poems from Prof. Osundare’s oeuvre. Festival Director, Servio Gbadamosi expressed heartfelt gratitude to attendees, noting that despite the by-elections in parts of the city, the turnout was a testament to the enduring power of literature. “This has been a dream the team has nurtured for years,” Gbadamosi said. “It’s not just another book reading—it’s a return to where it all began: Ibadan.” Gbadamosi also announced the inaugural Ibadan Book and Arts Festival, themed “The Past as Prologue to the Future”, scheduled to hold on October 24–25, 2025, at the University of Ibadan’s International Conference Centre. He explained that IbaFest will convene writers, thinkers, and creatives from across Africa and beyond in a vibrant celebration of ideas, creativity, and cultural dialogue.</p>
      
      <img src="/images/highlights/osundare/2.jpg" alt="Panel discussion in progress" class="w-full h-100 object-cover rounded-lg my-6" />
      
      
      <p>Prof. Osundare, in turn, praised Gbadamosi for his tireless efforts in preserving poetry and literature in Nigeria, saying: “I thank him for what he has been doing for poetry and publishing in Nigeria over these years.” <br>
      Opening his reading, Prof. Osundare reminded the audience that poetry is not merely words on a page but a full-bodied experience: “Poetry takes control of the whole body. Your face is the dictionary, and the parts of your body are consonants and powers.” His first reading, “Invocations of the Word”, from his collection The Word is an Egg, was a fiery testament to the power of language to stir, provoke, and heal. <br>
      Flourish Joshua’s bilingual rendition of “In the Mood for Love” added a vibrant call-and-response rhythm that drew laughter, applause, and audible delight from the audience. It was a moment that captured the communal spirit of poetry—its ability to connect, entertain, and provoke thought.</p>

      <img src="/images/highlights/osundare/3.jpg" alt="Book donation ceremony" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>In a moment of solemn reflection, Osundare declared: “We have no country yet!” He shared his recent experiences as a Nigerian citizen, lamenting the systemic failures that disable rather than empower: “Nigeria disables its citizens, it rarely does anything for them, and it also prevents them from doing anything for themselves.” He spoke candidly about the difficulty of advocacy in Nigeria: “It is difficult to stand on your own to speak the truth.” <br>
      The literary critic urged youths to study the sources of Nigeria’s problems and ensure that a repetition of past errors does not occur by choosing to be different.
      “They (youths) also must study the sources of the problems of Nigeria, and make sure that they themselves don’t repeat those problems, those dysfunctional propensities in their own lives,” Osundare said. <br>
      “Because it is really no excuse to say, ‘yes I became a thief because the governor stole money or the legislator stole money.’ No! You have to be different, and you have to be able to think critically. Our rulers don’t think as I’ve always said. The value of education is that it makes us critical and interrogative. And there is a lot to criticise and question in the way Nigeria is being run.”
      </p>
      
      <img src="/images/highlights/osundare/6.jpg" alt="Book donation ceremony" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>Osundare also addressed the challenges of writing authentically from the diaspora: “What our diaspora is doing to our writers is killing them. You can’t write authentically and passionately about your country when all you have is garnered from the internet—you are too far from the bleeding wound.” This, he explained, is why he remains rooted in Nigeria, close to the pulse of its struggles and triumphs. ,br>
      He lamented the lack of technological innovation among Nigerian publishers and the difficulty of accessing his internationally published works, such as Green: Sighs of Our Ailing Planet, which was released in the United States. He also criticized the deteriorating state of Nigerian universities and the lack of sustainable practices, invoking the old adage, “We did not inherit the earth from our ancestors, but we borrowed it from our children.” <br>
      Renowned journalists Michael Olatunbosun and Oluwaseun Akinola moderated a robust conversation with the poet. Olatunbosun described Osundare as both a “writer” and a “righter,” probing how he maintains his principles in a country that challenges sanity. Osundare responded: “One of the most difficult things to do in Nigeria is to keep your sanity and principles.” Akinola asked about Osundare’s satirical critique of the judiciary as captured in the poem, “My Lord, Tell Me Where to Keep Your Bribe” to which he replied that the institution remains aspirational, not yet fully just; stressing the importance of selecting its stewards wisely, as they shape the future of justice.
      </p>

      <img src="/images/highlights/osundare/4.jpg" alt="Book donation ceremony" class="w-full h-100 object-cover rounded-lg my-6" />

      <p>
      Members of the audience posed questions on corruption, survival, Artificial Intelligence, and the future of creative writing. Osundare’s response was unwavering: “If there is life, there is hope.” He urged Nigerians to keep hope alive, emphasizing that change requires both leadership and citizen responsibility: “Bad leaders bring out the worst in their citizens.” <br>
      When asked to define his literary legacy in one line, Osundare demurred: “That is for the future and the people to decide—whether my pluses beat out my minuses.” Yet he made it clear that he does not wish to be remembered negatively. <br>
      The event was not just a celebration of poetry—it was a call to action, a reminder of literature’s power to illuminate, challenge, and inspire. It sets the stage for the upcoming conversation with polymath Dr. Tunde Adegbola, scheduled for Saturday, August 23, 2025, at the NuStreams Conference and Culture Centre, KM 110 Alalubosa GRA, Abeokuta Road, Ibadan. This landmark dialogue, titled The Polymath’s Journey: A Conversation on Humanity, Technology, and the Yoruba Worldview, continues Ibadan Book and Arts Festival’s mission to explore the intersections of culture, intellect, and transformation.
      </p>
    `,
    image: "/images/highlights/osundare/main.jpg",
    date: "2025-08-16",
    readTime: "8 min read",
    category: "Event Report",
    slug: "we-have-no-country-yet-Niyi-Osundare-stirs-ibadan-at-invocations-of-the-word",
    author: "Temiloluwa Ibitomi",
    tags: ["literature", "ibadan"]
  },
  {
    id: 2,
    title: "In Search of Home: Oko Owi Ocho Reads from Now I Sing God into Stones in Ibadan",
    excerpt: "In a soul-stirring evening of reflection and cultural resonance, the Ibadan Book and Arts Festival (IbaFest), in partnership with Noirledge Publishing, and Sevhage Publishers, hosted Nigerian poet, and performer Oko Owi Ocho for a book reading and conversation on July 22, 2025. The event, held at Noirledge Publishing’s office in Ibadan, drew an enthusiastic audience of readers, writers, and cultural enthusiasts eager to experience his latest work, Now I Sing God into Stones.",
    content: `
      <p>In a soul-stirring evening of reflection and cultural resonance, the Ibadan Book and Arts Festival (IbaFest), in partnership with Noirledge Publishing, and Sevhage Publishers, hosted Nigerian poet, and performer Oko Owi Ocho for a book reading and conversation on July 22, 2025. The event, held at Noirledge Publishing’s office in Ibadan, drew an enthusiastic audience of readers, writers, and cultural enthusiasts eager to experience his latest work, Now I Sing God into Stones. <br>
      The collection, Ocho explained, is deeply rooted in his Idoma heritage and personal journey. “Everything I have written for the past twelve, thirteen years has been about a search for the self, asking myself why don’t I feel at home everywhere I go? This new title is a return to my own ancient, ancestral memory,” he said. Divided into four sections—Home and History, Singing God into Stones at the Border of Grief, Epiphany of gods Coming Home Through My Dreams, and I Open My Body to the Trick of Passion—the poems travel between memory and myth, cultural excavation and existential questioning. He reflected that “most of these poems come to me, and I write. I think my poems have actually given more meanings to my life than me actually giving meanings to my poems.”
      .</p>
      
      <img src="/images/highlights/oko_owi/1.jpg" alt="Mobile library van in a rural community" class="w-full h-100 object-cover rounded-lg my-6" />
    
      <p>Moderated by Kayode Sanni, the conversation illuminated the emotional depths behind the collection. Reflecting on the personal pain expressed in the poem I Have Built Pyramids, Ocho described it as “a way of locking myself out of the world” and an attempt to interrogate why “my pain was unkind to me.” Even the title, he revealed, emerged from a journey of healing, evolving from an earlier idea, “Origin of the Shrine of Laughter,” into a testament of restoration. “I feel like I was looking for healing. I was also trying to understand my own pain, and these poems actually spoke a lot to me about whatever pain I’m going through,” he shared.</p>

      <img src="/images/highlights/oko_owi/2.jpg" alt="Mobile library van in a rural community" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>Known off the stage as Oko Owoicho, Ocho is a poet, performance artist, and literary administrator, whose career has been shaped by his passion for Pan-Africanism and decolonial thought. His work, spanning the dialogue between modernity and African authenticity, has earned him accolades including the Poets in Nigeria Award of Excellence for his poem “Zeyani” in 2018 and second prize in the Korea–Nigeria Poetry Prize the same year. He has presented critical papers at major platforms, including the SOAS Conference on Decoloniality at the University of London. His first chapbook, We Will Sing Water, interrogated collective historical trauma in a postmodernist world, while Now I Sing God Into Stones extends this inquiry into ancestral memory, displacement, and the tensions between village and city life in modern Africa.</p>
      
      <img src="/images/highlights/oko_owi/3.jpg" alt="Mobile library van in a rural community" class="w-full h-100 object-cover rounded-lg my-6" />
 
      <p>The book reading was one of a series of build-up events leading to the inaugural edition of the Ibadan Book and Arts Festival (Fest) scheduled to take place in October 2025. IbaFest is an annual celebration of African literature, creativity, and cultural dialogue. Rooted in Ibadan—a city renowned for its literary and cultural heritage—the festival brings together writers, artists, scholars, and cultural leaders to explore the power of stories and the potential of the Creative and Cultural Industries to transform education, community, and national development. <br>
      The evening was more than a book reading—it was a communion of voices and histories, where Ocho’s dynamic performance blurred the line between poetry and ritual, inviting the audience into the creative process that birthed the collection. As the event closed, it affirmed the power of literature to reconnect, reimagine, and restore—an ethos that IbaFest seeks to embody as it builds toward its much-anticipated debut later this year.</p>
      
      <img src="/images/highlights/oko_owi/4.jpg" alt="Mobile library van in a rural community" class="w-full h-100 object-cover rounded-lg my-6" />
    `,
    image: "/images/highlights/oko_owi/main.jpg",
    date: "2025-07-22",
    readTime: "6 min read",
    category: "Event Report",
    slug: "In-search-of-home-oko-owi-ocho-reads-from-now-i-sing-god-into-stones-in-ibadan",
    author: "Ibafest Team",
    tags: ["Ibadan", "literacy"]
  },
  {
    id: 3,
    title: "Book Reading and Conversations with Sodiq Alabi Report",
    excerpt: "The Book Reading and Conversation with Sodiq Alabi hosted by Noirledge Publishing in partnership with Sevhage, was held on the 21st of August 2025. The event preludes the inaugural Ibadan Book and Arts Festival (IBAFEST) scheduled to hold on the 24th and 25th of October 2025; a festival that intends to bring together poets, scholars, literary enthusiasts to celebrate literary works and arts. It was a memorable evening where the poet read excerpts from his collections, The Texture of Air and Deaf Birds and Frozen Frames.",
    content: `
      <p>The Book Reading and Conversation with Sodiq Alabi hosted by Noirledge Publishing in partnership with Sevhage, was held on the 21st of August 2025. The event preludes the inaugural Ibadan Book and Arts Festival (IBAFEST) scheduled to hold on the 24th and 25th of October 2025; a festival that intends to bring together poets, scholars, literary enthusiasts to celebrate literary works and arts. It was a memorable evening where the poet read excerpts from his collections, The Texture of Air and Deaf Birds and Frozen Frames. <br> 
      The event was graced by distinguished guests including High Chief Akeeb Adekunle Alabi and Princess Iyabode Serifat Alabi. It brought together poets, storytellers and literary enthusiasts. <br>
      The reading explored themes of displacement, migration, national consciousness, and identity, blending personal reflection with cultural heritage. <br>
      The opening poem “Displacement" captures the emotional complexities of migration/relocation. Alabi spoke about being away from home and how it was an emotional struggle when he left Nigeria. He reflects on the psychological toll that comes with migration and the challenges he faced when trying to adapt into a new system and culture.
      </p>
      
      <img src="/images/highlights/sodiq/1.jpg" alt="Partnership signing ceremony at UI" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>The second poem titled “What the Hunter Said” is drawn from his experiences in Iwo town. According to him, it is a poem from his debut collection The Texture of Air, he expanded the poem from his experiences in Iwo which is central to understanding the excerpt. He shed light on being a performance poet drawing from the rich Yoruba oral tradition in his early years, where his journey into poetry started at age 14 and how going back to Iwo in his thirties had brought beautiful memories and shaped his worldview. <br>
      Going forward into the reading, he read a poem titled “Life like British Weather” from his collection of poems, Deaf Birds and Frozen Frames. This poem compares life to British weather, showing how unpredictable and unstable life can be especially when living in a new environment.
      </p>

      <img src="/images/highlights/sodiq/2.jpg" alt="Partnership signing ceremony at UI" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>Alabi shared insight into his literary journey, how he began writing at age 17, with early works published by various newspapers. He recalls writing Texture of Air in 2015 and being inspired by the literary works of renowned writer, Prof. Wole Soyinka. <br>
      He spoke about his heritage from Iwo referencing the indigenes popular praise name “Omo Olodo Oba” and the legendary Oba River believed to have repelled invaders during historic Yoruba wars. He went further to talk about the influence of his grandmothers and maternal great grandmother who inspired his life and art greatly with their wisdom, shedding light on how their impact on his life has shaped him into who he is today.
      </p>
      
       <img src="/images/highlights/sodiq/3.jpg" alt="Partnership signing ceremony at UI" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>Alabi emphasised the importance of staying connected to Nigeria regardless of wherever one finds him/herself in the world. In his words “Ask yourself: what can I do to help? Do it in your own way, so we do not lose the country”. Here he stressed the need for one to self-reflect on actions that can bring positive changes to our country Nigeria. He moved on to express frustration on the country’s current state.  He further described his relationship with Nigeria as “complicated” because of the economic situation of the country. He identified as an expatriate, expressing how moving abroad felt like being on exile. <br>
      Alabi criticised the involvement of religious institutions in enabling poor leadership, noting that some religious leaders work together with political figures and are equally culpable for the country’s underdevelopment, he stressed the need for citizens to prioritise character and accountability when choosing leaders during elections. <br>
      He stated that his poetry collection, Deaf Birds and Frozen Frames is a metaphor for Nigeria, the leaders and how they turn deaf ears to the plight of the citizens. In his words “Nigerian leaders listen to the vibration of the drum and not the words of the music”.
      </p>

       <img src="/images/highlights/sodiq/4.jpg" alt="Partnership signing ceremony at UI" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <p>The audience participated actively and asked several thoughtful questions. One of which was when his daughter asked about the meaning of “prodigal” as used in one of his poems. Alabi responded by sharing the biblical story of the prodigal son which he likened to his homecoming, especially to Iwo, he stressed that despite living abroad he still feels homesick and misses the sense of belonging that comes with being amongst people of shared values and race. <br>
      An attendee inquired about the meaning of “Frozen Frames”, and Alabi explained how the poem is a tribute to his friends and their shared dreams of becoming writers and poets. He referred to “Frozen Frames” as preserving cherished memories. <br> 
      Through these conversations, the event highlighted the power of poetry in fostering togetherness in the literary world. It was indeed an evening of thought-provoking conversations spanning across cultural reflections and literary celebration. Alabi encouraged writers to step out of their comfort zones, engage with life and connect with people to enrich their craft. He expressed concern about the situation of the country and how he has lost hope. However, he urges citizens to make informed choices during elections and reject voting based on ethnicity or religion. <br>
      He announced that he has a new poetry collection in progress which he believes will be his finest work yet. <br>
      The event ended with closing remarks from Mr Servio Gbadamosi, Festival Director, Ibadan book and Arts Festival. 
      </p>
      
       <img src="/images/highlights/sodiq/5.jpg" alt="Partnership signing ceremony at UI" class="w-full h-100 object-cover rounded-lg my-6" />
    `,
    image: "/images/highlights/sodiq/main.jpg",
    date: "2025-08-21",
    readTime: "7 min read",
    category: "Event Report",
    slug: "Book-reading-and-conversations-with-sodiq-alabi-report",
    author: "Anthonia Duru",
    tags: ["literature", "ibadan"]
  },
  {
    id: 4,
    title: "The Polymath’s Journey: Dr. Tunde Adegbola in Conversation on Culture, Knowledge, and the Future at IbaFest Prelude",
    excerpt: "The Ibadan Book and Arts Festival (IbaFest), in partnership with NuStreams, hosted an illuminating evening with polymath Dr Tunde Adegbola on Saturday, August 23, 2025, at the NuStreams Conference and Culture Centre, Ibadan. The event, titled The Polymath’s Journey: A Conversation on Humanity, Technology, and the Yoruba Worldview, was another step in IbaFest’s mission to explore the intersections of culture, intellect, and transformation.",
    content: `
      <p>The Ibadan Book and Arts Festival (IbaFest), in partnership with NuStreams, hosted an illuminating evening with polymath Dr Tunde Adegbola on Saturday, August 23, 2025, at the NuStreams Conference and Culture Centre, Ibadan. The event, titled The Polymath’s Journey: A Conversation on Humanity, Technology, and the Yoruba Worldview, was another step in IbaFest’s mission to explore the intersections of culture, intellect, and transformation. <br>
      Welcoming the audience, Francis Madojemu, CEO of NuStreams, set the tone before handing over to moderators Olanike Onimisi and Kayode Sanni. The gathering celebrated Dr Adegbola’s life and work as a scholar, technologist, cultural advocate, and teacher, while also serving as part of the activities leading up to the inaugural IbaFest scheduled for October 24–25, 2025. The two-day festival, to be held at the International Conference Centre, University of Ibadan, will feature book readings, panel conversations, performances, an art exhibition, and a celebration of Ibadan’s rich literary and cultural heritage. It coincides with a month-long multimedia exhibition honouring Dr Adegbola at 70.</p>
      
      <img src="/images/highlights/adegbola/1.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <h3>A Journey Through Memory and Legacy</h3>
      <p>The evening began with a virtual exhibition showcasing awards and artefacts from Dr Adegbola’s decades of work in research, technology, and teaching. Among the plaques was one presented by Microsoft, another recognizing him as the pioneer engineer at the Ogun State Broadcasting Corporation (OGBC), and a Silent Achiever Award from the Change a Life Foundation, handed to him by former Lagos State governor Babatunde Raji Fashola. <br>
      He described the awards as testaments to his calling as a teacher. “At some point, I stopped students from giving me those awards,” he said with a smile. “It is reasonable to appreciate a lecturer, but a lecturer cannot be tagged the best.”
      The exhibition also displayed some of the old technologies that shaped early computing, as well as parts of his personal music archive. “If it is unrelated to music, I do not buy it,” he confessed. His passion for music was a recurring theme throughout the evening, later culminating in a live performance.
      </p>
      
      <img src="/images/highlights/adegbola/2.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <h3>Gratitude and Education</h3>
      <p>Asked how life feels at 70, Dr Adegbola reflected on his health journey. “I was diagnosed with prostate cancer at 60, which altered my body and mind. I walked with a stick for almost three years. Therefore, I give thanks to God for being alive to see this moment.” <br>
      The conversation soon turned to education and language; subjects he has championed for years. Responding to a question about the Federal Government’s policy reversal on teaching primary pupils in indigenous languages, he was emphatic. “We like shortcuts and cutting corners to get results,” he said. “There is no record of any people who became great by adopting a foreign language. All the countries that taught in their language became industrial societies in the Industrial Age.” <br>
      He added: “We have moved from the Industrial Age into the Information Age, and language is the basis of information. No language, no information. If language played such a pivotal role in the Industrial Age, how much more in the Information Age?” <br>
      Drawing from his own life, he explained, “I am a testimony of education in Yoruba. I was taught arithmetic in idi and eyo, not tens and units. Thereby applying mathematics to language.” He recalled the famous experiment led by Professor Babs Fafunwa, which showed that children taught in their mother tongue performed better even through secondary school. “Sadly,” he lamented, “even Yoruba history is now taught in English.”</p>
      
      <img src="/images/highlights/adegbola/3.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />
      
      <h3>Knowledge, Technology, and Artificial Intelligence</h3>
      <p>When asked whether he always had diverse interests in science, technology, and music, he responded: “Knowledge is whole. Unfortunately, in most institutions of the world, music is taught in Arts, when it is better studied in Physics.” He recalled being told at 15 that he could not combine music and physics. “But I did not allow such limitations to determine my academic and career trajectory.” <br>
      On the subject of Artificial Intelligence, he cautioned students to use AI responsibly. “AI tools are created by humans, and one of the factors that makes humans different is intelligence. For the first time, we have a competitor. But AI can make students so lazy that they no longer exercise their intelligence. Academia is learning by doing.” He added, “AI is meant to improve the efficiency of your work, not to amplify your laziness.”
      </p>

      <img src="/images/highlights/adegbola/4.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />

      <h3>Education as Empowerment</h3>
      <p>Dr Adegbola stressed the role of education in societal transformation. “Education is empowerment to transform a society and make a change. Unfortunately, graduates can barely apply their knowledge to solve real-life problems. With a degree in Electrical Engineering, I could not repair a radio. I had to apprentice informally to learn the application of what I studied.” <br>
      He lamented the obsession with publishing in foreign journals, calling it a distraction from developing local scholarship that addresses Nigeria’s realities. “If our lecturers are required to publish abroad, how will we develop journals that address our realities as a developing country? Instead, we judge our scholarship by foreign standards. For us, charity begins abroad.”
      </p>

      <img src="/images/highlights/adegbola/5.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />

      <h3>Indigenous Knowledge and Mysticism</h3>
      <p>Responding to poet and 2013 Nigeria Prize for Literature winner Tade Ipadeola’s question about indigenous communication systems, he described aroko as “a very powerful encryption system, probably equal in value or even better than some of the codes used to fight the Second World War.” He argued that before Alexander Graham Bell, the talking drum was the fastest means of telecommunications. “It was faster than pigeons, faster than pony express, faster than human beings carrying messages,” he explained, recalling how drums were used across slave camps in the Americas to coordinate uprisings. <br>
      On Ifa, he distinguished between religion and knowledge. “I am an unapologetic Christian, but I studied Ifa and Physics. Ifa is no more than Physics and Mathematics to me, probably a little more. Our forebears engaged their worlds scientifically. They produced knowledge. But when something works and you do not know why it works, you mystify it.” <br>
      He attributed the retreat into mysticism to the disruptions of slavery and colonialism. “For 300 years, the budding intellectuals who should have passed knowledge from the sages to the next generation were taken as slaves and used for labour. Then we endured 200 years of colonialism. We lost so much to slavery; we lost a lot to colonialism. Yet the volume of knowledge still surviving in orature shows how rich it originally was.”
      </p>

      <img src="/images/highlights/adegbola/6.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />

      <h3>"I Have Not Succeeded in Business"</h3>
      <p>Towards the end of the evening, Dr Adegbola reflected on his next steps. “Life continues. I pray that my health can bear my dreams. I still have aspirations about discovering some things in our language.” With candour, he admitted to one area where he feels he failed. “I established the first microcomputer company in Ibadan in 1985, but I have not succeeded in business!” <br>
      The evening ended on a musical note, with Dr Adegbola at the keyboard alongside his childhood friend, Anjola Aboderin, with whom he began playing music at age 12. The duo’s performance delighted the audience, offering a glimpse into the polymath’s enduring passion for sound.
      </p>

      <img src="/images/highlights/adegbola/8.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />

      <h3>Looking Ahead to IbaFest</h3>
      <p>In his closing remarks, Festival Director Servio Gbadamosi thanked the audience and described the conversation as inspiring. “The opportunity to hear Dr Adegbola speak about his journey is a gift,” he said, recalling Professor Niyi Osundare’s earlier counsel at a previous IbaFest event: “Against all odds, keep hope alive.” <br>
      Gbadamosi invited the public to attend the first Ibadan Book and Arts Festival, which will take place on October 24 and 25, 2025, at the University of Ibadan. The festival will feature writers, artists, performers, and thinkers from across Nigeria and beyond. “It will be a gathering to celebrate literature, art, and culture in Ibadan, a city with a proud intellectual and creative tradition,” he said. More details, he added, will be announced in the coming weeks.
      </p>

      <img src="/images/highlights/adegbola/9.jpg" alt="Women writers workshop session" class="w-full h-100 object-cover rounded-lg my-6" />
    `,
    image: "/images/highlights/adegbola/main.jpg",
    date: "2025-08-23",
    readTime: "15 min read",
    category: "Event Report",
    slug: "The-polymaths-journey-dr-tunde-adegbola-in-conversation-on-culture-knowledge-and-the-future-at-ibafest-prelude",
    author: "Temiloluwa Ibitomi",
    tags: ["workshops", "empowerment", "ibadan"]
  }
]

/**
 * Get all highlights
 * @param {Object} params - Query parameters for filtering/pagination
 * @returns {Promise<Array>} List of highlights
 */
export const getHighlights = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString()
    const endpoint = queryString ? 
      `${API_CONFIG.ENDPOINTS.HIGHLIGHTS}?${queryString}` : 
      API_CONFIG.ENDPOINTS.HIGHLIGHTS
    
    const response = await api.get(endpoint)
    return {
      success: true,
      data: response.data.results || response.data,
      pagination: response.data.pagination || null
    }
  } catch (error) {
    console.error('Failed to fetch highlights:', error)
    // Return mock data for development
    let filteredHighlights = mockHighlights
    
    // Apply basic filtering if params exist
    if (params.category) {
      filteredHighlights = filteredHighlights.filter(h => 
        h.category.toLowerCase() === params.category.toLowerCase()
      )
    }
    
    if (params.limit) {
      filteredHighlights = filteredHighlights.slice(0, parseInt(params.limit))
    }
    
    return {
      success: true,
      data: filteredHighlights,
      pagination: null
    }
  }
}

/**
 * Get highlight by slug
 * @param {string} slug - Highlight slug
 * @returns {Promise<Object>} Highlight data
 */
export const getHighlightBySlug = async (slug) => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.HIGHLIGHTS}${slug}/`)
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    console.error('Failed to fetch highlight:', error)
    // Return mock data for development
    const highlight = mockHighlights.find(h => h.slug === slug)
    if (highlight) {
      return {
        success: true,
        data: highlight
      }
    }
    throw new Error('Highlight not found')
  }
}

/**
 * Get featured highlights
 * @param {number} limit - Number of featured highlights to return
 * @returns {Promise<Array>} List of featured highlights
 */
export const getFeaturedHighlights = async (limit = 3) => {
  try {
    const response = await api.get(`${API_CONFIG.ENDPOINTS.HIGHLIGHTS}featured/?limit=${limit}`)
    return {
      success: true,
      data: response.data
    }
  } catch (error) {
    console.error('Failed to fetch featured highlights:', error)
    // Return mock data for development
    return {
      success: true,
      data: mockHighlights.slice(0, limit)
    }
  }
}