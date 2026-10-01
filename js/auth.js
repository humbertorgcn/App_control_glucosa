// Lógica de autenticación: registro, login, logout y control de sesión.

import { supabase } from "./supabaseClient.js";

const authView = document.getElementById("auth-view");
const appView = document.getElementById("app-view");
const authMessage = document.getElementById("auth-message");

function mostrarMensaje(texto) {
  authMessage.textContent = texto;
}

const setupView = document.getElementById("setup-view");

function mostrarVista(nombreVista) {
  authView.hidden = nombreVista !== "auth";
  setupView.hidden = nombreVista !== "setup";
  appView.hidden = nombreVista !== "app";
}

async function usuarioTienePerfil(userId) {
  const { data, error } = await supabase
    .from("perfil")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Error al consultar el perfil:", error.message);
    return false;
  }

  return data !== null;
}


async function decidirVista(session) {
  if (!session) {
    mostrarVista("auth");
    return;
  }

  const tienePerfil = await usuarioTienePerfil(session.user.id);
  mostrarVista(tienePerfil ? "app" : "setup");
}

// --- Registro ---
document.getElementById("register-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    mostrarMensaje("Error al registrarte: " + error.message);
  } else {
    mostrarMensaje("Cuenta creada. Revisa tu email para confirmarla antes de iniciar sesión.");
  }
});

// --- Login ---
document.getElementById("login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    mostrarMensaje("Error al iniciar sesión: " + error.message);
  }
  // Si no hay error, onAuthStateChange se encarga de mostrar la vista de la app.
});

// --- Logout ---
document.getElementById("logout-button").addEventListener("click", async () => {
  await supabase.auth.signOut();
});

// --- Reacciona a cualquier cambio de sesión (login, logout, token renovado...) ---
supabase.auth.onAuthStateChange((_event, session) => {
  decidirVista(session);
});

// --- Comprobación inicial al cargar la página ---
export async function comprobarSesionInicial() {
  const { data: { session } } = await supabase.auth.getSession();
  await decidirVista(session);
}