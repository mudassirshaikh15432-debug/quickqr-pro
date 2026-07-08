type PhoneFormProps = {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};

export default function PhoneForm({
  phoneNumber,
  setPhoneNumber,
}: PhoneFormProps) {
  return (
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
  );
}