type VCardFormProps = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  jobTitle: string;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  website: string;
  setWebsite: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
};

export default function VCardForm({
  fullName,
  setFullName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  company,
  setCompany,
  jobTitle,
  setJobTitle,
  website,
  setWebsite,
  address,
  setAddress,
}: VCardFormProps) {
  return (
    <>
      <label className="block mb-2">Full Name</label>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="John Doe"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Phone Number</label>
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="+91 9876543210"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john@example.com"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Company</label>
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="OpenAI"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Job Title</label>
      <input
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Software Engineer"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Website</label>
      <input
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="https://example.com"
        className="w-full p-3 rounded-lg text-black"
      />

      <label className="block mt-4 mb-2">Address</label>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Mumbai, India"
        className="w-full p-3 rounded-lg text-black"
      />
    </>
  );
}