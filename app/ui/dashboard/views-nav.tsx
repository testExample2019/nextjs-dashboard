import { clsx } from "clsx";
import { views } from "@/app/lib/constants";
import Link from "next/link";

export default function ViewsNav({
  dealName,
  dealView,
}: {
  dealName: string;
  dealView: string;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex grow flex-row justify-between space-x-2">
        <div className="inline-flex items-center border border-action-primary rounded-medium overflow-hidden">
          {views.map((link) => {
            return (
              <Link
                key={link.name}
                href={`/deals/${dealName}/${link.href}`}
                className={clsx(
                  "flex grow items-center min-w-28 text-center transition-all text-action-primary justify-center gap-2  p-2 text-sm font-medium  hover:text-blue-dark",
                  {
                    "bg-action-primary text-white hover:bg-blue-dark hover:text-white":
                      dealView?.includes(link.href[1]),
                  },
                )}
              >
                <p className={"uppercase"}>{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
