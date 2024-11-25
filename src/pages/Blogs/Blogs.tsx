import streetChild from "../../assets/street-children.jpg"
import landscape from "../../assets/landscape.jpg"
import portrait from "../../assets/portrait.jpg"
import street from "../../assets/street.webp"

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Exploring the Beauty of Landscapes',
      excerpt: 'A journey through stunning landscapes captured in their full glory.',
      image: landscape,
      category: 'Landscape',
      date: 'November 15, 2024',
    },
    {
      id: 2,
      title: 'Mastering Portrait Photography',
      excerpt: 'Tips and techniques for capturing stunning portraits.',
      image: portrait,
      category: 'Portrait',
      date: 'November 10, 2024',
    },
    {
      id: 3,
      title: 'The Art of Street Photography',
      excerpt: 'Discover the magic of candid moments on the streets.',
      image: streetChild,
      category: 'Street',
      date: 'November 5, 2024',
    },
    {
      id: 3,
      title: 'The Art of Street Photography',
      excerpt: 'Discover the magic of candid moments on the streets.',
      image: street,
      category: 'Street',
      date: 'November 5, 2024',
    },
  ];
  return (
    <div className="px-4 py-10">
    {/* Hero Section */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold">Photography <span className="text-[#137548]"> Blog</span></h1>
      <p className="mt-4 text-gray-700">Explore stories, tips, and techniques from the world of photography.</p>
    </div>

    {/* Blog Post Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <span className="text-sm text-gray-500">{blog.category} • {blog.date}</span>
            <h2 className="text-lg font-bold mt-2 text-[#137548]">{blog.title}</h2>
            <p className="text-gray-700 mt-2">{blog.excerpt}</p>
            <a href={`/blog/${blog.id}`} className="text-[#137548] mt-4 inline-block font-medium">
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Blogs