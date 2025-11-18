const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_CMS_API_KEY;

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  description: string;
  url: string;
  created_at: string;
  created_by?: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  };
  updated_at?: string;
  updated_by?: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  };
  companyId?: string;
  metaTitle?: string;
  metaDescription?: string;
  metakeywords?: string;
  status?: string;
  scheduledAt?: string | null;
  views?: number;
  likes?: number;
  author?: {
    name?: string;
    avatarInfo?: { url?: string };
  };
  category?: { 
    id?: string;
    name?: string;
    created_at?: string;
    created_by?: {
      id?: string;
      name?: string;
      email?: string;
    };
    updated_at?: string;
    updated_by?: {
      id?: string;
      name?: string;
      email?: string;
    };
  };
  tags?: { name?: string; urlSlug?: string }[];
  asset?: { 
    url?: string;
    altText?: string;
    imageName?: string;
    imageInfo?: {
      key: string;
      mimeType: string;
      originalName: string;
      size: number;
      url: string;
    };
  } | null;
  // Add any other fields you need
}

export interface Testimonial {
  id: string;
  message: string;
  rating: number;
  status: string;
  isFeatured?: boolean;
  created_at: string;
  clientName?: string;
  clientPhone?: string;
  clientAvatar?: {
    alt?: string;
    size?: number;
    type?: string;
    url?: string;
  };
  author?: {
    name?: string;
    avatarInfo?: { url?: string };
  };
  // Add any other fields you need
}

export interface Announcement {
  id: string;
  title: string;
  description?: string; // Keep for backward compatibility
  content?: string; // API returns 'content' instead of 'description'
  priority?: 'low' | 'medium' | 'high';
  status?: string;
  created_at: string;
  updated_at?: string;
  asset?: { 
    url?: string;
    altText?: string;
    imageName?: string;
    imageInfo?: {
      key: string;
      mimeType: string;
      originalName: string;
      size: number;
      url: string;
    };
  } | null;
  created_by?: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  };
  updated_by?: {
    id?: string;
    name?: string;
    email?: string;
    avatar?: string;
  } | null;
  expiresAt?: string;
  companyId?: string;
}

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    // Check if API_URL and API_KEY are configured
    if (!API_URL || !API_KEY) {
      console.warn('API_URL or API_KEY not configured, returning empty array');
      return [];
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`${API_URL}/private-api/blogs`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // If your API returns { data: [...] }
    return data.data || data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    
    // If it's a network error or timeout, return empty array
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        console.warn('Network error or timeout, returning empty blogs array');
      }
    }
    
    return [];
  }
};

