import { Env } from "../../constants";

export default function admin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        This is Admin Page
        <div>
          {Env.API_URL}
        </div>
        
      </div>
    </div>
  );
}
