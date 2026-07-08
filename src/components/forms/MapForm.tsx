type MapFormProps = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

export default function MapForm({
  location,
  setLocation,
}: MapFormProps) {
  return (
    <>
      <label className="block mb-2">
        Google Maps Location
      </label>

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Eiffel Tower, Paris"
        className="w-full p-3 rounded-lg text-black"
      />

      <p className="text-gray-400 text-sm mt-2">
        Enter an address, landmark, or coordinates.
      </p>
    </>
  );
}