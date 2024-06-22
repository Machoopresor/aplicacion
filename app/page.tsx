"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);
export default function App() {
  return (
    <main>
      <h1>Bienvenido a la aplicación</h1>
      <p>Esta es una página en blanco, lista para nuevas funcionalidades.</p>
    </main>
  );
}