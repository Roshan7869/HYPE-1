import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="bg-white">
      <div className="wrap flex items-center gap-2.5 py-[22px] text-[14px] font-medium text-muted">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <Fragment key={i}>
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-ink">
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "font-semibold text-ink" : ""}>{c.label}</span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 opacity-50" />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
