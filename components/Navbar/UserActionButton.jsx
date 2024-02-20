import Link from "next/link";
import { Button } from "../ui/button";
import { authUserSession } from "@/libs/auth-libs";
import { SignIn, SignOut } from "@phosphor-icons/react/dist/ssr";
const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? <SignOut size={20} /> : <SignIn size={20} />;
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center ml-auto gap-4 lg:gap-6 dark:text-dark-text">
      {user && (
        <Link className="font-medium " href="/users/dashboard">
          Dashboard
        </Link>
      )}
      <Link href={actionURL}>
        <Button className="bg-light-primary text-light-background dark:bg-dark-primary">
          {actionLabel}
        </Button>
      </Link>
    </div>
  );
};

export default UserActionButton;
