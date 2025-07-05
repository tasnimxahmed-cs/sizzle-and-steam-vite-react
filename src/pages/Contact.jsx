export default function Contact() {
  return (
    <section className="bg-dark text-white py-12 px-6 sm:px-8 flex flex-col items-center gap-12">
      <title>Sizzle & Steam | Contact</title>

      <h1 className="text-8xl font-logo text-brand text-center">CONTACT US</h1>

      <div className="w-full max-w-4xl space-y-12">
        <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Hunter College Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.652382518891!2d-73.96485768459487!3d40.76873097932671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f3c9990c5b%3A0x21084480b0f711ff!2sHunter%20College!5e0!3m2!1sen!2sus!4v1620927623884!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>

        <form className="w-full bg-card p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-input border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-input border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 bg-input border border-gray-600 rounded text-white resize-none focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-brand text-black font-semibold py-2 px-6 rounded hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
