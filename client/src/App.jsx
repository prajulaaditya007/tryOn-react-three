import Canvas from './canvas';
import React from 'react';
import Customizer from "./pages/Customizer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <main className="app transition-all ease-in">
            <Home/>
            <Canvas/>
            <Customizer/>
        </main>
    )
}