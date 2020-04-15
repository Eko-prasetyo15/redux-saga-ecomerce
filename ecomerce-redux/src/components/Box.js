import React from "react";
import List from "./List.js";
import Header from "./Header";

export default function Box(props) {
    return (
        <div className="container">
            <Header />
            <List />
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link text-dark" href="/">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link text-dark" href="/">1</a></li>
                    <li className="page-item disabled">
                        <a className="page-link text-dark" href="/">Next</a>
                    </li>
                </ul>
            </nav>
            <footer className="mt-5">
                <hr />
                <p className="lead pb-3 small text-center">
                    @ Made by Abushanum
                </p>
            </footer>
        </div>
    );
}