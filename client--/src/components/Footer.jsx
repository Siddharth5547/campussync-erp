import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold text-blue-500">
              CampusSync AI
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              AI Powered College ERP System built using
              React, Node.js, Express and MongoDB.
            </p>

          </div>

          <div className="flex gap-6 text-2xl">

            <FaGithub className="cursor-pointer hover:text-blue-500 transition" />

            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />

            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-500">
          © 2026 CampusSync AI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;