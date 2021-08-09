import React from "react";

const MenuItems = [
  {
    name: "Home",
    href: "#",
    current: true,
  },
  {
    name: "Education",
    href: "#",
    current: false,
  },
  {
    name: "Projects",
    href: "#",
    current: false,
  },
  {
    name: "Blog",
    href: "#",
    current: false,
  },
  {
    name: "Contact",
    href: "#",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  return (
    <div
      style={{
        background: "black",
      }}
    >
      <div>
        <div className="flex items-center justify-center">
          <h1 class="flex initial italic text-4xl font-mono text-white px-10 justify-start">
            //Austin_Wang//
          </h1>
          <div className="flex initial">
            {MenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? "text-white" : "text-white",
                  "font-mono px-10 py-5 text-m hover:bg-gray-800"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
