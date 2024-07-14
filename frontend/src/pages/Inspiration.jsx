import Header from "../components/Header";
const Inspiration = () => {
  return (
    <>
      <div className="flex  text-white min-h-screen">
        {/* Left part with inspirational text */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">
              Embracing the Present Moment.
            </h2>
            <p className="text-lg">
              "The fear is simply because you are not living with life, You are
              living in your mind."
            </p>
            <p className="mt-4 text-sm">- Sadhguru</p>
          </div>
        </div>

        {/* Right part with image */}
        <div className="flex-1 flex items-center justify-center p-8">
          <img
            src="../../public/sadhguru.jpg"
            alt="Inspirational"
            className="max-w-full h-auto rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Inspiration;
