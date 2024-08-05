export default function page() {
  return (
    <div className="flex-col items-center justify-center">
      <div className="text-center text-black my-2 py-5">
          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl">
            Notes
          </h1>
          <p className="my-4">Recent Updates, Notes</p>
        </div>
        <div className="w-full my-12 flex items-center justify-center"> Currently there are no updates!...</div>
    </div>
  );
}
