import React from "react";
import Lists from "./Lists"

// Holds each users lists and settings

const Profile = () => {
    return (
        <div>
            <header>
                <section>
                    <h2>Comparable</h2>
                </section>
                <nav>
                    <li><button>New List</button></li>
                    <li><button>Contact</button></li>
                    <li><button>Settings</button></li>
                </nav>
            </header>
            <main>
                <Lists />
            </main>
            <footer></footer>
        </div>
    )
}

export default Profile