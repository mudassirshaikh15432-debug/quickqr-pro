import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import Header from "./components/layout/Header";
import TypeTabs from "./components/tabs/TypeTabs";

type Tab =
  | "url"
  | "whatsapp"
  | "email"
  | "phone"
  | "text"
  | "wifi"
  | "upi"
  | "vcard";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("url");
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [wifiName, setWifiName] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [encryption, setEncryption] = useState("WPA");
  const [upiId, setUpiId] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

const downloadPNG = async () => {
  if (!qrRef.current) return;

  const dataUrl = await toPng(qrRef.current);

  const link = document.createElement("a");
  link.download = "quickqr.png";
  link.href = dataUrl;
  link.click();
};

 const qrValue =
  activeTab === "url"
    ? url || "https://example.com"
    : activeTab === "whatsapp"
    ? phone
      ? `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
      : "https://example.com"
    : activeTab === "email"
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : activeTab === "phone"
    ? `tel:${phoneNumber}`
    : activeTab === "text"
    ? text || "Enter some text"
    : activeTab === "wifi"
    ? `WIFI:T:${encryption};S:${wifiName};P:${wifiPassword};;`
    : activeTab === "upi"
    ? `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    payeeName)}&am=${amount}&tn=${encodeURIComponent(note)}`
    : activeTab === "vcard"
? [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contactName}`,
    `TEL:${contactPhone}`,
    `EMAIL:${contactEmail}`,
    `ORG:${company}`,
    `URL:${website}`,
    "END:VCARD",
  ].join("\n")
    : "https://example.com";

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">

      

      <TypeTabs
     activeTab={activeTab}
     setActiveTab={setActiveTab}
      />

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* Left */}
          <div className="bg-slate-800 rounded-xl p-6">

            {activeTab === "url" && (
              <>
                <label className="block mb-2">
                  Website URL
                </label>

                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full p-3 rounded-lg text-black"
                />
              </>
            )}

            {activeTab === "whatsapp" && (
              <>
                <label className="block mb-2">
                  Phone Number
                </label>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="919876543210"
                  className="w-full p-3 rounded-lg text-black"
                />

                <label className="block mt-5 mb-2">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg text-black"
                />
              </>
            )}
            {activeTab === "email" && (
  <>
    <label>Email</label>

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="example@gmail.com"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4">Subject</label>

    <input
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      placeholder="Subject"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4">Message</label>

    <textarea
      value={body}
      onChange={(e) => setBody(e.target.value)}
      className="w-full p-3 rounded-lg text-black"
    />
  </>
)}
{activeTab === "phone" && (
  <>
    <label className="block mb-2">
      Phone Number
    </label>

    <input
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      placeholder="+91 9876543210"
      className="w-full p-3 rounded-lg text-black"
    />
  </>
)}
{activeTab === "text" && (
  <>
    <label className="block mb-2">
      Enter Text
    </label>

    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Write anything..."
      className="w-full p-3 rounded-lg text-black"
      rows={6}
    />
  </>
)}
{activeTab === "wifi" && (
  <>
    <label className="block mb-2">Wi-Fi Name (SSID)</label>

    <input
      value={wifiName}
      onChange={(e) => setWifiName(e.target.value)}
      placeholder="My WiFi"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-5 mb-2">Password</label>

    <input
      type="password"
      value={wifiPassword}
      onChange={(e) => setWifiPassword(e.target.value)}
      placeholder="Password"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-5 mb-2">Encryption</label>

    <select
      value={encryption}
      onChange={(e) => setEncryption(e.target.value)}
      className="w-full p-3 rounded-lg text-black"
    >
      <option value="WPA">WPA/WPA2</option>
      <option value="WEP">WEP</option>
      <option value="nopass">No Password</option>
    </select>
  </>
)}
{activeTab === "upi" && (
  <>
    <label className="block mb-2">UPI ID</label>
    <input
      value={upiId}
      onChange={(e) => setUpiId(e.target.value)}
      placeholder="name@oksbi"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Payee Name</label>
    <input
      value={payeeName}
      onChange={(e) => setPayeeName(e.target.value)}
      placeholder="Mudassir"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Amount</label>
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="100"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Note</label>
    <input
      value={note}
      onChange={(e) => setNote(e.target.value)}
      placeholder="Payment"
      className="w-full p-3 rounded-lg text-black"
    />
  </>
)}
{activeTab === "vcard" && (
  <>
    <label className="block mb-2">Full Name</label>
    <input
      value={contactName}
      onChange={(e) => setContactName(e.target.value)}
      placeholder="Mudassir Shaikh"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Phone</label>
    <input
      value={contactPhone}
      onChange={(e) => setContactPhone(e.target.value)}
      placeholder="+91 9876543210"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Email</label>
    <input
      value={contactEmail}
      onChange={(e) => setContactEmail(e.target.value)}
      placeholder="you@example.com"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Company</label>
    <input
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      placeholder="QuickQR Pro"
      className="w-full p-3 rounded-lg text-black"
    />

    <label className="block mt-4 mb-2">Website</label>
    <input
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
      placeholder="https://yourwebsite.com"
      className="w-full p-3 rounded-lg text-black"
    />
  </>
)}
          </div>

          {/* Right */}
         <div className="bg-slate-800 rounded-xl flex flex-col items-center justify-center p-6">

  <div
    ref={qrRef}
    className="bg-white p-5 rounded-xl"
  >
    <QRCode value={qrValue} size={220} />
  </div>

  <button
    onClick={downloadPNG}
    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
  >
    📥 Download PNG
  </button>

</div>

        </div>

      </div>
    </div>
  );
}