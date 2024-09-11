import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel,} from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import plutusLogo from "../images/logo.png";

const navigation = [
    { name: "Home", href: "/home", current: false },
    { name: "Products", href: "/products", current: false },
    { name: "About Us", href: "/aboutus", current: false },
    { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="text-[white] text-sm  font-dmmono">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-3E97FF">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center min-[801px]:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open Menu
                                    </span>
                                    {open ? (
                                        <AiOutlineClose
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <AiOutlineMenu
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div >{/*flex flex-1 flex-end justify-center sm:items-stretch sm:justify-start*/}
                                <div className="flex items-center">
                                    <Link to="/home">
                                        <img
                                            className="h-16 w-auto"
                                            src={plutusLogo}
                                            alt="Plutus Global Inc"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 min-[801px]:block mr-20">
                                <div className="flex space-x-4 items-center ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-white-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "rounded-md px-3 py-2 text-2xl font-medium", "hover:bg-[#ffffff] hover:text-[#3e97FF]"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <DisclosurePanel className="min-[801px]:hidden" >
                        <div className="space-y-1 px-2 pb-3 pt-2 bg-[#3e97ff]">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
