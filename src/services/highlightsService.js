import api from './api'
import { API_CONFIG } from '@/constants'

// Mock data for development - replace with real API calls when backend is ready
const mockHighlights = [
  {
    id: 1,
    title: "IbaFest 2024 Pilot Event: A Literary Renaissance in Ibadan",
    excerpt: "Our inaugural pilot event brought together over 200 literature enthusiasts, emerging authors, and cultural advocates for an unforgettable celebration of African storytelling. The event featured panel discussions, poetry performances, and book exhibitions that showcased the rich literary heritage of Ibadan.",
    content: `
      <p>The inaugural IbaFest pilot event marked a significant milestone in our mission to revive and celebrate African literary culture. Held at the historic Ibadan City Hall, the event drew over 200 participants from across Nigeria and beyond.</p>
      
      <img src="/images/highlights/pilot-event-crowd.jpg" alt="Participants at IbaFest pilot event" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Key Highlights</h3>
      <p>The day began with a powerful opening address by renowned author Chimamanda Ngozi Adichie, who emphasized the importance of preserving and promoting African narratives in contemporary literature. Her words set the tone for a day filled with inspiring conversations and cultural exchange.</p>
      
      <img src="/images/highlights/panel-discussion.jpg" alt="Panel discussion in progress" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Community Impact</h3>
      <p>One of the most significant outcomes of the pilot event was the establishment of three new community reading groups in different neighborhoods across Ibadan. These groups have since grown to include over 150 regular members, demonstrating the event's lasting impact on local literacy initiatives.</p>
      
      <p>The book donation drive during the event collected over 500 books, which were distributed to local schools and libraries. This initiative directly benefited more than 1,000 students who now have improved access to literature and educational resources.</p>
      
      <img src="/images/highlights/book-donation.jpg" alt="Book donation ceremony" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Looking Forward</h3>
      <p>The success of our pilot event has laid the foundation for IbaFest 2025's inaugural edition. We learned valuable lessons about community engagement, logistical planning, and the incredible appetite for literary programming in Ibadan and surrounding areas.</p>
    `,
    image: "/images/highlights/pilot-event-main.jpg",
    date: "2024-09-15",
    readTime: "8 min read",
    category: "Event Report",
    slug: "ibafest-2024-pilot-event-literary-renaissance",
    author: "IbaFest Team",
    tags: ["pilot-event", "community", "literature", "ibadan"]
  },
  {
    id: 2,
    title: "Mobile Library Initiative Reaches 15 Communities",
    excerpt: "Our mobile library program has successfully reached 15 underserved communities across Oyo State, providing access to over 2,000 books and conducting reading sessions for more than 800 children and adults.",
    content: `
      <p>Since launching our mobile library initiative six months ago, we have made significant strides in bringing literature directly to communities that lack adequate library services. Our specially equipped van has become a familiar and welcome sight in villages and neighborhoods across Oyo State.</p>
      
      <img src="/images/highlights/mobile-library-van.jpg" alt="Mobile library van in a rural community" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Program Statistics</h3>
      <p>The mobile library has visited 15 communities, reaching over 800 individuals of all ages. We've conducted 45 reading sessions, distributed 300 books permanently to community centers, and registered 120 new library members who receive regular book deliveries.</p>
      
      <p>The program has been particularly successful in rural areas where children had limited access to age-appropriate reading materials. Teachers report improved literacy rates and increased interest in reading among their students.</p>
      
      <img src="/images/highlights/children-reading.jpg" alt="Children engaged in a reading session" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Community Stories</h3>
      <p>"Before the mobile library came to our village, my children had only their school textbooks to read. Now they look forward to Fridays when the van arrives. My daughter has read 15 books this year!" - Adunni Oladipo, mother of three from Oyo.</p>
      
      <h3>Expansion Plans</h3>
      <p>Based on the program's success, we are planning to add a second mobile library van in 2025 and extend our reach to communities in neighboring states. We are also developing digital lending capabilities to complement our physical book collection.</p>
    `,
    image: "/images/highlights/mobile-library-main.jpg",
    date: "2024-11-08",
    readTime: "6 min read",
    category: "Community Impact",
    slug: "mobile-library-initiative-reaches-15-communities",
    author: "Community Outreach Team",
    tags: ["mobile-library", "literacy", "community-outreach", "impact"]
  },
  {
    id: 3,
    title: "Partnership with University of Ibadan Expands Student Programs",
    excerpt: "Our new collaboration with the University of Ibadan's Department of Literature has created opportunities for student internships, research projects, and literary workshops that benefit both emerging scholars and the broader community.",
    content: `
      <p>We are excited to announce our formal partnership with the University of Ibadan's Department of Literature, a collaboration that strengthens the academic foundation of our cultural programming while providing valuable opportunities for students.</p>
      
      <img src="/images/highlights/ui-partnership-signing.jpg" alt="Partnership signing ceremony at UI" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Student Internship Program</h3>
      <p>The partnership has established a structured internship program that allows literature students to gain hands-on experience in cultural programming, event management, and community engagement. Our first cohort of 12 interns has contributed over 500 hours of volunteer work to various IbaFest initiatives.</p>
      
      <p>Interns have been involved in research projects documenting oral traditions in local communities, organizing author visits to secondary schools, and developing educational materials for our literacy programs.</p>
      
      <img src="/images/highlights/student-interns.jpg" alt="Student interns working on community projects" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Research Collaboration</h3>
      <p>Joint research projects are exploring the historical significance of Ibadan as a center of African literary culture. Students and faculty are documenting the contributions of writers like Wole Soyinka, Christopher Okigbo, and other luminaries who were connected to the city.</p>
      
      <h3>Workshop Series</h3>
      <p>Monthly workshops co-hosted by UI faculty and visiting authors provide students with direct access to industry professionals and published writers. These sessions cover topics ranging from creative writing techniques to the business of publishing.</p>
      
      <img src="/images/highlights/ui-workshop.jpg" alt="Writing workshop in progress" class="w-full h-64 object-cover rounded-lg my-6" />
    `,
    image: "/images/highlights/ui-partnership-main.jpg",
    date: "2024-10-22",
    readTime: "7 min read",
    category: "Partnership",
    slug: "partnership-university-ibadan-expands-student-programs",
    author: "Academic Relations Team",
    tags: ["university-partnership", "education", "students", "research"]
  },
  {
    id: 4,
    title: "Women Writers Workshop Series Empowers Local Authors",
    excerpt: "Our quarterly women writers workshops have provided a platform for 40 female authors to develop their craft, share their stories, and connect with publishers and literary agents.",
    content: `
      <p>The Women Writers Workshop Series represents one of our most impactful initiatives, creating a supportive environment for female authors to develop their writing skills and build professional networks in the publishing industry.</p>
      
      <img src="/images/highlights/women-writers-workshop.jpg" alt="Women writers workshop session" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Empowering Voices</h3>
      <p>Over the past year, we have conducted four intensive workshops, each accommodating 15 participants. The workshops combine craft development sessions with industry insights, covering everything from character development and narrative structure to manuscript submission and self-publishing.</p>
      
      <p>Notable achievements include the publication of three anthologies featuring work from workshop participants, and the signing of two first-time authors with major Nigerian publishers.</p>
      
      <h3>Mentorship Program</h3>
      <p>Each workshop participant is paired with an established author mentor for ongoing support beyond the workshop period. This mentorship component has proven invaluable in helping writers navigate the challenges of developing a literary career.</p>
      
      <img src="/images/highlights/mentorship-session.jpg" alt="Author mentorship session" class="w-full h-64 object-cover rounded-lg my-6" />
      
      <h3>Success Stories</h3>
      <p>"The workshop gave me the confidence and skills I needed to complete my first novel. The feedback from other women writers and the mentorship I received were invaluable. I'm now working with an agent!" - Bola Adeyemi, workshop alumna.</p>
    `,
    image: "/images/highlights/women-writers-main.jpg",
    date: "2024-08-30",
    readTime: "5 min read",
    category: "Workshop Series",
    slug: "women-writers-workshop-series-empowers-local-authors",
    author: "Programs Team",
    tags: ["women-writers", "workshops", "empowerment", "publishing"]
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