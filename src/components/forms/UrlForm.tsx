type UrlFormProps = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
};

export default function UrlForm({ url, setUrl }: UrlFormProps) {
  return (
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
  );
}