import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between">
            <section>
                <h2>Comparable</h2>
            </section>
            <nav>
                <ul className="flex flex-row justify-center">
                    <li><button>New List</button></li>
                    <li><button>Contact</button></li>
                    <li><button>Settings</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header