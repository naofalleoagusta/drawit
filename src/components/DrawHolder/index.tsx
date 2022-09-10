import ColorPicker from "./ColorPicker";

const DrawHolder = () => {
  return (
    <div className="fixed bottom-4 aligned-flex-row justify-center w-full">
      <div className="aligned-flex-row gap-x-4 bg-white rounded-full shadow-2xl p-5">
        <ColorPicker />
      </div>
    </div>
  );
};

export default DrawHolder;
