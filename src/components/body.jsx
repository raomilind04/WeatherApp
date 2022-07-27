import { TiWeatherCloudy } from "react-icons/ti";

function Body() {
  return (
    <div className="flex flex-col">
      <div className="mr-20 flex flex-row items-center mb-20 ml-10">
        <TiWeatherCloudy className="w-20 h-20" />
        <div className="text-2xl ml-3">Your Weather Report is one click away !</div>
      </div>
      <div className="form-control ml-10">
        <div className="input-group flex flex-row">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered input-lg w-1/2"
          />
          <button className="btn btn-square btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
