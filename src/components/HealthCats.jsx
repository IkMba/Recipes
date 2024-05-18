import { Link } from "react-router-dom";
import { healthCats } from "../data/data";

function HealthCats() {
  return (
    <div className="px-2 text-center mt-2 md:mt-8 md:px-32">
      <h3 className="text-3xl md:text-4xl font-bold font-gatile">
        Health Preferences
      </h3>
      <p className="text-md mb-4">
        Search according to your health preferences.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {healthCats.map((item) => (
          <Link
            to={`/health/${item}`}
            key={item}
            className="rounded-4xl bg-orange font-semibold font-gatile px-1 py-0.5 rounded-md md:py-1 md:px-2 md:mt-2 text-[14px] md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HealthCats;
