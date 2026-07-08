type WifiFormProps = {
  wifiName: string;
  setWifiName: React.Dispatch<React.SetStateAction<string>>;
  wifiPassword: string;
  setWifiPassword: React.Dispatch<React.SetStateAction<string>>;
  encryption: string;
  setEncryption: React.Dispatch<React.SetStateAction<string>>;
};

export default function WifiForm({
  wifiName,
  setWifiName,
  wifiPassword,
  setWifiPassword,
  encryption,
  setEncryption,
}: WifiFormProps) {
  return (
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
  );
}