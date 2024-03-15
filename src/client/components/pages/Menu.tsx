import React from "react";
import { navigation } from "../../app/routes/navigation";
import { Link } from "react-router-dom";
import { useAuth } from "../../features/auth";
type Route = {
  path: string;
  name: string;
  element: React.JSX.Element;
  isPrivate: boolean;
  onMenu: boolean;
};
export function ShowMenu() {
  const { user, logOut } = useAuth();
  const Menu = ({ route }: { route: Route }) => {
    return (
      <div>
        <Link
          className="p-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 cursor-pointer"
          to={route.path}
        >
          {route.name}
        </Link>
      </div>
    );
  };
  return (
    <div className="flex justify-around p-10 bg-gray-200 text-black text-lg">
      {navigation.map((route, index) => {
        if (!route.isPrivate && route.onMenu) {
          return <Menu key={index} route={route} />;
        } else if (user.isAuthenticated && route.onMenu) {
          return <Menu key={index} route={route} />;
        } else return false;
      })}
      {user.isAuthenticated ? (
        <div>
          <Link
            className="p-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 cursor-pointer"
            to={"/"}
            onClick={logOut}
          >
            Log Out
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="p-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 cursor-pointer"
            to={"login"}
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
}
