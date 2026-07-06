function Testimonial() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "B.Tech Student",
      review:
        "CampusSync AI made managing attendance and assignments incredibly easy. The dashboard is clean and user-friendly.",
    },
    {
      name: "Priya Singh",
      role: "Faculty",
      review:
        "Uploading marks and notices has become much faster. It saves a lot of time every semester.",
    },
    {
      name: "Aman Verma",
      role: "College Admin",
      review:
        "Managing students, faculty and courses from one platform is a huge improvement over manual work.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center">
        What Our Users Say
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Trusted by students, faculty and administrators.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-16">
        {testimonials.map((user, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
          >
            <div className="text-yellow-400 text-xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 mt-6">
              "{user.review}"
            </p>

            <h3 className="text-xl font-semibold mt-8">
              {user.name}
            </h3>

            <p className="text-gray-500">
              {user.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;