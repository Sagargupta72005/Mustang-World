import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-full bg-[#f4f4f4] py-16 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">

        {/* LEFT SIDE */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            CONTACTS
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-2 leading-relaxed">
            Via Modena, 12 40019 Sant’Agata Bolognese (Bologna) - Italy
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-8 leading-relaxed">
            Phone: +39 051 9597537
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://maps.google.com/?q=Sant'Agata+Bolognese+Italy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-4 text-xs sm:text-sm font-bold flex items-center gap-3"
            >
              VIEW ON MAPS
              <span>→</span>
            </a>

            <a
              href="https://www.google.com/maps/dir/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-4 text-xs sm:text-sm font-bold flex items-center gap-3"
            >
              DRIVING DIRECTIONS
              <span>+</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - GOOGLE MAPS */}
        <div className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-md">
          <iframe
            title="Lamborghini HQ"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.0333732317754!2d80.83146197991697!3d24.573204208749267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x295eac37abd4e069%3A0x7f569640fddfb9ca!2sTFP%20Technologies!5e1!3m2!1sen!2sin!4v1764525937295!5m2!1sen!2sin"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