export const fetchBlogById = async (id: string): Promise<BlogPost | null> => {
  try {
    // Check if API_URL and API_KEY are configured
    if (!API_URL || !API_KEY) {
      console.warn('API_URL or API_KEY not configured, returning null');
      return null;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`${API_URL}/private-api/blogs/${id}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    
    // If it's a network error or timeout, return null
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        console.warn('Network error or timeout, returning null for blog');
      }
    }
    
    return null;
  }
};

export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    // Check if API_URL and API_KEY are configured
    if (!API_URL || !API_KEY) {
      console.warn('API_URL or API_KEY not configured, returning null');
      return null;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    console.log(`Fetching blog with slug: ${slug}`);
    console.log(`API URL: ${API_URL}/private-api/blogs/${slug}`);

    const response = await fetch(`${API_URL}/private-api/blogs/${slug}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log(`Response status: ${response.status}`);
    console.log(`Response ok: ${response.ok}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Raw API Response:', responseData);
    console.log('Response data type:', typeof responseData);
    console.log('Response data keys:', Object.keys(responseData));
    
    // Handle different response structures
    let blogData = null;
    
    if (responseData.success && responseData.data) {
      console.log('Using responseData.data (success structure)');
      blogData = responseData.data;
    } else if (responseData.data) {
      console.log('Using responseData.data (no success check)');
      blogData = responseData.data;
    } else if (responseData.id || responseData.title) {
      console.log('Using responseData directly (direct blog object)');
      blogData = responseData;
    } else {
      console.log('No valid blog data found in response');
      return null;
    }
    
    console.log('Final blog data:', blogData);
    return blogData;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    
    // If it's a network error or timeout, return null
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        console.warn('Network error or timeout, returning null for blog by slug');
      }
    }
    
    return null;
  }
};

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    // Check if API_URL and API_KEY are configured
    if (!API_URL || !API_KEY) {
      console.warn('API_URL or API_KEY not configured, returning fallback data');
      return getFallbackTestimonials();
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`${API_URL}/private-api/testimonials`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // If your API returns { data: [...] }
    return data.data || data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    
    // If it's a network error or timeout, return fallback data
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        console.warn('Network error or timeout, using fallback testimonials');
        return getFallbackTestimonials();
      }
    }
    
    return [];
  }
};

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  try {
    // Check if API_URL and API_KEY are configured
    if (!API_URL || !API_KEY) {
      console.warn('API_URL or API_KEY not configured, returning fallback data');
      return getFallbackAnnouncements();
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(`${API_URL}/private-api/announcements`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response data:', data);
    // If your API returns { data: [...] }
    const result = data.data || data;
    console.log('Processed announcements:', result);
    return result;
  } catch (error) {
    console.error('Error fetching announcements:', error);
    
    // If it's a network error or timeout, return fallback data
    if (error instanceof Error) {
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        console.warn('Network error or timeout, using fallback announcements');
        return getFallbackAnnouncements();
      }
    }
    
    return getFallbackAnnouncements();
  }
};

// Fallback testimonials data
const getFallbackTestimonials = (): Testimonial[] => {
  return [
    {
      id: '1',
      message: "Dr. Soma's expertise in plastic surgery is exceptional. The results exceeded my expectations and the care I received was outstanding.",
      rating: 5,
      status: 'published',
      isFeatured: true,
      created_at: '2024-01-15T10:00:00Z',
      author: {
        name: 'Sarah Johnson',
        avatarInfo: { url: '/images/testimonials_image_one.png' }
      }
    },
    {
      id: '2',
      message: "I'm so grateful for Dr. Soma's skill and professionalism. The entire experience was smooth and the outcome is amazing.",
      rating: 5,
      status: 'published',
      isFeatured: true,
      created_at: '2024-01-10T14:30:00Z',
      author: {
        name: 'Michael Chen',
        avatarInfo: { url: '/images/testimonials_image_two.png' }
      }
    },
    {
      id: '3',
      message: "Dr. Soma and his team provided excellent care throughout my treatment. Highly recommended for anyone considering plastic surgery.",
      rating: 5,
      status: 'published',
      isFeatured: true,
      created_at: '2024-01-05T09:15:00Z',
      author: {
        name: 'Emily Rodriguez',
        avatarInfo: { url: '/images/testimonials_image_three.png' }
      }
    },
    {
      id: '4',
      message: "The results from my procedure with Dr. Soma are incredible. Professional, caring, and truly skilled in his field.",
      rating: 5,
      status: 'published',
      isFeatured: false,
      created_at: '2024-01-01T16:45:00Z',
      author: {
        name: 'David Kim',
        avatarInfo: { url: '/images/testimonials_image_one.png' }
      }
    },
    {
      id: '5',
      message: "Dr. Soma's attention to detail and patient care is remarkable. I couldn't be happier with my experience and results.",
      rating: 5,
      status: 'published',
      isFeatured: false,
      created_at: '2023-12-28T11:20:00Z',
      author: {
        name: 'Lisa Thompson',
        avatarInfo: { url: '/images/testimonials_image_two.png' }
      }
    }
  ];
};

// Fallback announcements data
const getFallbackAnnouncements = (): Announcement[] => {
  console.log('Using fallback announcements data');
  return [
    {
      id: '1',
      title: 'Holiday Greetings',
      content: 'Dear Valued Patients: Selamat Hari Raya Maaf Zahir Dan Batin. Wishing you and your family joy and happiness during this festive season.',
      priority: 'high',
      status: 'published',
      created_at: '2024-12-20T10:00:00Z'
    },
    {
      id: '2',
      title: 'New Advanced Treatment Available',
      content: 'Introducing our latest facial rejuvenation treatment with cutting-edge technology - book your consultation today for personalized care!',
      priority: 'medium',
      status: 'published',
      created_at: '2024-12-19T14:30:00Z',
      asset: {
        url: '/images/dr_soma_small_pic.png',
        imageInfo: {
          key: 'dr_soma_small_pic.png',
          mimeType: 'image/png',
          originalName: 'dr_soma_small_pic.png',
          size: 1024,
          url: '/images/dr_soma_small_pic.png'
        }
      }
    },
    {
      id: '3',
      title: 'Enhanced Patient Experience',
      content: 'Our patient portal has been upgraded with new features for better experience and easier appointment booking. Access your records anytime!',
      priority: 'low',
      status: 'published',
      created_at: '2024-12-18T09:15:00Z'
    },
    {
      id: '4',
      title: 'Safety Protocols Updated',
      content: 'We continue to maintain the highest safety standards for all patients and staff members. Your health and safety remain our top priority.',
      priority: 'high',
      status: 'published',
      created_at: '2024-12-17T16:45:00Z'
    },
    {
      id: '5',
      title: 'Special Consultation Offer',
      content: 'Limited time offer: Free initial consultation for new patients. Experience Dr. Soma\'s expertise in plastic surgery and aesthetic treatments.',
      priority: 'medium',
      status: 'published',
      created_at: '2024-12-16T11:20:00Z'
    }
  ];
}; 