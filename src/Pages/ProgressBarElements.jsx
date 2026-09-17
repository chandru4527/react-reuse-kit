import ProgressBar from "../components/ui/feedback/ProgressBar";

const ProgressBarElements = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 bg-white p-6 m-3 rounded">
      <ProgressBar
        label="Basic Progress"
        value={40}
      />

      <ProgressBar
        label="Success"
        value={75}
        color="bg-green-500"
      />

      <ProgressBar
        label="Warning"
        value={60}
        color="bg-yellow-500"
        size="lg"
      />

      <ProgressBar
        label="Danger"
        value={90}
        color="bg-red-500"
      />

      <ProgressBar
        label="Small"
        value={35}
        size="sm"
      />

      <ProgressBar
        label="Large"
        value={80}
        size="xl"
        trackColor="bg-gray-300"
      />

      <ProgressBar
        label="Without Percentage"
        value={65}
        showValue={false}
      />

      <ProgressBar
        label="Animated"
        value={70}
        color="bg-purple-600"
        animated
      />
    </div>
  );
};

export default ProgressBarElements;