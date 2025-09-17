import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import Navbar from "./Navbar";
import backgroundVideo from "/public/medium.mp4";

const Mail = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle Excel upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 1,
      });
      const emails = sheet.flat().filter((cell) => /\S+@\S+\.\S+/.test(cell));
      setRecipients(emails);
    };
    reader.readAsArrayBuffer(file);
  };

  
  const handleSend = async () => {
    if (!subject || !message || recipients.length === 0) {
      setStatus("⚠️ Please fill all fields nd so on.");
      return;
    }

    setLoading(true);
    setStatus("Cooking emails... 🚀");

    try {
      const res = await axios.post("http://localhost:8000/messagesend", {
        subject,
        message,
        emaillist: recipients,
      });

      setStatus(res.data.message || "Emails sent successfully!");
    } catch (error) {
      console.error(error);
      setStatus(" Failed to send emails.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar className="absolute top-0 left-0 w-full z-10" />
      <div className="absolute inset-0  backdrop-blur-2 p-6 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700">
          
          <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400 -tracking-normal text-pretty" style={{ fontFamily: "Shadows Into Light Two" }}>
            PradeepMail sender
          </h1>

        
          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          
          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all h-32 resize-none"
          ></textarea>

          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="mb-4 w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:text-sm file:font-semibold
                     file:bg-cyan-600 file:text-white
                     hover:file:bg-cyan-500 transition-all"
          />

          
          {recipients.length > 0 && (
            <p className="text-green-400 mb-4 text-center animate-bounce">
               {recipients.length} Recipients Loaded
            </p>
          )}

          
          <button
            onClick={handleSend}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-lg tracking-wide transition-all transform
            ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-500 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/40"}`}
          >
            {loading ? "Sending..." : " Send Mail"}
          </button>

          {status && (
            <p className="mt-4 text-center text-cyan-300 animate-fade-in">
              {status}
            </p>
          )}
        </div>
      </div>
    </>

  );
};

export default Mail;
