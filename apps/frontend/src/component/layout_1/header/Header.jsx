"use client";

import Link from "next/link";
import cx from "classnames";
import s from "./Header.module.scss";
import { navigationBarList } from "../../utils/constant";

function HeaderHome() {
  const navBarList = ["home", "org", "student"];

  return (
    <div className={cx(s.headerContainer)}>
      <div className={cx(s.navContainer)}>
        {navBarList &&
          navBarList.map((key) => {
            const navItem = navigationBarList[key];
            if (navItem) {
              return (
                <Link key={key} href={navItem.path} className={cx(s.navItem)}>
                  {navItem.name}
                </Link>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
}

export default HeaderHome;
