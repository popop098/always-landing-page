import React, {Component, useState} from "react";
import Link from "next/link";
import classNames from "classnames";

export default function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    // }
    return (
        <header className="text-base-content rounded-box mb-2">
            <div className="navbar fixed">
                <div className="px-2 mx-2 navbar-start gap-2">
                    <span className="text-lg font-bold">
                        <Link href="/">
                          <a><i>Always</i></a>
                        </Link>
                    </span>
                </div>
                <div className="hidden md:flex px-2 mx-2 navbar-center">
                    <div className="flex items-stretch">
                        <Link href="/">
                            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
                        </Link>
                        <Link href="#">
                            <a className="btn btn-ghost btn-sm rounded-btn" onClick={() => alert('준비중입니다.')}>익명게시판</a>
                        </Link>
                        <Link href="#">
                            <a className="btn btn-ghost btn-sm rounded-btn" onClick={() => alert('준비중입니다.')}>입시정보</a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="md:hidden flex">
                        <button
                            className="btn btn-square btn-ghost"
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={classNames(
                    "md:hidden",
                    {hidden: !menuToggle},
                    "animate__animated animate__fadeIn"
                )}
            >
                <Link href="/">
                    <a className="block py-2 px-4 text-sm hover:bg-base-200">Home</a>
                </Link>
                <Link href="#">
                    <a className="block py-2 px-4 text-sm hover:bg-base-200" onClick={() => alert('준비중입니다.')}>익명게시판</a>
                </Link>
                <Link href="#">
                    <a className="block py-2 px-4 text-sm hover:bg-base-200 mb-2" onClick={() => alert('준비중입니다.')}>
                        입시정보
                    </a>
                </Link>
            </div>
        </header>
    );
}
