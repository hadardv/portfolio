import "./stackOptions.css";

type StackOptionsProps = {
  onFieldSelect: (fieldSelected: "frontend" | "backend" | "other") => void;
  currentField: "frontend" | "backend" | "other";
};

export default function StackOptions({
  onFieldSelect,
  currentField,
}: StackOptionsProps) {
  return (
    <>
      <div className="stack-tabs mt-4 mx-auto flex items-center justify-center gap-6 md:gap-16 px-4 overflow-x-auto select-none">
        <label
          className="flex items-center justify-center flex-shrink-0 cursor-pointer radio"
          onMouseEnter={() => onFieldSelect("frontend")}
        >
          <input
            className="hidden peer"
            value="frontend"
            name="radio"
            type="radio"
            checked={currentField === "frontend"}
            onChange={() => onFieldSelect("frontend")}
            style={{ display: "none" }}
          />
          <span className="relative text-xl sm:text-xl md:text-2xl text-purple-400 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-purple-500 peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-purple-400 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-purple-500 before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0">
            Frontend
          </span>
        </label>

        <label
          className="flex items-center justify-center flex-shrink-0 cursor-pointer radio"
          onMouseEnter={() => onFieldSelect("backend")}
        >
          <input
            className="hidden peer"
            value="backend"
            name="radio"
            type="radio"
            checked={currentField === "backend"}
            onChange={() => onFieldSelect("backend")}
            style={{ display: "none" }}
          />
          <span className="relative text-xl sm:text-xl md:text-2xl text-purple-400 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-purple-500 peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-purple-400 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-purple-500 before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0">
            Backend
          </span>
        </label>
        <label
          className="flex items-center justify-center flex-shrink-0 cursor-pointer radio"
          onMouseEnter={() => onFieldSelect("other")}
        >
          <input
            className="hidden peer"
            value="other"
            name="radio"
            type="radio"
            checked={currentField === "other"}
            onChange={() => onFieldSelect("other")}
            style={{ display: "none" }}
          />
          <span className="relative text-xl sm:text-xl md:text-2xl text-purple-400 text-shadow-sm transition-all duration-300 after:opacity-0 peer-checked:after:opacity-100 peer-checked:after:transition-all peer-checked:after:duration-300 peer-checked:text-purple-500 peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:w-1/2 peer-checked:after:h-0.5 peer-checked:after:bg-purple-400 peer-checked:after:rounded-md peer-checked:after:absolute peer-checked:after:right-0 peer-checked:after:-bottom-1 peer-checked:before:content-[''] peer-checked:before:block peer-checked:before:w-full peer-checked:before:h-0.5 peer-checked:before:bg-purple-500 before:opacity-0 peer-checked:before:opacity-100 peer-checked:before:transition-all peer-checked:before:duration-300 peer-checked:before:rounded-md peer-checked:before:absolute peer-checked:before:right-0 peer-checked:before:bottom-0">
            Other
          </span>
        </label>
      </div>
    </>
  );
}
