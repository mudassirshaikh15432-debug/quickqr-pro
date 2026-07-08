type Tab =
  | "url"
  | "whatsapp"
  | "email"
  | "phone"
  | "text"
  | "wifi"
  | "upi"
  | "vcard";

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

const tabs = [
  { id: "url", label: "🌐 URL" },
  { id: "whatsapp", label: "💬 WhatsApp" },
  { id: "email", label: "📧 Email" },
  { id: "phone", label: "📞 Phone" },
  { id: "text", label: "📝 Text" },
  { id: "wifi", label: "📶 Wi-Fi" },
  { id: "upi", label: "💳 UPI" },
  { id: "vcard", label: "📇 Contact" },
] as const;

export default function TypeTabs({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-2 rounded-xl font-medium transition ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-slate-700 hover:bg-slate-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}