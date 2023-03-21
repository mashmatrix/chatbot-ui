import { useSession } from "next-auth/react";
import { FC } from "react";

export const You: FC = () => {
  const { data } = useSession();
  if (!data) {
    return <></>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      width={30}
      height={30}
      src={data.user?.image ?? ""}
      alt={data.user?.name ?? "You"}
    />
  );
};
